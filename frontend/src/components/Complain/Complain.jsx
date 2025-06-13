import React, { useState } from 'react';
import './complain.css'; // Use separate CSS file

const Complain = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    category: [],
    location: '',
    locationDetails: '',
    picture: null
  });

  const categories = ['Organic', 'Inorganic', 'Metallic', 'All'];
  const locations = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Other'];

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      category: checked
        ? [...prev.category, value]
        : prev.category.filter((cat) => cat !== value),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, picture: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('mobile', formData.mobile);
    data.append('email', formData.email);
    data.append('category', JSON.stringify(formData.category));
    data.append('location', formData.location);
    data.append('locationDetails', formData.locationDetails);
    if (formData.picture) {
      data.append('picture', formData.picture);
    }
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/complaints`, {
        method: 'POST',
        body: data
      });
  
      const result = await response.json();
      alert(result.message || 'Complaint Registered!');
    } catch (err) {
      console.error('Error submitting complaint:', err);
      alert('Failed to submit complaint.');
    }
  };

  return (
    <div className="complain-wrapper">
      <div className="complain-card">
        <form onSubmit={handleSubmit} autoComplete="off" className="complain-form">
          <h2 className="form-title">Register a Complaint</h2>

          <div className="complain-group">
          <label><b>Name:</b></label><br />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complain-group">
          <label><b>Mobile:</b></label><br />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complain-group">
          <label><b>Email:</b></label><br />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complain-group category-checks">
            <label><b>Category:</b></label><br />
            {categories.map((cat) => (
              <label key={cat} className="checkbox-label"><br />
                <input
                  type="checkbox"
                  value={cat}
                  onChange={handleCategoryChange}
                /> {cat}
              </label>
            ))}
          </div>

          <div className="complain-group">
          <label><b>Location:</b></label><br />
            <select
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="complain-group">
            <textarea
              name="locationDetails"
              placeholder="Location Details"
              value={formData.locationDetails}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complain-group">
            <label><b>Upload Picture:</b></label><br />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            
            />
          </div>

          <div>
            <input
              type="submit"
              value="Register"
              className="complain-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complain;
