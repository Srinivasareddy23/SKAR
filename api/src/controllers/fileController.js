import File from '../schemas/files/resumeupload.js';

export const uploadResume = async (req, res) => {
  try {
    const { experience } = req.body;

    if (!experience) {
      return res.status(400).json({ error: 'Experience is required' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileData = new File({
      originalName: req.file.originalname,
      fileName: req.file.filename,
      filePath: req.file.path,
      mimeType: req.file.mimetype,
      size: req.file.size,
      experience,
    });

    await fileData.save();

    res.status(201).json({
      message: 'Application submitted successfully!',
      file: fileData,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
