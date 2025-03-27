import React from "react";
import HeroSection from "../components/HeroSection";
import bgHeader from "../assets/flightImage/bg_hero_flight.jpg";
import { BrowserRouter } from "react-router-dom";
import Reservation from "../components/Reservation";
import SalesShow from "../components/SalesShow";
import RouteBook from "../components/RouteBook";
import TopDestination from "../components/TopDestination";
import TopAirPlane from "../components/TopAirPlane";
import TopCitiesAndRoutes from "../components/TopCitiesAndRoutes";
import TopDestinationAirline from "../components/TopDestinationAirline";
import Footer from "../components/Footer";

function FlightLanding() {
  return (
    <>
      <HeroSection
        image={bgHeader}
        header={"Find the best airline tickets deals"}
        content={"Book cheap Flight and Lowest Airfares"}
      />
      <Reservation />
      <SalesShow />
      <TopAirPlane/>
      <TopDestination/>
      <RouteBook/>
      <TopCitiesAndRoutes/>
      <TopDestinationAirline/>
      <Footer/>
    </>
  );
}

export default FlightLanding;
