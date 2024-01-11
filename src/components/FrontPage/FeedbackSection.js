import React, { useEffect, useState } from 'react';

const FeedbackSection = () => {

    const [testimonial, setTestimonial] = useState([]);

    const [testimonialtext, setTestimonialText] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/testimonialtext`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/testimonials`)
            .then((res) => res.json())
            .then((info) => setTestimonial(info));
    }, []);


    return (
        <>
            <section className="testimonial-area-v1 pt-105 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {/* Section Title */}
                            {
                                testimonialtext.map(testi => <div className="section-title text-center mb-65">
                                    <h2>{testi.testimonialHeading}</h2>
                                    <span className="span">{testi.testimonialText}</span>
                                </div>)
                            }

                        </div>
                    </div>
                    {/* Testimonial Slide One */}
                    <div className="testimonial-slide-one">
                        {/* Testimonial Item */}

                        {
                            testimonial.map(t => <div className="testimonial-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-3">
                                        <div className="testimonial-thumb">
                                            <img src={t.image} alt="img" />
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
                                            <h5>{t.desc} </h5>
                                            <div className="title">
                                                <h4>{t.personName}</h4>
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
            </section>


        </>
    );
};

export default FeedbackSection;