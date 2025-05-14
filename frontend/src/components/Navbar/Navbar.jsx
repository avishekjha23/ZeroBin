import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/trash-bin.png"; // Adjust the path as necessary
import "./navbar.css";

const Navbar = () => {
  const {
    isUserAuthenticated,
    isAdminAuthenticated,
    logout,
  } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const isAuthenticated = isUserAuthenticated || isAdminAuthenticated;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
        <span className="logo-text">ZeroBin</span>
        <img src={logo} alt="ZeroBin Logo" className="logo-img" />
        </Link>
        </div>
        
      <ul className="nav-links">
        <li>
          <Link to="/"><i className="fa fa-home"></i> Home</Link>
        </li>
        <li>
          <HashLink smooth to="/#about-us">
          <i className="fa fa-info-circle"></i> About us
          </HashLink>
          </li>
        <li>
          <Link to={isAuthenticated ? "/complain" : "/login"}>
            <i className="fa fa-exclamation-circle"></i> Complain
          </Link>
        </li>
        <li>
          <Link to={
            isAuthenticated
              ? (isAdminAuthenticated ? "/allcomplain" : "/previewcomplain")
              : "/login"
          }>
            <i className="fa fa-eye"></i>
            {isAdminAuthenticated ? " All Complain" : " Preview Complain"}
          </Link>
        </li>
        <li>
          <HashLink smooth to="/#faq">
          <i className="fa fa-question-circle"></i>FAQ</HashLink>
          </li>
        <li>
          <button
            className={`log-btn ${isAuthenticated ? 'logout' : 'login'}`}
            onClick={isAuthenticated ? handleLogout : handleLogin}
          >
            <i className={`fa ${isAuthenticated ? 'fa-sign-out-alt' : 'fa-sign-in-alt'}`}></i>
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
