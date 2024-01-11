import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';

const EditPricing = () => {

    


    const [pricing, setPricing] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/pricing/${id}`)
            .then((res) => res.json())
            .then((info) => setPricing(info));
    }, []);



    const handlePackege = (event) => {
        event.preventDefault();
        const packageName = event.target.packageName.value;
        const packagePrice = event.target.packagePrice.value;
        const packageButtonText = event.target.packageButtonText.value;
        const packagePointOne = event.target.packagePointOne.value;
        const packagePointTwo = event.target.packagePointTwo.value;
        const packagePointThree = event.target.packagePointThree.value;
        const packagePointFour = event.target.packagePointFour.value;
        const packagePointFive = event.target.packagePointFive.value;
        const packagePointSix = event.target.packagePointSix.value;
        const packagePointSeven = event.target.packagePointSeven.value;
        const packagePointEight = event.target.packagePointEight.value;
        const packagePointNine = event.target.packagePointNine.value;
        const packagePointTen = event.target.packagePointTen.value;


        const PackageSection = {
            packageName,
            packagePrice,
            packageButtonText,
            packagePointOne,
            packagePointTwo,
            packagePointThree,
            packagePointFour,
            packagePointFive,
            packagePointSix,
            packagePointSeven,
            packagePointEight,
            packagePointNine,
            packagePointTen,

        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/pricing/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(PackageSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Pricing One Is Updated');
            });
    };








    return (
        <>
        <section id="services" class="services-area pt-120 pb-90 fix">
            <div className='mt-5'>
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">

                            <h3> Update Pricing Plan </h3>

                            <form class="contact-form " onSubmit={handlePackege}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packageName" defaultValue={pricing.packageName} placeholder="Package Name" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePrice" defaultValue={pricing.packagePrice} placeholder="Package Price" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packageButtonText" defaultValue={pricing.packageButtonText} placeholder="Button Text" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointOne" defaultValue={pricing.packagePointOne} placeholder="Point One" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointTwo" defaultValue={pricing.packagePointTwo} placeholder="Point Two" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointThree" defaultValue={pricing.packagePointThree} placeholder="Point Three" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointFour" defaultValue={pricing.packagePointFour} placeholder="Point Four" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointFive" defaultValue={pricing.packagePointFive} placeholder="Point Five" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointSix" defaultValue={pricing.packagePointSix} placeholder="Point Six" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointSeven" defaultValue={pricing.packagePointSeven} placeholder="Point Seven" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointEight" defaultValue={pricing.packagePointEight} placeholder="Point Eight" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointNine" defaultValue={pricing.packagePointNine} placeholder="Point Nine" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="packagePointTen" defaultValue={pricing.packagePointTen} placeholder="Point Ten" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="main-btn" data-delay=".8s">Update Pricing</button>
                                        </div>
                                    </div>

                                </form>

                            



                        </div>


                    </div>
                </div>





            </div>
        </section>
        </>
    );
};

export default EditPricing;