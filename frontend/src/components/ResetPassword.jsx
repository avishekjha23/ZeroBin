import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login/login.css';

const ResetPassword = () => {
  const { token } = useParams(); // get token from URL
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError('Both fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/resetpassword/${token}`, {
        password,
      });
      setMessage(res.data.message);
      setError('');
      setTimeout(() => navigate('/login'), 3000); // redirect after 3s
    } catch (err) {
      const msg = err.response?.data?.message || 'Reset failed';
      setError(msg);
      setMessage('');
    }
  };

  return (
    <div className="header">
      <div className="inner-header flex">
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4 form login-form">
              <form onSubmit={handleSubmit} autoComplete="off">
                <h2 className="text-center" style={{ color: 'black' }}>Reset Password</h2>
                <p className="text-center" style={{ color: 'black' }}>
                  <b>Enter your new password</b>
                </p>

                {error && (
                  <div className="alert alert-danger text-center">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="alert alert-success text-center" style={{ backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' }}>
                    {message}
                  </div>
                )}

                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="New Password"
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
                    placeholder="Confirm New Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control button"
                    type="submit"
                    value="Reset Password"
                  />
                </div>
                <div className="link login-link text-center" style={{ color: 'black' }}>
                  <b>Remember your password? </b><br></br><Link to="/login"><b>Login now</b></Link>
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

      {/* Footer */}
      <div className="content flex">
        <p>
          <a href="/">
            <i className="fa fa-home" aria-hidden="true"> Home</i><br />
          </a>Waste Management System | 2021
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
