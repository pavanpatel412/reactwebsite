import React from "react";
import './mystylesheet.css';

function Footer() {
  return (
    <section className="footer" id="contact-us">
      <div className="container text-center">
        <h1 className="title-all"></h1>
        <div className="row">
          <div className="col-md-4">
            <h2>Contact Us</h2>
            <form action="">
              <input type="name" placeholder="Enter Your Name" required />
              <textarea type="message" cols="40"></textarea>
              <button>Send</button>
            </form>
          </div>
          <div className="col-md-4">
            <h2>Monthly Refills</h2>
            <form action="">
              <select className="text-center form-select" aria-label="Default select example">
                <option selected>Select Number(s) to be refilled</option>
                <option value="10">Ten</option>
                <option value="20">Twenty</option>
                <option value="30">Thirty</option>
              </select>
              <br/><br/><br/>
              <input type="email" placeholder="Enter Your Email" required />
              <button>Opt In</button>
            </form>
          </div>
          <div className="col-md-4 Least"  >
            <h2>Newsletter Subscription</h2>
            <form action="">
              <input type="email" placeholder="Enter Your Email" required />
              <button className="btn1">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="small1">
          <small>
            &copy; Copyright 2021. All Rights Reserved. Designed with <i className="fas fa-heart" style={{ color: "red" }}></i> By Phin.
          </small>
        </div>
      </div>
    </section>
  );
}

export default Footer;
