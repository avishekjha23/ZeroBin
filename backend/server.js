const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const multer = require('multer'); // Import multer
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Backend is running 🚀' });
});

// Middlewares
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

app.use('/uploads', express.static('uploads'));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + file.originalname)
});

const upload = multer({ storage });

// Mongoose model for complaints
const Complaint = require('./models/Complaint');

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Route to handle complaints form submission
app.post('/api/complaints', upload.single('picture'), async (req, res) => {
  try {
    const { fullName, mobile, email, category, location, locationDetails } = req.body;
    const picture = req.file ? req.file.path : null;

    const newComplaint = new Complaint({
      fullName,
      mobile,
      email,
      category: JSON.parse(category), // Parse category to array
      location,
      locationDetails,
      picture
    });

    await newComplaint.save();

    res.status(200).json({
  message: 'Complaint Registered Successfully!',
  imageUrl: `${req.protocol}://${req.get('host')}/${picture}`
});
  } catch (error) {
    console.error('Error while saving complaint:', error);
    res.status(500).json({ error: 'Failed to register complaint.' });
  }
});

// ✅ GET a specific complaint by ID
app.get('/api/complaints/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ error: 'Complaint not found' });
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch complaint' });
  }
});

// ✅ GET complaints for a specific user based on email
app.get('/api/complaints', async (req, res) => {
  const email = req.query.email?.toLowerCase(); // Get the email from query params
  try {
    let complaints;
    if (email) {
      complaints = await Complaint.find({
        email: { $regex: new RegExp(`^${email}$`, 'i') }
      }).sort({ createdAt: -1 }); // Sort by creation date
    } else {
      complaints = await Complaint.find().sort({ createdAt: -1 });
    }
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
});

// ✅ UPDATE a complaint by ID
app.put('/api/complaints/:id', upload.single('picture'), async (req, res) => {
  try {
    const { fullName, mobile, email, category, location, locationDetails } = req.body;
    const updateData = {
      fullName,
      mobile,
      email,
      category: JSON.parse(category),
      location,
      locationDetails
    };

    if (req.file) updateData.picture = req.file.path;

    const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedComplaint) return res.status(404).json({ error: 'Complaint not found' });

    res.json({ message: 'Complaint updated successfully', updatedComplaint });
  } catch (error) {
    console.error('Error updating complaint:', error);
    res.status(500).json({ error: 'Failed to update complaint' });
  }
});

// DELETE a complaint
app.delete('/api/complaints/:id', async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id); // Delete complaint by ID
    res.json({ message: 'Complaint Deleted Successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete complaint' });
  }
});

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
