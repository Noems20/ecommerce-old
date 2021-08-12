import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

// Middlewares
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

// Allow send json on body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mount routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Route not found
app.use(notFound);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
