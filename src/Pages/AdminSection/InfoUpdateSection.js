import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InfoUpdateSection = () => {

    const [infosec, setInfo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/info/${id}`)
            .then((res) => res.json())
            .then((info) => setInfo(info));
    }, [infosec]);


    const handleInfoSection = (event) => {
        event.preventDefault();
        const phoneNumber = event.target.phoneNumber.value;
        const emailaddress = event.target.emailaddress.value;
        const location = event.target.location.value;



        const infoSection = {
            phoneNumber,
            emailaddress,
            location,




        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/update-info/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(infoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Info is Updated');
            });
    };



    return (
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h3> Update Info Section </h3>

                            <form class="contact-form " onSubmit={handleInfoSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="phoneNumber" defaultValue={infosec.phoneNumber} placeholder="Phone Number" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="emailaddress" defaultValue={infosec.emailaddress} placeholder="Email Address" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20 form_group ">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="location" defaultValue={infosec.location} placeholder="Your Location" required />
                                        </div>
                                    </div>

                                    
                                        <div class="slider-btn ">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update Info Text </button>
                                        
                                    </div>



                                </div>



                            </form>


                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoUpdateSection;