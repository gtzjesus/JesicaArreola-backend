import express from 'express';
import { getHouses } from '../controllers/dataController'; // Import your Supabase controller function

const router = express.Router();

// Define route to fetch houses
router.get('/houses', getHouses);

export default router;
