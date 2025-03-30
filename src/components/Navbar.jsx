import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <div className="left-section">
        <img src={logo} alt="Trademarkia Logo" className="logo" />
      </div>

      {/* Center: Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search trademarks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <span className="clear-btn" onClick={() => setSearchTerm("")}>
            ✖
          </span>
        )}
        <button className="search-btn">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
