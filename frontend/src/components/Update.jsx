import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Complain/complain.css';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    category: [],
    location: '',
    locationDetails: '',
    picture: null,
  });
  const [preview, setPreview] = useState(null);

  const categories = ['Organic', 'Inorganic', 'Metallic', 'All']; // Available categories

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/complaints/${id}`)
      .then((res) => res.json());
      .then((data) => {
        setFormData({
          ...data,
          category: data.category || [], // Set previously selected categories
        });
        if (data.picture) setPreview(`http://localhost:4001/${data.picture}`);
      })
      .catch((err) => console.error('Error fetching complaint:', err));
  }, [id]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    let updatedCategories = [...formData.category];
    if (checked) {
      updatedCategories.push(value); // Add category if checked
    } else {
      updatedCategories = updatedCategories.filter((cat) => cat !== value); // Remove category if unchecked
    }
    setFormData({ ...formData, category: updatedCategories });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, picture: e.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'category') {
        updatedData.append(key, JSON.stringify(value));
      } else {
        updatedData.append(key, value);
      }
    });

    try {
      const response = await fetch(`http://localhost:4001/api/complaints/${id}`, {
        method: 'PUT',
        body: updatedData,
      });

      if (response.ok) {
        alert('Complaint updated successfully!');
        navigate('/previewcomplain');
      } else {
        throw new Error('Failed to update');
      }
    } catch (error) {
      console.error('Update failed:', error);
      alert('Error updating complaint');
    }
  };

  return (
    <div className="complain-wrapper">
      <div className="complain-card">
        <h2 className="form-title">Update Complaint</h2>
        <form onSubmit={handleSubmit} className="complain-form">
          <div className="complain-group">
            <label><b>Name:</b></label><br />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="complain-group">
            <label><b>Mobile:</b></label><br />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
            />
          </div>

          <div className="complain-group">
            <label><b>Email:</b></label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="complain-group category-checks">
            <label><b>Category:</b></label><br />
            {categories.map((cat) => (
              <label key={cat} className="checkbox-label">
                <input
                  type="checkbox"
                  value={cat}
                  checked={formData.category.includes(cat)} // Check if the category is selected
                  onChange={handleCategoryChange}
                /> {cat}
              </label>
            ))}
          </div>

          <div className="complain-group">
            <label><b>Location:</b></label><br />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
            />
          </div>

          <div className="complain-group">
            <textarea
              name="locationDetails"
              value={formData.locationDetails}
              onChange={handleChange}
              placeholder="Describe the location"
              required
            />
          </div>

          <div className="complain-group">
            <label><b>Current Image:</b></label><br />
            {preview && (
              <div>
                <img src={preview} alt="Current Upload" width="200" />
              </div>
            )}
          </div>

          <div className="complain-group">
            <label><b>Upload Picture:</b></label><br />
            <input type="file" name="picture" onChange={handleFileChange} />
          </div>

          <button type="submit" className="complain-button">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
