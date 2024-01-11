import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/banner`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, []);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeading = event.target.bannerHeading.value;
        const subHeading = event.target.subHeading.value;
        const bannerImage = event.target.bannerImage.value;
        const bannerEmail = event.target.bannerEmail.value;
        const getStartedButton = event.target.getStartedButton.value;
        const learnMoreButton = event.target.learnMoreButton.value;


        const bannerSection = {
            bannerHeading,
            subHeading,
            bannerImage,
            bannerEmail,
            getStartedButton,
            learnMoreButton,

        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-banner`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Banner is Updated');
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
                            <h3>Update Banner</h3>

                            {
                                banner.length === 1 &&
                                <>
                                    {
                                        banner.map(c =>
                                            banner.map(c=>
                                                <Link className='main-btn' to={`/banner/${c._id}`}> Please Banner Section</Link>)
                                        )
                                    }
                                </>
                            }
                            {
                                banner.length === 0 &&

                                <form class="contact-form " onSubmit={handleBannerSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="bannerHeading" placeholder="Heading" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text" id="lastn" name="subHeading" placeholder="Sub Heading" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email" name="bannerImage" placeholder="Banner Image" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="email" id="email" name="bannerEmail" placeholder="Banner Email" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email" name="getStartedButton" placeholder="Get Started Button" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" id="email" name="learnMoreButton" placeholder="Learn More Button" required />
                                            </div>
                                        </div>
                                        

                                        <div class="slider-btn">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s">Update Banner</button>
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

export default BannerSection;