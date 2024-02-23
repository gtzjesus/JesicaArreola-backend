import express from 'express';
import { getHouses } from '../controllers/dataController.mjs'; // Import your Supabase controller function

const router = express.Router();

// Define route to fetch houses
router.get('/api/houses', async (req, res) => {
  try {
    const houses = await getHouses();
    res.json(houses);
  } catch (error) {
    console.error('Error fetching houses:', error);
    res.status(500).json({ error: 'Failed to fetch houses from Supabase' });
  }
});

export default router;
