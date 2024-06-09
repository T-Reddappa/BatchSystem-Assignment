import React from "react";
import "./header.css";

const HeaderComponent = () => {
  return (
    <header className="header-component">
      <div className="logo-and-links">
        <img className="logo" src="/assets/logo.png" alt="logo" />
        <div className="home">Home</div>
        <div className="about">About Us</div>
        <div className="pricing">Pricing</div>
        <div className="features">Features</div>
      </div>
      <div className="button">
        <button className="download-btn">Download</button>
      </div>
    </header>
  );
};

export default HeaderComponent;
