import express from 'express';
import multer from 'multer';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dbConnection from './src/utils/db.js'; 
import File from './src/schemas/files/resumeupload.js';

const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


dbConnection();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('resume'), async (req, res) => {
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
});

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: "srinivasa1029@gmail.com", 
    pass: "cepk xkew iqpj mvsn", 
  },
});


transporter.verify((error, success) => {
  if (error) {
    console.error("Error authenticating with email service:", error);
  } else {
    console.log("Email transporter is configured successfully:", success);
  }
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: 'srinivasa1029@gmail.com', 
    to: "srinivasa1029@gmail.com", 
    replyTo: email,
    subject: `Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message." });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
