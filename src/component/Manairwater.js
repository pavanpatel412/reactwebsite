import React, { Component }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './mystylesheet.css';
import Header from "./manairheder";
import Footer from "./footer";
import bike from "./photos/m/bike.png";
import truck from "./photos/m/truck.png";
import long_truck from "./photos/m/long-kia-truck.png";
import pavan from "./photos/pavan.png";
import womendrinking from "./photos/m/womendrinking.jpg"
import men from "./photos/m/men.jpg";
import women from "./photos/m/women.jpg";
import women2 from "./photos/m/women2.jpg";
import Script from "./script";


const Manairwater = () => {

    return(
        
        <div>
            <Header/>
    <section className="service" id="services">
        <div className="container">
            <h1 className="title-all">Services</h1>
            <h2 className="title">What we do</h2>
            <p className="sub-title">The Value we Bring</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="service-box active-service">
                        <img src={long_truck} className="img-fluid" alt="image not found"/>
                        <h6>Express Delivery</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolore ad eveniet
                            dignissimos
                            accusamus mollitia!</p>
                        <i className="fas fa-arrow-circle-right"></i>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <img src={truck}className="img-fluid" alt="image not found"/>
                        <h6>Regular Delivery</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolore ad eveniet
                            dignissimos
                            accusamus mollitia!</p>
                        <i className="fas fa-arrow-circle-right"></i>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <div>
                        <img src={bike} className="img-fluid" alt="image not found"/>
                        </div>
                        <h6>Short Distance Delivery</h6>
                        <p>Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Eos dolore ad eveniet
                            dignissimos
                            accusamus mollitia!</p>
                        <i className="fas fa-arrow-circle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- service section ends--> */}

    {/* <!-- about-us section starts--> */}
    <section className="about-us" id="about-us">
        <div className="container">
            <h1 className="title-all">About Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={womendrinking} className="imgg img-fluid" alt=""></img>
                </div>
                <div className=" col-md-6">
                    <h1>We always love to hear from our <br/>Customers</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Our desires unknown to us, and we obtain them! 
                        Here, seeking to reject, where does the escape lie?"</p>
                   <button><a href="#about-us" className="get-in-touch" id="loginButton">GET IN TOUCH</a></button> 
                </div>
            </div>
        </div>
    </section>
    {/* <!-- about-us section ends --> */}

    {/* <!-- explore section starts--> */}
    <section className="explore">
        <div className="container"> 
            <div className="row">
                <div className=" col-md-4">
                    <h1>Surprising Benefits of Drinking Water</h1>
                    <h6>Your Brain Functions Better When <br/>Hydrated</h6>
                    <p>Mild dehydration, or fluid loss equal to 1-3 percent of body weight, can negatively impact
                        how
                        your brain works. Not drinking enough water can impair your mood, concentration, and memory.
                        It
                        can cause anxiety, fatigue, and also increase the frequency and longevity of headaches.
                        Hydrating properly keeps your brain functioning in tip-top shape.
                    </p>
                    <a className="learn-more" href="#">LEARN MORE</a>
                </div>
                <div className="col-md-5 text-center">
                    <img src={pavan} className="explore-img img-fluid" alt=""></img>
                </div>
                <div className=" col-md-3">
                    <h1>Surprising Benefits of Drinking Water</h1>
                    <h6>Water Contributes to Weight <br/>Loss</h6>
                    <p>
                        Not only does water have zero calories; it can increase your metabolism (the amount of calories
                        you burn while resting) and quench your thirst. Sugary drinks and alcohol have a high calorie
                        content while making you more thirsty, which can lead to dehydration. Drinking water before
                        meals can also reduce your appetite and help you consume fewer calories during the day.
                    </p>
                    <a className="learn-more" href="#">LEARN MORE</a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- explore section ends--> */}

    {/* <!-- review section starts--> */}
    <section className="review" id="reviews">
        <div className="container text-center">
            <h1 className="title-all">Reviews</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={women2} class="img-thumbnail" alt=""></img>
                        <div className="carousel-caption">
                            <h6>Emily Wenthoworth</h6>
                            <small>CE0 & FOUNDER @ BRYTE CO.</small>
                            <p>The<b/> Manair Water Plant is awesome! It makes my water taste so fresh, 
                                and I love how it's super easy to set up. Plus, the sleek design fits perfectly in my home.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={women} class="img-thumbnail" alt=""></img>
                        <div className="carousel-caption">
                            <h6>sanjana.</h6>
                            <small>PRODUCT MANAGER @ JustDail</small>
                            <p>I used to struggle with dry skin and irritated eyes, especially during the winter months. 
                                Since incorporating the ManairWater Plant into my home, those issues have significantly diminished. 
                                I wake up feeling refreshed.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={men} className="img-thumbnail"  alt=""></img>
                        <div className="carousel-caption">
                            <h6>lokesh</h6>
                            <small>CIO @ Clariant It Solutions. </small>
                            <p>The ManairWater Plant combines sleek design with advanced filtration, delivering crisp, refreshing water and noticeably 
                                improving the air quality in my home—an essential addition for a healthier and more pleasant living space.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    <Script/>
    </div>
   
        

  );
};
export default Manairwater;
 