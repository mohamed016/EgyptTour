import React from "react";
import ladies from "../assets/HotelImage/test.jpg";
import fam from "../assets/HotelImage/hotels-ad-img06.jpg";
import "../styles/adbg.css";
import { Envelope } from "phosphor-react";

function AdsBg() {
  return (
    <div className="container">
      <div className="row">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </div>
  );
}

function FirstSection() {
  return (
    <div className="col-md-4 col-lg-4 col-12">
      <div className="firstSection">
        <span>Live like a king</span>
        <h3>Explore the luxurious hotels</h3>
        <span>Around the world</span>
        <a href="#">Explore</a>
      </div>
    </div>
  );
}
function SecondSection() {
  return (
    <div className="col-md-4 col-lg-4 col-12">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <div className="ladies">
            <img src={ladies} alt="ladies" />
            <div className="overlay">
              <p>
                A collection of <br />
                Ladies only Hotels
                <br /> around the World
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="text-center offerLadies">
            <h3>Get 10% Off</h3>
            <span>Enter your email and get special offers</span>
            <form className="my-5" action="">
              <div className="inputcontainer">
                <input
                  placeholder="please Enter Your Email"
                  className="form-control"
                  type="text"
                  id="email"
                />
                <span for="email ">
                  <Envelope size={20} weight="fill" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThirdSection() {
  return (
    <div className="col-md-4 col-lg-4 col-12">
      <div className="thirdsection">
        <img src={fam} alt="family" />
        <div className="box">
          <div className="textContent">
            <span>Here's the world's best</span>
            <strong>Fun Filled Hotels</strong>
            <span>Surprise Your Kids..!</span>
          </div>
          <a href="">view Hotel</a>
        </div>
      </div>
    </div>
  );
}

export default AdsBg;
