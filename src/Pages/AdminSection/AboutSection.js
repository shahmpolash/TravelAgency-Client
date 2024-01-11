import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/about`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, []);



    const handleAboutSection = (event) => {
        event.preventDefault();
        const AboutNumber = event.target.AboutNumber.value;
        const AboutNumberText = event.target.AboutNumberText.value;
        const AboutImageOne = event.target.AboutImageOne.value;
        const AboutImageTwo = event.target.AboutImageTwo.value;
        const AboutHeading = event.target.AboutHeading.value;
        const AboutSubHeading = event.target.AboutSubHeading.value;
        const AboutDetails = event.target.AboutDetails.value;
        const AboutSmallImage = event.target.AboutSmallImage.value;
        const AboutSmallHeading = event.target.AboutSmallHeading.value;
        const AboutDetailsText = event.target.AboutDetailsText.value;
        const AboutPointOne = event.target.AboutPointOne.value;
        const AboutPointTwo = event.target.AboutPointTwo.value;


        const aboutSection = {
            AboutNumber,
            AboutNumberText,
            AboutImageOne,
            AboutImageTwo,
            AboutHeading,
            AboutSubHeading,
            AboutDetails,
            AboutSmallImage,
            AboutSmallHeading,
            AboutDetailsText,
            AboutPointOne,
            AboutPointTwo,

        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-about`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('About is Updated');
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
                            <h3> Update About </h3>

                            {
                                about.length === 1 &&
                                <>
                                    {
                                        about.map(a =>
                                            <Link className='main-btn' to={`/${a._id}`}>
                                                Update About Section
                                            </Link>
                                        )
                                    }
                                </>
                            }
                            {
                                about.length === 0 &&

                                
                                <form class="contact-form " onSubmit={handleAboutSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="AboutNumber" placeholder="About Number" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="AboutNumberText" placeholder="About Number Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="AboutImageOne" placeholder="About Image One" required />
                                            </div>
                                        </div>


                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="AboutImageTwo" placeholder="About Image Two" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="AboutHeading" placeholder="About Heading" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="AboutSubHeading" placeholder="About Sub Heading" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="AboutDetails" placeholder="About Details" required />
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="AboutSmallImage" placeholder="About Small Image" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="AboutSmallHeading" placeholder="About Small Heading" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="AboutDetailsText" placeholder="About Details Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email" name="AboutPointOne" placeholder="About Point One" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email" name="AboutPointTwo" placeholder="About Point Two" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
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

export default AboutSection;