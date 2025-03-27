import React from "react";
import fhimage from "../assets/flightImage/fhpb.jpg";
import HeroSection from "../components/HeroSection";
import SalesShow from "../components/SalesShow";
import AdsFlightHotel from "../components/AdsFlightHotel";
import TrendingDestination from "../components/TrendingDestination";
import ComboPackage from "../components/ComboPackage";
import TopDestinationAirline from "../components/TopDestinationAirline";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";
function FlightHotel() {
  return (
    <>
      <HeroSection
        image={fhimage}
        header={"Find the best deals"}
        content={"More than 50,000 deals"}
      />
      <Reservation />
      <SalesShow/>
      <AdsFlightHotel/>
      <TrendingDestination/>
      <ComboPackage/>
      <TopDestinationAirline/>
      <Footer/>
    </>
  );
}

export default FlightHotel;
