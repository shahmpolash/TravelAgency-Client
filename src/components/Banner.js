import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  



  return (
    <>
      

      {
        banners.map(banner => <section className="hero-area-v1 aquamarine-light">
          {/* Hero Shape */}
          <div className="hero-shape">
            <div className="shape shape-one wow slideInLeft" data-wow-delay=".5s" />
            <div className="shape shape-two wow slideInRight" data-wow-delay="1s" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* Hero content */}
                <div className="hero-content wow fadeInDown" data-wow-delay=".5s">
                  <span className="span">{banner.subHeading}</span>
                  <h1>{banner.bannerHeading}</h1>
                  <div className="box d-flex">
                    <div className="icon">
                      <i className="flaticon-communication" />
                    </div>
                    <div className="info">
                      <span>Get Support</span>
                      <h5><a >{banner.bannerEmail}</a></h5>
                    </div>
                  </div>
                  <ul className="button">
                    <li><a href="/contact-us" className="main-btn">{banner.getStartedButton}</a></li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                {/* Hero Image */}
                <div className="hero-img wow fadeInRight" data-wow-delay=".7s">
                  <img src={banner.bannerImage} alt="Hero Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        )
      }

    </>
  );
};

export default Banner;
