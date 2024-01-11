import React, { useEffect, useState } from 'react';
import HeaderBottom from './HeaderBottom';

const ContactinfoSection = () => {
  const [info, setBanner] = useState([]);

  useEffect(() => {
      fetch(`https://travelagency-a887203e1d88.herokuapp.com/info`)
          .then((res) => res.json())
          .then((info) => setBanner(info));
  }, []);


    return (
        <>
       
          <section className="contact-info-area-v2 pt-75 pb-75">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        {/* Section Title */}
        <div className="section-title section-title-white wow fadeInUp">
          <h2>Get In Touch</h2>
          <span className="span">Contact Us</span>
        </div>
      </div>
      {
        info.map(contact=> <div className="col-lg-7">
        <div className="info-wrapper wow fadeInDown">
          <div className="row">
            <div className="col-lg-4">
              {/* Contact Info Item */}
              <div className="contact-info-item">
                <div className="info-inner-item text-center">
                  <div className="icon">
                    <i className="flaticon-call" />
                  </div>
                  <div className="info">
                    <p>{contact.phoneNumber}</p>
                 
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Contact Info Item */}
              <div className="contact-info-item text-center">
                <div className="info-inner-item">
                  <div className="icon">
                    <i className="flaticon-open" />
                  </div>
                  <div className="info">
                    <p>{contact.emailaddress}</p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Contact Info Item */}
              <div className="contact-info-item text-center">
                <div className="info-inner-item">
                  <div className="icon">
                    <i className="flaticon-location-pin" />
                  </div>
                  <div className="info">
                  <p>{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> )
      }
      
    </div>
  </div>
</section>


        </>
    );
};

export default ContactinfoSection;