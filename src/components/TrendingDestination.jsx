import React from "react";
import bg from "../assets/flightImage/riyadh.jpg";
import "../styles/TrendDestination.css";
import Tittle from "./Tittle";
import Swiber from "./Swiber";

function TrendingDestination() {
  return (
    <div className="conteiner my-5">
      {/* <Tittle tittle={"Top destination"} /> */}
      <Swiber component={SwiperSliderWrapper} num={6} />
   
    </div>
  );
}

function SwiperSliderWrapper() {
  return (
    <div className="destinationCard">
      <img src={bg} alt="" />
      <div className="stick">
        <h2>Dubai</h2>
        <span>United Arab Emirates</span>
      </div>
      <div className="overlay">
        <h2>Dubai</h2>
        <span>United Arab Emirates</span>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default TrendingDestination;
