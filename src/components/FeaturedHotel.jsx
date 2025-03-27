import React from "react";
import "../styles/featuredHotel.css";
import hotelImg from "../assets/HotelImage/hotelImage.png";
import { Star } from "phosphor-react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FeaturedHotel({tittle}) {
  return (
    <div className="container my-5">
      <div className="featuredHotel">
        <h2>{tittle}</h2>

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
    <div className="position-relative hotelBox">
      <img src={hotelImg} alt="" />
      <div className="stick">
        <h5>Movenpick Beirut</h5>
        <span>
          <Star size={20} weight="fill" />
          <Star size={20} weight="fill" />
          <Star size={20} weight="fill" />
          <Star size={20} weight="fill" />
        </span>
        <p> Beirut, Lebanon</p>
      </div>
      <div className="overlay">
        <h5>Movenpick Beirut</h5>
        <span>
          <Star size={20} weight="fill" />
          <Star size={20} weight="fill" />
          <Star size={20} weight="fill" />
          <Star size={20} weight="fill" />
        </span>
        <p> Beirut, Lebanon</p>
      </div>
    </div>
  );
}

export default FeaturedHotel;
