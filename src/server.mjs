import express from 'express';
import cors from 'cors';

import supabaseRoute from './routes/supabaseRoute.mjs'; // Import your Supabase routes

const app = express();
const PORT = process.env.PORT || 3001;

// Update CORS configuration to allow requests from your frontend URL
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Use Supabase routes
app.use('/', supabaseRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
