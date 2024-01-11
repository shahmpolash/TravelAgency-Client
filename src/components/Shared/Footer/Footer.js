import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [categories, setCategories] = useState([]);
  const [footerAbout, setFooterAbout] = useState([]);
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);
  const navigate = useNavigate();

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  const [canvas, setCanvas] = useState([]);



  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/Shah-Limon/em-list/master/data.json`)
      .then((res) => res.json())
      .then((info) => setCanvas(info));
  }, []);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, [categories]);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/footer-about`)
      .then((res) => res.json())
      .then((info) => setFooterAbout(info));
  }, []);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);

  const [subscribers, setSubscriber] = useState([]);

  useEffect(() => {
      fetch(`https://travelagency-a887203e1d88.herokuapp.com/subscribers`)
          .then((res) => res.json())
          .then((info) => setSubscriber(info));
  }, []);

  const handleSubscriber = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    



    const addItem = {
      email,
       


    };

    const url = `https://travelagency-a887203e1d88.herokuapp.com/add-subscriber`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addItem),
        })
            .then((res) => res.json())
            .then((result) => {
                navigate('/all-subscriber');
                alert('subscribers is Updated');
            });


  }

  return (
    <>
     
      <footer className="footer-area footer-area-v1">
        <div className="footer-widget blue-bg pt-90 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/* Widget */}
                <div className="widget about-widget wow fadeInUp mb-30">
                  <h4 className="widget-title">About Us</h4>
                  {
                    footerAbout.map(e => <div className="about-content">

                      <p>{e.aboutFooterDetails}</p>
                      <ul className="social-link">
                        <li><a href={e.footerFblink}><i className="fab fa-facebook-f" /></a></li>
                        <li><a href={e.footerInstagram}><i className="fab fa-instagram" /></a></li>
                      </ul>
                    </div>)
                  }


                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/* Widget */}

                {
                  footerAddress.map(ins=> <div className="widget instagram-feed-widget wow fadeInUp mb-30">
                  <h4 className="widget-title">Instagram Feeds</h4>
                  <ul className="instagram-list">
                    <li>
                      <a href="/">
                        <img src={ins.imgOne} alt />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={ins.imgTwo} alt />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={ins.imgThree} alt />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={ins.imgFour} alt />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={ins.imgFive} alt />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={ins.imgSix} alt />
                        <div className="insta-overlay">
                          <i className="fab fa-instagram" />
                        </div>
                      </a>
                    </li>
          
                    
                  </ul>
                </div>)
                }
                
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">

                {/* Widget */}
                <div className="widget newsletter-widget wow fadeInUp mb-30">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="newsletter-form">
                    <p>Subscribe our newsletter to get our
                      latest updates &amp; news.</p>
                    <form onSubmit={handleSubscriber}>
                      <div className="form_group">
                        <input type="email" className="form_control" placeholder="Enter email address" name="email" required />
                        <button className="newsletter-btn"><i className="far fa-paper-plane" /></button>
                      </div>
                    </form>
                    <p>*** We never gonna spamming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright area */}
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                {
                  footerCopyright.map(f=><div className="copyright-text">
                  <p className="text-center">{f.copyrightText}</p>
                </div> )
                }

                
              </div>
              
              
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
