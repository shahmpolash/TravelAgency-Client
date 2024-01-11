import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditStep = () => {


    const [step, setStep] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/step-item/${id}`)
            .then((res) => res.json())
            .then((info) => setStep(info));
    }, []);


    const handleStepSection = (event) => {
        event.preventDefault();
        const accodingTitle = event.target.accodingTitle.value;
        const accodingText = event.target.accodingText.value;
       


        const stepSection = {
            accodingTitle,
            accodingText,
          



        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/step-item/${step._id}`;
        fetch(url, {
            method: "PUT",
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
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update FAQs Item </h2>

                            <form class="contact-form " onSubmit={handleStepSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="accodingTitle" defaultValue={step.accodingTitle} required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="accodingText" defaultValue={step.accodingText} required />
                                        </div>
                                    </div>
                                 

                                    <div class="slider-btn">
                                        <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update FAQs Item </button>
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

export default EditStep;