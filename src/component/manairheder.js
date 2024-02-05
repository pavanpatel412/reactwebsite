import React from 'react';
import './mystylesheet.css';
import image4drink from "./photos/m/image4drink.png";
import water from "./photos/m/water.png";


const Header = () => {

  return (
    <div>
    <section className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <small className="richoco-text">MANAIR</small>
            <img src={water} alt="MANAIR Water Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{ textAlign: 'right' }}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active-home" href="#home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">
                  REVIEWS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="row banner" id="home">
        <div className="col-md-6">
          <h1>Drink Pure <br />Water</h1>
          <p>
            Explore the Variety of water we have Globally. <br />
            Drink to <b>Q</b>uench your Taste
          </p>
          <a href="#" className="join-free-btn">
            JOIN FREE
          </a>
          <a href="#about-us" className="know-more-btn">
            KNOW MORE
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img src={image4drink} className="img-fluid2" alt=""></img>
        </div>
      </div>
      <div className="text-center">
        <a href="#services" id="service">
          <i className="fas fa-arrow-circle-down"></i>
        </a>
      </div>
    </section>
    </div>
  );
};

export default Header;
