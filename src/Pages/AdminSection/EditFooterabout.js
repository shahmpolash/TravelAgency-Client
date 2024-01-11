import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditFooterabout = () => {

    const [footerabout, setFooterabout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/footer-about/${id}`)
            .then((res) => res.json())
            .then((info) => setFooterabout(info));
    }, [footerabout]);


    const handleFooterAbout = (event) => {
        event.preventDefault();
       
        const aboutFooterDetails = event.target.aboutFooterDetails.value;
        const footerFblink = event.target.footerFblink.value;
        const footerInstagram = event.target.footerInstagram.value;



        const FooterAboutSection = {
           
            aboutFooterDetails,
            footerFblink,
            footerInstagram,


        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/footer-about/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(FooterAboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer is Updated');
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
                            <h3> Update Footer About</h3>

                            <form class="contact-form " onSubmit={handleFooterAbout}>
                                <div class="row">
                                   
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="aboutFooterDetails" defaultValue={footerabout.aboutFooterDetails} placeholder="About Details" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="footerFblink" defaultValue={footerabout.footerFblink} placeholder="Footer Facebook URL" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="footerInstagram" defaultValue={footerabout.footerInstagram} placeholder="Footer Instagram URL" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update Footer About</button>
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

export default EditFooterabout;