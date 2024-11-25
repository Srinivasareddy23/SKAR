import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import dbConnection from './src/utils/db.js';
import fileRoutes from './src/routes/career/fileRoutes.js';
import contactRoutes from './src/routes/contact/contactRoutes.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Database Connection
dbConnection();

// Routes
app.use('/api/files', fileRoutes);
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
