import React from "react";
import { Home } from "lucide-react"; // Or replace with inline SVG or emoji
import "./Master.css"; // Ensure this CSS file contains the styles from earlier
import { useNavigate } from "react-router-dom";

export default function Master() {
  // Mock username for demo
  const username = "John Doe";

  const navigate = useNavigate();

  const handleLogout = () => {
   localStorage.removeItem('loggedIn');
   localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  const handlehome = () => {navigate('/dashboard')};

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-main">M</span>
        <span className="logo-sub">CAN</span>
        <span className="logo-text">Financial</span>
      </div>

      {/* Right menu */}
      <div className="nav-icons">
        <button className="icon-button" title="Home" onClick={handlehome}>
          <Home size={16} className="home-icon" />
        </button>
        <span className="username">{username}</span>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
