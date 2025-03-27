import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo (1).webp";
import user from "../assets/user.png";
import {
  CaretDown,
  Gauge,
  Handshake,
  WhatsappLogo,
  UserCircle,
  User,
  Article,
  Wallet,
  Tag,
  Heart,
  Notebook,
  ChatCenteredDots,
} from "phosphor-react";
import { Link } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("Flight");
  const [activeDropDown, setActiveDropDown] = useState(false);

  const handleSetActive = (linkName) => setActiveLink(linkName);

  const navLinks = ["Flight", "Hotel", "Flight+Hotel"];
  const dropdownItems = [
    { to: "/dashboard", icon: Gauge, title: "Dashboard" },
    { to: "/profile", icon: User, title: "My profile" },
    { to: "/my-booking", icon: Article, title: "My Booking" },
    { to: "/wallet", icon: Wallet, title: "My Wallet" },
    { to: "/coupons", icon: Tag, title: "Coupons" },
    { to: "/favourite-hotels", icon: Heart, title: "Favourite Hotels" },
    { to: "/reviews", icon: Notebook, title: "Reviews" },
    { to: "/all-bookings", icon: ChatCenteredDots, title: "All Bookings" },
    { to: "/logout", icon: UserCircle, title: "Logout", isDivider: true },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand logoBox" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  to={`/${item.replace("+", "-").toLowerCase()}`}
                  className={`nav-link ${activeLink === item ? "active" : ""}`}
                  onClick={() => handleSetActive(item)}
                  onFocus={() => handleSetActive(item)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="second-part">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  onClick={() => setActiveDropDown(!activeDropDown)}
                  className="nav-link dropdown-toggle userOption"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="userImage">
                    <img src={user} alt="user-image" />
                  </div>
                  <div className="mx-2">Mohamed Ali</div>
                  <div>
                    <CaretDown size={20} />
                  </div>
                </a>

                {activeDropDown && (
                  <ul className="">
                    {dropdownItems.map(
                      ({ to, icon, title, isDivider }, index) => (
                        <div className="test" key={index}>
                          <Link to={to} className="dropdown-item">
                            <SettingUser Icon={icon} title={title} />
                          </Link>
                        </div>
                      )
                    )}
                  </ul>
                )}
              </li>
            </ul>
            <div className="deals mx-3"></div>
            <Link to="/deals" className="d-flex align-items-center deals">
              <span>
                <Handshake size={20} weight="light" />
              </span>
              <span>deals</span>
            </Link>
          </div>
          <div className="contact"></div>
          <a href="tel:01012345698" className="d-flex align-items-center contact">
            <span>
              <WhatsappLogo size={20} weight="light" />
            </span>
            <span>01012345698</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function SettingUser({ Icon, title }) {
  return (
    <div className="dropdown-item d-flex justify-content-between">
      <span>
        <Icon size={25} weight="light" />
      </span>
      <span>{title}</span>
    </div>
  );
}

export default NavBar;
