import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const InfoSection = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/info`)
            .then((res) => res.json())
            .then((info) => setInfo(info));
    }, []);


    const handleInfoSection = (event) => {
        event.preventDefault();
        const phoneNumber = event.target.phoneNumber.value;
        const emailaddress = event.target.emailaddress.value;
        const location = event.target.location.value;
     


        const bannerSection = {
            phoneNumber,
            emailaddress,
            location,
          

        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-info`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Info Section is Updated');
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
                            <h2> Update Info Text</h2>

                            {
                                info.length === 1 &&
                                <>
                                    {
                                        info.map(c =>
                                            info.map(c=>
                                                <Link className='main-btn' to={`/info/${c._id}`}> Please Info Text</Link>)
                                        )
                                    }
                                </>
                            }
                            {
                                info.length === 0 &&

                                <form class="contact-form " onSubmit={handleInfoSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="phoneNumber" placeholder="Phone Number" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="emailaddress" placeholder="Email Address" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email" name="location" placeholder="Location" required />
                                            </div>
                                        </div>
                                  

                                        <div class="slider-btn">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s">Update Info Section</button>
                                        </div>
                                    </div>

                                </form>
                            }


                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoSection;