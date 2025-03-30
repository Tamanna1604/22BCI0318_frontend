import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedNav, setSelectedNav] = useState("Owners");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDisplay, setSelectedDisplay] = useState("Grid View");


  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="sidebar-container">
      {/* Filter and Share Button Container */}
      <div className="top-buttons">
        <div className="filter-container">
          <button className="filter-btn" onClick={() => setShowDropdown(!showDropdown)}>
            Filter ▼
          </button>
          {showDropdown && (
            <ul className="dropdown">
              <li>Trademarks</li>
              <li>Owners</li>
              <li>Logos</li>
              <li>Internet Brand Search</li>
              <li>Copyrights</li>
            </ul>
          )}
        </div>
        
        {/* Space between buttons */}
        <div className="button-group" style={{ display: "flex", gap: "10px" }}>
          <button className="share-btn">🔗</button>
          <button className="share-btn">⚙️</button>
        </div>
      </div>
      <div className="side">

      {/* Status Buttons Section */}
      <div className="status-box" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", padding: "10px", borderRadius: "8px" }}>
        <div className="status-heading" style={{ textAlign: "right", fontWeight: "bold" }}>Status</div>
        <div className="status-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <button className="status-btn" style={{ width: "auto", minWidth: "fit-content", padding: "5px" }}>All</button>
          <button className="status-btn" style={{ width: "auto", minWidth: "fit-content", padding: "5px" }}>🟢Registered</button>
          <button className="status-btn" style={{ width: "auto", minWidth: "fit-content", padding: "5px" }}>🟠Pending</button>
          <button className="status-btn" style={{ width: "auto", minWidth: "fit-content", padding: "5px" }}>🔴Abandoned</button>
          <button className="status-btn" style={{ width: "auto", minWidth: "fit-content", padding: "5px" }}>🔵Others</button>
        </div>
      </div>
    {/* Navigation and Search Box */}
    <div className="nav-box" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", padding: "10px", borderRadius: "8px", width: "90%", textAlign: "left", alignSelf: "center", marginTop: "10px" }}>
        <div className="nav-links" style={{ display: "flex", gap: "20px" }}>
          {["Owners", "Law Firms", "Attorneys"].map((item) => (
            <button 
              key={item} 
              className={`nav-btn ${selectedNav === item ? 'selected' : ''}`} 
              onClick={() => setSelectedNav(item)}
              style={{ border: "none", background: "none", fontWeight: selectedNav === item ? "bold" : "normal", color: selectedNav === item ? "black" : "black", borderBottom: selectedNav === item ? "2px solid black" : "none", cursor: "pointer" }}>
              {item}
            </button>
          ))}
        </div>
        <input 
          type="text" 
          className="search-bar" 
          placeholder={`Search ${selectedNav}`} 
          style={{ width: "100%", padding: "5px", marginTop: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <div className="options-container" style={{ maxHeight: "100px", overflowY: "scroll", marginTop: "10px", padding: "5px", display: "flex", flexDirection: "column", scrollbarWidth: "thin", scrollbarColor: "gray transparent" }}>
          {[...Array(10).keys()].map((num) => (
            <label key={num} className="option-label" style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px", fontSize: "14px" }}>
              <input 
                type="checkbox" 
                checked={selectedOptions.includes(`Option ${num + 1}`)} 
                onChange={() => toggleOption(`Option ${num + 1}`)}
                style={{ cursor: "pointer" }}
              />
              <span style={{ color: selectedOptions.includes(`Option ${num + 1}`) ? "blue" : "black" }}>
                Option {num + 1}
              </span>
            </label>
          ))}
        </div>
      </div>
  {/* New Display Box */}
  <div className="display-box" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", padding: "10px", borderRadius: "8px", width: "90%", textAlign: "left", alignSelf: "center", marginTop: "10px" }}>
        <div className="display-heading" style={{ fontWeight: "bold" }}>Display</div>
        <div className="greybox">
  {["Grid View", "List View"].map((view) => (
    <button 
      key={view} 
      className={`display-btn ${selectedDisplay === view ? "selected" : ""}`}
      onClick={() => setSelectedDisplay(view)}
    >
      {view}
    </button>
  ))}
</div>
</div>

      </div>
    </div>
  );
};

export default Sidebar;
