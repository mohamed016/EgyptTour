import React from "react";
import bgHeader from "../assets/HotelImage/hpb.jpg";
import HeroSection from "../components/HeroSection";
import SalesShow from "../components/SalesShow";
import HotelAds from "../components/HotelAds";
import FeaturedHotel from "../components/FeaturedHotel";
import AdsBg from "../components/AdsBg";
import TopDestinationAirline from "../components/TopDestinationAirline";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";

// Import Swiper styles


function HotelLanding() {
  return (
    <>
      <HeroSection
        image={bgHeader}
        header={"600,000+ hotels, apartments, villas and more..."}
        content={"Find the best hotel deals"}
      />
      <Reservation />
      <SalesShow />
      <HotelAds />
      <FeaturedHotel tittle={"Featured Hotels"}/>
      <FeaturedHotel tittle={"Popular Hotels"}/>
      <AdsBg/>
      <TopDestinationAirline/>
      <Footer/>
    </>
  );
}

export default HotelLanding;
