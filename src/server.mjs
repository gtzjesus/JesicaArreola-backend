import express from 'express';
import supabaseRoutes from './routes/supabaseRoute.mjs'; // Import your Supabase routes

const app = express();
const PORT = process.env.PORT || 3001;

// Use Supabase routes
app.use('/api', supabaseRoutes);

app.get('/', (req, res) => {
  res.send('WorldHello!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
