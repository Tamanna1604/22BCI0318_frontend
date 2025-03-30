import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"; // Import Sidebar from the new folder
import "./Home.css";

// Import images from assets
import markImg from "../assets/mark.png";
import detailsImg from "../assets/details.png";
import statusImg from "../assets/status.png";
import classImg from "../assets/class.png";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("Nike"); // Default search as Nike
  const isNikeSearch = searchTerm.toLowerCase() === "nike";

  return (
    <div className="home-container">
      {/* Include Navbar */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Trademarks Found Info */}
      <p className="results-text">
        {isNikeSearch
          ? `About 159 trademarks found for "Nike"`
          : searchTerm
          ? `No results found for "${searchTerm}"`
          : ""}
      </p>

      <div className="content">
        {/* Show table only if search term is Nike */}
        {isNikeSearch ? (
          <div className="left-content">
            {/* Table Headers */}
            <div className="table-header">
              <span className="column">Mark</span>
              <span className="column">Details</span>
              <span className="column">Status</span>
              <span className="column">Class/Description</span>
            </div>

            {/* Display Images Under Each Column */}
            {[...Array(10)].map((_, index) => (
              <div className="table-images" key={index} style={{ marginBottom: "10px" }}>
                <div className="image-container shadow" style={{ justifyContent: "left" }}>
                  <img src={markImg} alt="Mark" className="image-space" />
                </div>
                <div className="image-container" style={{ justifyContent: "left" }}>
                  <img src={detailsImg} alt="Details" className="image-space2" />
                </div>
                <div className="image-container" style={{ justifyContent: "left" }}>
                  <img src={statusImg} alt="Status" className="image-space2" />
                </div>
                <div className="image-container" style={{ justifyContent: "left" }}>
                  <img src={classImg} alt="Class" className="image-space" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">No results found</p>
        )}

        {/* Sidebar (25% width) */}
        <div className="right-content">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
