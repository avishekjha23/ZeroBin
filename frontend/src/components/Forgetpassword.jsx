import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login/login.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required.');
      setMessage('');
      return;
    }

    try {

      await axios.post('http://localhost:4001/api/auth/forgetpassword', { email });
      setMessage('Password reset link sent to your email.');
      setError('');
      setEmail('');
    } catch (err) {
      const msg = err.response?.data?.message || 'Password reset request failed';
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
                <h2 className="text-center" style={{ color: 'black' }}>Forgot Password</h2>
                <p className="text-center" style={{ color: 'black' }}>
                  <b>Enter your email</b>
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
                    className="form-control button"
                    type="submit"
                    value="Send Reset Link"
                  />
                </div>
                <div className="link login-link text-center" style={{ color: 'black' }}>
                  <b>Remember your password? &nbsp;</b><br></br><Link to="/login"><b>Login now</b></Link>
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
            <i className="fa fa-home" aria-hidden="true"> Home</i><br /><br />
          </a>© 2025 | ZeroBin
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;