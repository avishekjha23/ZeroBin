import React, { useState } from 'react';
import API from '../api'; // Assuming API is set up in api.js

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/contact', contactDetails);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={contactDetails.name}
          onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={contactDetails.email}
          onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          value={contactDetails.message}
          onChange={(e) => setContactDetails({ ...contactDetails, message: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
