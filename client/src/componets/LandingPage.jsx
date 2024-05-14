import React from "react";
import "../Landingpage.css";
import DhakaTopi from "../assets/dhakatopi.png";

const LandingPage = () => {
  return (
    <div className="hero ">
      <div className="hero-left">
        <h1>Search and <span>Find</span>
        <br />
        <span>Yourself </span>
        in NewStyle
        </h1>
      </div>
      <div className="hero-right">
        <img
          src={DhakaTopi}
          alt="Dhaka Topi"
        />
      </div>
    </div>
  );
};

export default LandingPage;
