import React from "react";
import "../styles/AdsFlightHotel.css";
import madrid from "../assets/HotelImage/madrid.jpg";
import shortBbreak from "../assets/HotelImage/short-breaks-2.jpg";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function AdsFlightHotel() {
  return (
    <div className="container">
      <div className="row">
        <FirstSection />
        <SecondSection />
        <ThirdSection/>
      </div>
    </div>
  );
}

function FirstSection() {
  return (
    <div className="col-md-4 col-lg-3 col-12">
      <div className="firstsection">
        <h3>Short Breaks</h3>
        <hr />
        <ul className="ListFirstSection">
          {Array.from({ length: 3 }).map((_, i) => (
            <ListFirstSection key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
function ListFirstSection() {
  return (
    <li>
      <div className="imgBox">
        <img src={shortBbreak} alt="" />
      </div>
      <div className="content">
        <h5>Mile of Art</h5>
        <span>Malaga, Spain - Flight + Hotel deal</span>
        <button>Book Now</button>
      </div>
    </li>
  );
}

function SecondSection() {
  return (
    <div className="col-md-4 col-lg-5 col-12">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
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
  );
}
function SwiperSliderWrapper() {
  return (
    <div className="SecondSection h-100">
      <img className="h-100" src={madrid} alt="" />
      <div className="overlay"></div>
      <div className="ylbg">
        <span>madrid</span>
        <strong>Spain</strong>
      </div>
      <div className="blubg">
        <h5>Hightlight</h5>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button>Book Now</button>
      </div>
    </div>
  );
}

function ThirdSection() {
  return(
    <div className="col-md-4 col-lg-3 col-12">
      <div className="firstsection">
        <h3>Best Packages</h3>
        <hr />
        <ul className="ListFirstSection">
          {Array.from({ length: 3 }).map((_, i) => (
            <ListThirdSection key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ListThirdSection() {
  return (
    <li>
      <div className="imgBox">
        <img src={shortBbreak} alt="" />
      </div>
      <div className="content">
        <h5>Honeymoon packages</h5>
        <span>Male, Maldives</span>
        <button>Book Now</button>
      </div>
    </li>
  );
}

export default AdsFlightHotel;
