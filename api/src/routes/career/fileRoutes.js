import express from 'express';
import { uploadResume } from '../../controllers/fileController.js';
import upload from '../../middlewares/multer/upload.js';

const router = express.Router();

router.post('/upload', upload.single('resume'), uploadResume);

export default router;
