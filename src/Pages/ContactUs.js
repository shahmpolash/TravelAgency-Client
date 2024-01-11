import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBottom from '../components/FrontPage/HeaderBottom';

const ContactUs = () => {
    const [contact, setContact] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/contacts`)
            .then((res) => res.json())
            .then((info) => setContact(info));
    }, []);



    const handleMessage = (event) => {
        event.preventDefault();
        const fullname = event.target.fullname.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        const messageStatus = event.target.messageStatus.value;



        const addItem = {
            fullname,
            email,
            message,
            messageStatus,


        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-message`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addItem),
        })
            .then((res) => res.json())
            .then((result) => {
                navigate('/all-messages');
                alert('Message is Updated');
            });
    };



    return (


        <>

        <HeaderBottom></HeaderBottom>
            <div>
                <section className="bredcumbs-area bg_cover" style={{ backgroundColor: '#000000',  }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="page-title-inner">
                                    <ul className="bredcumbs-link">
                                        <li><a href="/">Home</a></li>
                                        <li className="active">Contact</li>
                                    </ul>
                                    <div className="title">
                                        <h1>Contact Us</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-map-section">
                    <div className="map-box">
                        <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                    </div>
                </section>
                <section className="contact-info-area-v1">
                    <div className="container">
                        <div className="row">
                            {
                                contact.map(c=> <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-info-item text-center wow fadeInUp mb-40">
                                    <div className="info-inner-item">
                                        <div className="icon">
                                            <img src={c.contactImg} alt />
                                        </div>
                                        <div className="info">
                                            <h4>{c.contactTitle}</h4>
                                            <p>{c.contactDetails}</p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    )
                            }
                            
                           
                        </div>
                    </div>
                </section>
                <section className="contact-area-v1 pt-80 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title mb-45 wow fadeInUp">
                                    <span className="span">Contcat Now</span>
                                    <h2>Get In Touch With Us</h2>
                                </div>
                                <div className="contact-form-area mb-60 wow fadeInUp">

                                    <form onSubmit={handleMessage} >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form_group">
                                                    <input type="text" className="form_control" placeholder="Enter full name" name="fullname" required />
                                                    <i className="far fa-user" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form_group">
                                                    <input type="email" className="form_control" placeholder="Enter email address" name="email" required />
                                                    <i className="far fa-envelope" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form_group">
                                                    <input type="text" className="form_control" value='UnRead' hidden placeholder="Enter email address" name="messageStatus" />
                                                    
                                                </div>
                                            </div>

                                            <div className="col-lg-12">

                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form_group">
                                                    <textarea name="message" placeholder="Enter messgae" className="form_control" defaultValue={""} />
                                                    <i className="far fa-pen" />
                                                </div>
                                            </div>
                                             
                                            <div className="col-lg-12">
                                                <div className="form_group">
                                                    <button className="main-btn" type="submit">Get A Quote</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-img mb-60 wow fadeInRight">
                                    <img src="assets/images/contact/contact-1.jpg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default ContactUs;