import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './router.js';

const app = express();

// Connect to DB
mongoose.connect('mongodb+srv://rahayuputri:<password>@cluster0.b87yc.mongodb.net/<dbname>?retryWrites=true&w=majority,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
  console.log('Connect to database success');
});

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res, next) => {
  res.json({
    message: 'success',
  });
});

app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`App listens to port ${process.env.PORT}`);
});