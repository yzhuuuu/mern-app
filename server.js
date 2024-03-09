import 'express-async-errors';

import * as dotenv from 'dotenv';

import authRouter from './routes/authRouter.js';
import authenticateUser from './middleware/authMiddleware.js';
import cookieParser from 'cookie-parser';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleWare.js';
import express from 'express';
import jobRouter from './routes/jobRouter.js';
import mongoose from 'mongoose';
import morgan from 'morgan';

// middleware
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/auth', authRouter);
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
app.use(errorHandlerMiddleware);

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
