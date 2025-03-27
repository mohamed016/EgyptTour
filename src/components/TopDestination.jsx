import React from "react";
import imgaeTopDestination from "../assets/flightImage/riyadh.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../styles/topdestination.css";

function TopDestination() {
  return (
    <div className="container my-2">
      <div className="topdestination">
        <h2>Top Destinations</h2>

        <div className="sliderBox my-5">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            loop={true}
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <SwiperSliderWraber />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSliderWraber />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSliderWraber />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSliderWraber />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSliderWraber />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSliderWraber />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
function SwiperSliderWraber() {
  return (
    <>
      <div className="wiperSliderWraber position-relative">
        <div className="overlay">d</div>
        <div className="imagebox">
          <img src={imgaeTopDestination} alt="" />
        </div>
        <div className="stick">
          <h5>Flights To Madinah</h5>
          <span>Saoudi Arabia</span>
        </div>
        <div className="textContent">
          <h5>Flights To Madinah</h5>
          <span>Saoudi Arabia</span>
          <button>Book Now</button>
        </div>
      </div>
    </>
  );
}
export default TopDestination;
