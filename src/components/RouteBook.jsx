import { Airplane, Gauge, Headset, Money } from "phosphor-react";
import tripImage from "../assets/flightImage/dealsimage.jpg";
import "../styles/routeBook.css";
import React from "react";
function RouteBook() {
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-3 col-lg-3 col-12">
          <ul className="services">
            <Services
              Logo={Headset}
              serviceTittle="24/7 Customer Support"
              TextContent="Support and special services around the clock"
            />
            <Services
              Logo={Gauge}
              serviceTittle="Easy & Fast Booking"
              TextContent="Search, compare & book"
            />
            <Services
              Logo={Money}
              serviceTittle="Secure Payment"
              TextContent="Secure & multiple payment options"
            />
          </ul>
        </div>
        <div className="col-md-6 col-lg-6 col-12">
          <h3 className="my-2">Frequent Routes Booked on Flyin.com</h3>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-12">
              <ul className="flights">
                {Array.from({length:9}).map((_,i)=>{
                    return <RouteFlight key={i} from={"cairo"} to={"Istanbul"} />
                })}
              </ul>
            </div>

            <div className="col-md-6 col-lg-6 col-12">
              <ul className="flights">
              {Array.from({length:9}).map((_,i)=>{
                    return <RouteFlight key={i} from={"cairo"} to={"Istanbul"} />
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-12">
          <TripDeals
            tripImage={tripImage}
            tripName={"Dubai"}
            tipContent={
              "Emirates, Etihad, Saudi Airlines, Flydubai, Flynas and more airlines"
            }
          />
        </div>
      </div>
    </div>
  );
}

function Services({ Logo, serviceTittle, TextContent }) {
  return (
    <li className="service">
      <span>
        <Logo size={30} />
      </span>
      <div className="textContent">
        <h4>{serviceTittle}</h4>
        <p>{TextContent}</p>
      </div>
    </li>
  );
}

function RouteFlight({ from, to }) {
  return (
    <li>
      <a>
        <span>
          <Airplane size={20} />
        </span>
        <p>
          {from} to {to}
        </p>
      </a>
    </li>
  );
}

function TripDeals({ tripImage, tripName, tipContent }) {
  return (
    <div className="trip">
      <img src={tripImage} alt="" />
      <div className="texcontent">
        <p>Cheap flights to</p>
        <h4>{tripName}</h4>
        <p>{tipContent}</p>
        <button>view Deals</button>
      </div>
    </div>
  );
}

export default RouteBook;
