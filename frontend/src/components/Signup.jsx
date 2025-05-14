import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login/login.css';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = [];
  
    if (!fullName || !email || !password || !confirmPassword) {
      validationErrors.push('All fields are required.');
    }
    if (password !== confirmPassword) {
      validationErrors.push('Passwords do not match.');
    }
  
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4001/api/auth/signup`, {
        fullName,
        email,
        password
      }, {
        withCredentials: true
      });

      alert(response.data.message); // Show success message
      setErrors([]); // Clear any previous errors
    } catch (error) {
      console.error(error); // Log the error for debugging

      const msg = error.response?.data?.message || 'Signup failed'; 
      setErrors([msg]); // Show error message
    }
  };

  return (
    <div className="header">
      <div className="inner-header flex">
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4 form login-form">
              <form onSubmit={handleSubmit} autoComplete="off">
                <h2 className="text-center" style={{ color: 'black' }}>User Signup</h2>
                <p className="text-center" style={{ color: 'black' }}>
                  <b>Create your account</b>
                </p>

                {errors.length > 0 && (
                  <div className="alert alert-danger text-center">
                    {errors.map((error, index) => (
                      <div key={index}>{error}</div>
                    ))}
                  </div>
                )}

                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control button"
                    type="submit"
                    value="Signup"
                  />
                </div>
                <div className="link login-link text-center" style={{ color: 'black' }}>
                  <b>Already a member?&nbsp; </b>
                  <Link to="/complain"><b>Login here</b></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Waves */}
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

      {/* Footer Content */}
      <div className="content flex">
        <p>© 2025 | ZeroBin</p>
      </div>
    </div>
  );
};

export default SignupForm;
