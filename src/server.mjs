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

// POST route to send Email
app.post('/api/sendEmail', async (req, res) => {
  try {
    const { name, email, phone, howCanWeHelp, howDidYouHear } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'arreolahomesales@outlook.com',
        pass: '1427JaJg',
      },
    });

    const mailOptions = {
      from: 'arreolahomesales@outlook.com',
      to: 'arreolahomesales@outlook.com',
      subject: 'New House Lead',
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>How can we help: ${howCanWeHelp}</p>
        <p>How did you hear: ${howDidYouHear}</p>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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
