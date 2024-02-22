import express from 'express';
import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Supabase client
const supabaseUrl = 'https://dpzeaijawvrbqlrgllyv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwemVhaWphd3ZyYnFscmdsbHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NTYyNzEsImV4cCI6MjAyNDEzMjI3MX0.pZGFClEsWRhqlSxCT--uK6FiNNnyy_0snpujRc_3nyM';
const supabase = createClient(supabaseUrl, supabaseKey);

// Define a route to fetch houses from Supabase
app.get('/houses', async (req, res) => {
  try {
    const { data: houses, error } = await supabase.from('houses').select('*');
    if (error) {
      throw new Error('Houses could not be fetched');
    }
    res.json(houses);
  } catch (error) {
    console.error('Error fetching houses:', error);
    res.status(500).json({ error: 'Failed to fetch houses from Supabase' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
