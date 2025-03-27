import React from "react";
import "../styles/TopCitiesAndRoutes.css";
import imgFamaily from "../assets/flightImage/family-tip.jpg";
import topCities from "../assets/flightImage/top-route-london.jpg";
import { Airplane, Swap } from "phosphor-react";

function TopCitiesAndRoutes() {
  return (
    <div className="container">
      <div className="row">
        <DestinationFamaily />
        <div className="col-md-6 col-lg-6 col-12">
          <div>
            <h2>Top Cities and Routes</h2>
            <hr />
            <Cities />
          </div>
        </div>
      </div>
    </div>
  );
}

function Cities() {
  return (
    <>
      <ul className="citiesList">
        <CitiesList />
        <CitiesList />
      </ul>
    </>
  );
}

function CitiesList() {
  return (
    <>
      <li>
        <div className="row">
          <div className="col-md-3 col-lg-3 col-4">
            <div>
              <img src={topCities} alt="" />
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-6">
            <div>
              <h4>Round trips to Dubai</h4>
              <ul className="listTrips">
                <TripsOfList />
                <TripsOfList />
                <TripsOfList />
                <TripsOfList />
              </ul>
            </div>
          </div>
        </div>
        <ul></ul>
      </li>
    </>
  );
}
function TripsOfList() {
  return (
    <li className=" my-1">
      <span>Riyadh</span>
      <span>
        <Swap size={20} />
      </span>
      <span>Riyadh</span>
      <button>Book</button>
    </li>
  );
}
function DestinationFamaily() {
  return (
    <div className="col-12 col-md-6 col-lg-6">
      <div>
        <div className="imageBox position-relative">
          <img src={imgFamaily} alt="img-family" />
          <div className="yelbg">
            <span className="d-block">Fabulous</span>
            <p>
              <strong>Family</strong> Trips
            </p>
          </div>
          <div className="blubg">
            <h5>Fly Together</h5>
            <p>
              Book cheap flight tickets for your family & Enjoy special fares
            </p>
            <button>Book Now</button>
          </div>
        </div>
        <div>
          <h5>Top Family Destinations</h5>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <ul className="destinationFamailyList">
                <TopDestinationFamailyList familyDestination="Dubai - United Arab Emirates" />
                <TopDestinationFamailyList familyDestination="Dubai - United Arab Emirates" />
                <TopDestinationFamailyList familyDestination="Dubai - United Arab Emirates" />
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <ul className="destinationFamailyList">
                <TopDestinationFamailyList familyDestination="Dubai - United Arab Emirates" />
                <TopDestinationFamailyList familyDestination="Dubai - United Arab Emirates" />
                <TopDestinationFamailyList familyDestination="Dubai - United Arab Emirates" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopDestinationFamailyList({ familyDestination }) {
  return (
    <>
      <li>
        <a href="#">
          <Airplane size={20} />
          <span>{familyDestination}</span>
        </a>
      </li>
    </>
  );
}

export default TopCitiesAndRoutes;
