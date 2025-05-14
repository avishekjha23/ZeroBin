const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  category: [String],
  location: { type: String, required: true },
  locationDetails: { type: String, required: true },
  picture: { type: String } // Store the image path
}, { timestamps: true });

const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = Complaint;
