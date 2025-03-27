import React from "react";
import "../styles/hotelAds.css";
import island from "../assets/HotelImage/yas-en-logo.png";
import oman from "../assets/HotelImage/oman-hotel.jpg";
import hotelimage from "../assets/HotelImage/hotelImage.png";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Bed } from "phosphor-react";

function HotelAds() {
  return (
    <div className="container">
      <div className="row">
        <FirstAdsSection />
        <SecondAdsSection />
        <ThirdAdsSection/>
      </div>
    </div>
  );
}

function FirstAdsSection() {
  return (
    <>
      <div className="col-md-3 col-lg-3 col-12">
        <div className="row gy-1">
          <div className="col-12">
            <div className="firstadspartone">
              <img src={island} alt="island" />
              <a href="#">view Deatails</a>
            </div>
          </div>
          <div className="col-12">
            <div className="secondadspartone">
              <img src={oman} alt="island" />
              <div className="content">
                <h5>Best Hotel In Oman</h5>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function SecondAdsSection() {
  const slides = [...Array(6)];
  return (
    <div className="col-md-5 col-lg-5 col-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        navigation
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {slides.map((_, index) => (
          <SwiperSlide key={index}>
            <SliderSecondSection index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function SliderSecondSection({ index }) {
  return (
    <div className="secondtadspartone">
      <img src={hotelimage} alt={`hotel-${index}`} />
      <div className="overLay"></div>
      <div className="content">
        <h5>InterContinental Mauritius Resort Balaclava Fort #{index + 1}</h5>
        <strong>Mauritius</strong>
        <p>
          New Hotel Perfect for Business and Leisure. Our hotel offers easy
          access to Dubai's main tourist attraction area and business district.
          Explore the alleyways of the Gold and Textile Souk or the Heritage
          village to learn about Dubai's arts, customs and architecture
        </p>
        <a href="#">Book Now</a>
      </div>
    </div>
  );
}

function ThirdAdsSection() {
  return (
    <>
      <div className="col-md-3 col-lg-3 col-12">
        <div className="listTopHotelBox h-100">
          <h2>Top Hotels</h2>
          <hr />
          <ul className="listTopHotel">
            <TopHotel />
            <TopHotel />
            <TopHotel />
            <TopHotel />
            <TopHotel />
            <TopHotel />        
          </ul>
        </div>
      </div>
    </>
  );
}

function TopHotel() {
  return (
    <li>
      <span>
        <Bed size={30} />
      </span>
      <span>ixos Sharm El Sheikh</span>
    </li>
  );
}

export default HotelAds;
