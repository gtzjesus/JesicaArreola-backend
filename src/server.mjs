import express from 'express';
import supabaseRoutes from './routes/supabaseRoute.mjs'; // Import your Supabase routes

const app = express();
const PORT = process.env.PORT || 3001;

// Use Supabase routes
app.use('/api', supabaseRoutes);

app.get('/', (req, res) => {
  res.send('WorldHello!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
