import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FAQtextedit = () => {

    const [faqtext, setService] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/faq/${id}`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);




    const handleFAQText = (event) => {
        event.preventDefault();
        const faqText = event.target.faqText.value;
        const faqHeading = event.target.faqHeading.value;
        const faqImg = event.target.faqImg.value;


        const faqSection = {
            faqText,
            faqHeading,
            faqImg

        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/faq/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(faqSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' FAQ Text is Updated');
            });
    };




    return (
        <div>
            {
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h3> Update FAQ Text </h3>

                                <form class="contact-form " onSubmit={handleFAQText}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="faqText" defaultValue={faqtext.faqText} placeholder="FAQ Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="faqHeading" defaultValue={faqtext.faqHeading} placeholder="FAQ Heading" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="faqImg" defaultValue={faqtext.faqImg} placeholder="FAQ Image" required />
                                            </div>
                                        </div>




                                        <div class="slider-btn">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update FAQ Text </button>
                                        </div>
                                    </div>

                                </form>



                            </div>



                        </div>
                    </div>

                </section>
            }
        </div>
    );
};

export default FAQtextedit;