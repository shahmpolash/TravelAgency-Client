import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EditContactPage = () => {

    const [contactdetails, setContact] = useState([]);


    const { id } = useParams();

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/contacts/${id}`)
            .then((res) => res.json())
            .then((info) => setContact(info));
    }, []);

    const handleContactSection = (event) => {
        event.preventDefault();
        
        const contactTitle = event.target.contactTitle.value;
        const contactDetails = event.target.contactDetails.value;
        const contactImg = event.target.contactImg.value;
        



        const contactSection = {
            
            contactTitle,
            contactDetails,
            contactImg,
           



        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/contacts/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Contcat Section is Updated');
            });
    };



    return (
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h3> Update Contact </h3>

                            <form class="contact-form " onSubmit={handleContactSection}>
                                <div class="row">
                                    

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="contactTitle" defaultValue={contactdetails.contactTitle} placeholder="contact Title" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="contactDetails" defaultValue={contactdetails.contactDetails} placeholder="Contact Details" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="contactImg" defaultValue={contactdetails.contactImg} placeholder="Contact Image" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="main-btn" data-delay=".8s"> Update Contcat Details</button>
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

export default EditContactPage;