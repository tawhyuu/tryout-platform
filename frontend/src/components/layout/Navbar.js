import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Quiz Platform
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tryouts" className="nav-links">
              Tryouts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
        </ul>
        <div className="nav-auth">
          <Link to="/login" className="nav-auth-link">
            Login
          </Link>
          <Link to="/register" className="nav-auth-link nav-btn">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
