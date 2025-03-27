import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import payment from "../assets/img/payments-eg.png";
import React from "react";
import apple from "../assets/img/apple.png";
import play from "../assets/img/play.png";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <FirstRow />
          <ScondRow />
          <Thirdrow />
        </div>
      </div>
    </div>
  );
}
function FirstRow() {
  return (
    <div className="col-md-12 ">
      <div className="FirstRow row gy-5">
        <div className="col-md-4 col-lg-4 col-12">
          <p>
            <span>
              <EnvelopeSimple size={20} weight="fill" />
            </span>
            <span>Subscribe to our new offers</span>
          </p>
        </div>
        <div className="col-md-4 col-lg-4 col-12">
          <a className="browswLink" href="#">
            Browse Hotels By Country
          </a>
        </div>
        <div className="col-md-4 col-lg-4 col-12">
          <div className="media">
            <span>
              <a href="#">
                <span>
                  <FacebookLogo size={25} weight="fill" />
                </span>
              </a>
            </span>
            <span>
              <a href="#">
                <InstagramLogo size={25} weight="fill" />
              </a>
            </span>
            <span>
              <a href="#">
                <TwitterLogo size={25} weight="fill" />
              </a>
            </span>
            <span>
              <a href="#">
                <YoutubeLogo size={25} weight="fill" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScondRow() {
  return (
    <div className="col-md-12 ">
      <div className="SecondRow">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-12">
            <div className="linksBox">
              <a href="#">Pay in Installments</a>
              <a href="#"> Flyin Wallet</a>
              <a href="#">Contact Us</a>
              <a href="#">addyourProperty</a>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-12">
            <div className="downloadBox">
              <h5>Flight & Hotels in one place</h5>
              <span>Flight & Hotels in one place</span>
              <div className="imgLinkBox">
                <a href="#">
                  <img src={play} alt="play-store" />
                </a>
                <a href="#">
                  <img src={apple} alt="apple-store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

function Thirdrow() {
  return (
    <div className="col-md-12 ">
      <div className="ThirdRow">
        <div>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">FAQs</a>
          <a href="#">Support</a>
        </div>

        <a className="paymentimage">
          <img src={payment} alt="payment" />
        </a>
        <p>&copy;baramja tech</p>
      </div>
    </div>
  );
}
export default Footer;
