import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateBannerSection = () => {

    const [banner, setBanner] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/banner/${id}`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, [banner]);


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

        const url = `https://travelagency-a887203e1d88.herokuapp.com/update-banner/${id}`;
        fetch(url, {
            method: "PUT",
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
                            <h3> Update Banner</h3>

                            <form onSubmit={handleBannerSection} >
                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="bannerHeading" defaultValue={banner.bannerHeading} placeholder="Banner Heading" required />
                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="subHeading" defaultValue={banner.subHeading} placeholder="Banner Sub Heading" required />
                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="bannerImage" defaultValue={banner.bannerImage} placeholder="Banner Image" required />
                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="bannerEmail" defaultValue={banner.bannerEmail} placeholder="Banner Email" required />
                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="getStartedButton" defaultValue={banner.getStartedButton} placeholder="Button Get Started" required />
                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" hidden name="learnMoreButton" defaultValue={banner.learnMoreButton} placeholder="Button Learn More" required />

                                <button class="main-btn" data-delay=".8s"> Update Banner</button>

                            </form>

                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateBannerSection;