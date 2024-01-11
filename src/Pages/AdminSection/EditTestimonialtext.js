import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';

const EditTestimonialtext = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/testimonialtext/${id}`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);



    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;
     

        const testimonialSection = {
            testimonialText,
            testimonialHeading,
            
        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/testimonialtext/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Testimonial Text Is Updated');
            });
    };








    return (
        <section id="services" class="services-area pt-120 pb-90 fix">
            <div className='mt-5'>
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">

                            <h3> Update Testimonial Text </h3>

                            <form class="contact-form " onSubmit={handleTestimonialSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="testimonialText" defaultValue={testimonialtext.testimonialText} placeholder="Testimonial Text" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="testimonialHeading" defaultValue={testimonialtext.testimonialHeading} placeholder="Testimonial Heading" required />
                                        </div>
                                    </div>

                                   


                                    <div class="slider-btn">
                                        <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                    </div>
                                </div>

                            </form>



                        </div>


                    </div>
                </div>





            </div>
        </section>
    );
};

export default EditTestimonialtext;