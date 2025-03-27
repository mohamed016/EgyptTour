import React from "react";
import'../styles/TopAirPlane.css'
import imgaeTopAirPlane from '../assets/flightImage/SV.png';


// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TopAirPlane() {
  return (
    <div className="container my-2">
      <div className="topdestination">
        <h2 className="tittle">Top Destinations</h2>

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
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <SwiperSliderWrapper />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

function SwiperSliderWrapper() {
  return (
    <div className="swiperSliderWrapper position-relative">
      <div className="imagebox">
        <img src={imgaeTopAirPlane} alt="Top Destination" />
      </div>
    </div>
  );
}

export default TopAirPlane;
