import express from 'express';
import { getHouses } from '../controllers/dataController.mjs'; // Import your Supabase controller function

// Create a router to define routes for API
const router = express.Router();

// Define a GET route to aquire the houses (callback function gets excecuted)
router.get('/api/houses', async (req, res) => {
  try {
    // Call controller module to fetch houses data
    const houses = await getHouses();
    res.json(houses);
  } catch (error) {
    console.error('Error fetching houses:', error);

    // Send error back to client alogn with a JSON object containing the error message
    res.status(500).json({ error: 'Failed to fetch houses from Supabase' });
  }
});

export default router;
