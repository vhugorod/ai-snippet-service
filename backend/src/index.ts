import express from 'express';
import dotenv from 'dotenv';
import snippetRoutes from './routes/snippets';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/snippets', snippetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
