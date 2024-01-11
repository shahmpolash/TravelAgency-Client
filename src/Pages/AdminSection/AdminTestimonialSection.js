import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';

const AdminTestimonialSection = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const [testimonials, settestimonials] = useState([]);


    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/testimonialtext`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/testimonials`)
            .then((res) => res.json())
            .then((info) => settestimonials(info));
    }, []);

    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;
        

        const testimonialSection = {
            testimonialText,
            testimonialHeading,
            

        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-testimonial-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };





    const handleStepSection = (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const personName = event.target.personName.value;
        const personTitle = event.target.personTitle.value;
        const desc = event.target.desc.value;
        const imagetwo = event.target.imagetwo.value;


        const stepSection = {
            image,
            imagetwo,
            personName,
            personTitle,
            desc,

        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-testimonial`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(stepSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Step Section is Updated');
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
                            {
                                testimonialtext.length === 1 &&
                                <>
                                    {testimonialtext.map(text =>
                                        <Link className='main-btn' to={`/testimonialtext-edit/${text._id}`}> Update Now</Link>
                                    )}
                                </>
                            }

                            {testimonialtext.length === 0 &&
                                <form class="contact-form " onSubmit={handleTestimonialSection}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="testimonialText" placeholder=" Testimonial Text" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" id="firstn" name="testimonialHeading" placeholder="Testimonial Heading" required />
                                            </div>
                                        </div>

                                        


                                        <div class="slider-btn">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                        </div>
                                    </div>

                                </form>
                            }





                            <h3> Add Testimonial Item </h3>

                            <form class="contact-form " onSubmit={handleStepSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="image" placeholder="Person Image URL" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="imagetwo" placeholder="Image URL Two" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="personName" placeholder="Person Name" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="personTitle" placeholder="Person Title" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="desc" placeholder="Details" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="main-btn" data-delay=".8s"> Add Testimonial</button>
                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title center-align text-center mb-50">
                                <h5>Testimonial Section</h5>
                                <h3>Testimonial List</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            testimonials.map(t => <div className="testimonial-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-3">
                                        <div className="testimonial-thumb">
                                            <img src={t.image} alt />
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="testimonial-content">
                                            <div className="info d-flex align-items-center">

                                                <ul className="rating rating-5">
                                                    <li><i className="fas fa-star" /></li>
                                                    <li><i className="fas fa-star" /></li>
                                                    <li><i className="fas fa-star" /></li>
                                                    <li><i className="fas fa-star" /></li>
                                                    <li><i className="fas fa-star" /></li>
                                                </ul>
                                            </div>


                                            <Link to={`/edit-testimonial/${t._id}`}>
                                                <h4>{t.desc} </h4>
                                            </Link>
                                            <div className="title">
                                                <h5>{t.personName}</h5>
                                                <span className="position">{t.personTitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>

                </div>




            </div>
        </section>
    );
};

export default AdminTestimonialSection;