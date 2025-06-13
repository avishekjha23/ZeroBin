import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import '../Login/login.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { loginAdmin } = useAuth();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrors(['All fields are required.']);
      return;
    }

    try {
      const res = await axios.post('http://localhost:4001/api/auth/adminlogin', {
        email,
        password,
      });

      loginAdmin(res.data.admin);
      navigate(from, { replace: true });
    } catch (err) {
      const msg = err.response?.data?.message || 'Admin login failed';
      setErrors([msg]);
    }
  };

  return (
    <div className="header">
      <div className="inner-header flex">
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4 form login-form">
              <form onSubmit={handleSubmit} autoComplete="off">
                <h2 className="text-center" style={{ color: 'black' }}>Admin Login</h2>
                <p className="text-center" style={{ color: 'black' }}>
                  <b>Login with your admin credentials</b>
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
                    type="email"
                    name="email"
                    placeholder="Admin Email"
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
                <div className="link forget-pass text-left">
                  <a href="/forgetpassword"><b>Forgot password?</b></a>
                </div>
                <div className="form-group">
                  <input
                    className="form-control button"
                    type="submit"
                    value="Login as Admin"
                  />
                </div>
                <div className="link login-link text-center" style={{ color: 'black' }}>
                  <b>Back to&nbsp;</b><a href="/login"><b>User Login</b></a>
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
        © 2025 | ZeroBin | Admin Login
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
