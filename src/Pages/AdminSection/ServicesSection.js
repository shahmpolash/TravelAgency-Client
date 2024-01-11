import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {

    const [service, setService] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleServiceSection = (event) => {
        event.preventDefault();
        const serviceText = event.target.serviceText.value;
        const serviceHeading = event.target.serviceHeading.value;

        const serviceSection = {
            serviceText,
            serviceHeading,


        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-Service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;
        const buttonText = event.target.buttonText.value;
        const buttonLink = event.target.buttonLink.value;

        const itemSection = {
            serviceIcon,
            serviceTitle,
            serviceDetails,
            buttonText,
            buttonLink,
        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-service-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Added');
            });
    };



    return (
        <div className='mt-5'>

            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h3> Update Service Text</h3>
                            {
                                service.length === 1 &&
                                <>{service.map(s => <Link className='main-btn' to={`/servicetext-edit/${s._id}`}>Update Service</Link>)}</>
                            }
                            {
                                service.length === 0 &&
                                <form class="contact-form " onSubmit={handleServiceSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="serviceText" placeholder="Service Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="serviceHeading" placeholder="Service Heading" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update Services </button>
                                        </div>
                                    </div>

                                </form>
                            }

                            <h3>Add Service</h3>

                            <form class="contact-form" onSubmit={handleAddItem}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="serviceIcon" placeholder="Service Icon" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="serviceTitle" placeholder="Service Title" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="serviceDetails" placeholder="Service Details" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                          
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="buttonText" placeholder="Button Text" required />
                                            
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                           
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="buttonLink" placeholder="Button Link" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Add Service </button>
                                    </div>
                                </div>

                            </form>



                        </div>

                        <div className="col-lg-8 col-md-12">

                            <div className="row">
                                <h3>Service List</h3>






                            </div>
                        </div>

                        <section className="service-area-v1 aquamarine-light pt-105 pb-80">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">



                                    </div>
                                </div>
                                <div className="row">

                                    {
                                        items.map(s => <div className="col-lg-3 col-md-6 col-sm-12">
                                            {/* Service Item */}
                                            <div className="serivce-item mb-40 wow fadeInUp">
                                                <div className="icon">


                                                </div>
                                                <div className="content">
                                                    <h3 className="title"><Link to={`/service-edit/${s._id}`}>{s.serviceTitle}</Link></h3>
                                                    <p>{s.serviceDetails}</p>

                                                </div>
                                            </div>
                                        </div>
                                        )
                                    }


                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </section>

        </div>
    );
};

export default ServicesSection;