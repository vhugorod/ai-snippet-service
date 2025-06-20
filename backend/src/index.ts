import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import snippetRouter from './routes/snippet.routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.json());

app.use('/snippets', snippetRouter);

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
