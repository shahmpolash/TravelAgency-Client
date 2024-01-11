import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const 
UpdateAboutSection = () => {

    const [about, setAbout] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      fetch(`https://travelagency-a887203e1d88.herokuapp.com/about-us/${id}`)
        .then((res) => res.json())
        .then((info) => setAbout(info));
    }, [id]);
  


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
            AboutSmallHeading,
            AboutDetailsText,
            AboutPointOne,
            AboutPointTwo,
            AboutSmallImage
          

        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/update-about/${id}`;
        fetch(url, {
            method: "PUT",
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
                            <h4> Update About </h4>

                            
                                <form class="contact-form " onSubmit={handleAboutSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutNumber" defaultValue={about.AboutNumber} placeholder="About Number" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutNumberText" defaultValue={about.AboutNumberText} placeholder="About Number Text" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutImageOne" defaultValue={about.AboutImageOne} placeholder="About Image One" required />
                                        </div>
                                    </div>


                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutImageTwo" defaultValue={about.AboutImageTwo} placeholder="About Image Two" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutHeading" defaultValue={about.AboutHeading} placeholder="About Heading" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutSubHeading" defaultValue={about.AboutSubHeading} placeholder="About SubHeading" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-email mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutDetails" defaultValue={about.AboutDetails} placeholder="About Details" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutSmallImage" defaultValue={about.AboutSmallImage} placeholder="About Small Image" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutSmallHeading" defaultValue={about.AboutSmallHeading} placeholder="About Small Heading" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutDetailsText" defaultValue={about.AboutDetailsText} placeholder="About Details Text" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutPointOne" defaultValue={about.AboutPointOne} placeholder="About Point One" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="AboutPointTwo" defaultValue={about.AboutPointTwo} placeholder="About Point Two" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
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

export default UpdateAboutSection;