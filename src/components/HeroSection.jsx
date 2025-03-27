import React from "react";
import "../styles/hero.css";
import Reservation from "./Reservation";
import { BrowserRouter } from "react-router-dom";

function HeroSection({ image, content, header }) {
  return (
    <div className=" hero-box">
      <div className="bg-box">
        <img src={image} alt="image background" />
      </div>
      <div className="hero-content">
        <h1>{header}</h1>
        <p>{content}</p>
      </div>
      
        
      
    </div>
  );
}

export default HeroSection;
