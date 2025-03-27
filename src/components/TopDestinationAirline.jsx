import React from "react";
import "../styles/TopDestinationAirline.css";

function TopDestinationAirline() {
  return (
    <div className="TopDestinationAirlineBox">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-12">
            <h2>TopDestinations</h2>
            <hr />
            <ul className="TopDestinations">
              <div className="row">
                {Array.from({ length: 20 }).map((_,i) => {
                  return <TopDestinations key={i} />;
                })}
              </div>
            </ul>
          </div>
          <div className="col-md-8 col-lg-8 col-12">
            <h2>Top Airline</h2>
            <hr />
            <ul className="TopAirline">
              <div className="row">
                {Array.from({ length: 30 }).map((_,i) => {
                  return <TopAirline key={i} />;
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
function TopDestinations() {
  return (
    <div className="col-md-6 col-lg-6 col-6">
      <li>
        <a href="#"> Oman</a>
      </li>
    </div>
  );
}
function TopAirline() {
  return (
    <div className="col-md-4 col-lg-4 col-12">
      <li>
        <a href="#">Saudi Arabian Airlines</a>
      </li>
    </div>
  );
}
export default TopDestinationAirline;
