import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [logo, setLogo] = useState([]);
  const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/users`)
            .then((res) => res.json())
            .then((info) => setUsers(info));
    }, []);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);



  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);
  return (
    <>
      <div>
        <div className="modal fade" id="search-modal">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <form>
                <div className="form_group">
                  <input type="text" className="form_control" placeholder="Search here..." />
                  <button className="search_btn"><i className="fa fa-search" /></button>
                </div>
              </form>
            </div>
          </div>
        </div>{/*====== Search From ======*/}
        {/*====== offcanvas-panel ======*/}
        <div className="panel-overlay" />
        <div className="offcanvas-panel">
          <div className="offcanvas-panel-inner">
            <div className="panel-logo">
              <a href="/"><img src="assets/images/logo/logo-1.png" alt="Qempo" /></a>
            </div>
            <div className="about-us">
              <h5 className="panel-widget-title">About Us</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam alias quae cupiditate quas, neque eum magni impedit asperiores ad id sint repudiandae quaerat, omnis commodi consequatur dolore rerum deleniti!
              </p>
            </div>
            <div className="contact-us">
              <h5 className="panel-widget-title">Contact Us</h5>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" />
                  121 King St, Melbourne VIC 3000, Australia.
                </li>
                <li>
                  <i className="fal fa-envelope-open" />
                  <a href="mailto:hello@barky.com"> hello@barky.com</a>
                  <a href="mailto:info@barky.com">info@barky.com</a>
                </li>
                <li>
                  <i className="fal fa-phone" />
                  <a href="tel:(312)-895-9800">(312) 895-9800</a>
                  <a href="tel:(312)-895-9888">(312) 895-9888</a>
                </li>
              </ul>
            </div>
            <a href="#" className="panel-close"><i className="fal fa-times" /></a>
          </div>
        </div>
        <header className="header-area-one transparent-header">
          <div className="header-navigation">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2 col-4">
                  <div className="site-branding">
                    {
                      logo.map(l =>
                        <div className="brand-logo">
                          <a href="/"><img src={l.logo} className="img-fluid" alt="Qempo" /></a>
                        </div>)
                    }

                  </div>
                </div>
                <div className="col-lg-6 col-2">
                  <div className="nav-menu">
                    {/* Navbar Close Icon */}
                    <div className="navbar-close"><i className="fal fa-times" /></div>
                    <nav className="main-menu">
                      <ul>
                        <li className="menu-item"><a href="/">Home</a></li>
                        <li className="menu-item"><a href="/services">Services</a></li>
                        <li className="menu-item"><a href="/pricing">Pricing</a></li>
                        <li className="menu-item"><a href="/contact-us">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4 col-6">
                  {/* Header Right Nav */}
                  <div className="header-right-nav">
                    <div className="menu-icon-group">
                      <ul>
                        {
                          user ?
                       
                      
                      <Link to='/dashboard'><button className="main-btn" type="submit">Dashboard</button></Link>

                      :
                      
                      <Link to='/login'><button className="main-btn" type="submit">Login</button></Link>
                    }
                    {
                      users.filter(u => u.userEmail === user?.email).length === 1 &&
                      <Link to='/admin'><button className="main-btn ml-5" type="submit">Admin</button></Link>
                    }

                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

    </>
  );
};

export default NavBar;
