import React from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Swiber({ component: SwiperSliderWrapper, num = 6 }) {
  return (
    <div className="swibBox my-5">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        slidesPerView={num}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 5 },
        }}
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              {React.createElement(SwiperSliderWrapper)}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Swiber;
