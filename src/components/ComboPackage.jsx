import React from "react";
import bg from "../assets/HotelImage/ramada-downtown-dubai.jpg";
import { Airplane } from "phosphor-react";
import Tittle from "./Tittle";
import Swiber from "./Swiber";
import "../styles/comboPackage.css";
function ComboPackage() {
  return (
    <div className="my-5 container">
      <Tittle tittle={"Combo Packages"} />
      <Swiber component={SwiperSliderWrapper} num={4} />
    </div>
  );
}

function SwiperSliderWrapper() {
  return (
    <div className="comboCard">
      <img src={bg} alt="" />
      <div className="stick">
        <h2>
          <span>
            <Airplane size={20} weight="fill" />
          </span>
          <span>Dubai</span>
        </h2>
        <span>United Arab Emirates</span>
      </div>
      <div className="overlay">
        <h2>
          <span>
            <Airplane size={20} weight="fill" />
          </span>
          <span>Dubai</span>
        </h2>
        <span>United Arab Emirates</span>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default ComboPackage;
