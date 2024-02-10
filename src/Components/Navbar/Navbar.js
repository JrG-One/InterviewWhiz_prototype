import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="Left" onClick={handleLogoClick}>
        <h3 className="logo">InterviewWhiz</h3>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/interview-portal">Portal</Link>
        <span>Assesments</span>
        <span>Resources</span>
        <span>Login</span>
        <span>Register</span>
      </div>
    </nav>
  );
};

export default Navbar;
