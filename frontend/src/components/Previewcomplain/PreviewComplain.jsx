import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './previewcomplain.css'; // CSS file for styling

const PreviewComplain = () => {
  const [complaints, setComplaints] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user from localStorage
    const currentUser = JSON.parse(localStorage.getItem('user'));
    setUser(currentUser);

    const fetchComplaints = async () => {
      try {
        const email = currentUser?.email;
        
        // First fetch all complaints
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/complaints`);
        const data = await response.json();
        console.log('All fetched complaints:', data);
        
        // Then filter on the client side to ensure we only show user's complaints
        if (email) {
          const userComplaints = data.filter(complaint => 
            complaint.email.toLowerCase() === email.toLowerCase()
          );
          console.log('Filtered user complaints:', userComplaints);
          setComplaints(userComplaints);
        } else {
          // If no user is logged in, show no complaints
          setComplaints([]);
        }
      } catch (err) {
        console.error('Error fetching complaints:', err);
      }
    };

    fetchComplaints();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this complaint?')) {
      try {
        await fetch(`${process.env.REACT_APP_API_URL}/api/complaints/${id}`, {
          method: 'DELETE',
        });
        setComplaints(complaints.filter((c) => c._id !== id));
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  return (
    <div className="header">
    <div className="preview-container">
      <h2>My Registered Complaints</h2>
      <table className="complaints-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Date & Time</th>
            <th>Name & Contact</th>
            <th>Type of Waste</th>
            <th>Location</th>
            <th>Description</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {complaints.length > 0 ? (
            complaints.map((c, index) => (
              <tr key={c._id}>
                <td>{index + 1}</td>
                <td>{new Date(c.createdAt).toLocaleString()}</td>
                <td>
                  <strong>{c.fullName}</strong><br />
                  {c.mobile}<br />
                  {c.email}
                </td>
                <td>{c.category.join(', ')}</td>
                <td>{c.location}</td>
                <td>{c.locationDetails}</td>
                <td>
                  {c.picture ? (
                    <a href={`http://localhost:4001/${c.picture}`} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-eye" size={20}></i> View
                    </a>
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>
                  <button className="edit-btn" onClick={() => navigate(`/update/${c._id}`)}>
                    <i className="fa fa-edit" size={16}></i> Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(c._id)}>
                    <i className="fa fa-trash" size={16}></i> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>No complaints available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>

      {/* Footer */}
      <div className="content flex">
        <p>
          <a href="/adminlogin">
            <i className="fa fa-lock" aria-hidden="true"> Login As Admin</i><br /><br />
          </a>© 2025 | ZeroBin
        </p>
      </div>
    </div>
  );
};

export default PreviewComplain;
