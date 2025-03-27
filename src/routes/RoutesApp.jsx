import React from "react";
import { Route, Routes } from "react-router-dom";
import FlightLanding from "../layouts/FlightLanding";
import HotelLanding from "../layouts/HotelLanding";
import FlightHotel from "../layouts/FlightHotel";
import {
  FlightHotelSearch,
  FlightSearch,
  HotelSearch,
} from "../components/Reservation";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<FlightLanding />}>
        <Route index element={<FlightSearch />} />
        <Route path="hotel-search" element={<HotelSearch />} />
        <Route path="flight-hotel-search" element={<FlightHotelSearch />} />
      </Route>

      <Route path="/flight" element={<FlightLanding />}>
        <Route index element={<FlightSearch />} />
        <Route path="hotel-search" element={<HotelSearch />} />
        <Route path="flight-hotel-search" element={<FlightHotelSearch />} />
      </Route>

      <Route path="/hotel" element={<HotelLanding />}>
        <Route index element={<FlightSearch />} />
        <Route path="hotel-search" element={<HotelSearch />} />
        <Route path="flight-hotel-search" element={<FlightHotelSearch />} />
      </Route>

      <Route path="/Flight-Hotel" element={<FlightHotel />}>
        <Route index element={<FlightSearch />} />
        <Route path="hotel-search" element={<HotelSearch />} />
        <Route path="flight-hotel-search" element={<FlightHotelSearch />} />
      </Route>
    </Routes>
  );
}

export default RoutesApp;
