import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EditFooterContact = () => {

    const [footerad, setAddressfooter] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/footer-address/${id}`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);


    const handlefooterAddress = (event) => {
        event.preventDefault();

        const imgOne = event.target.imgOne.value;
        const imgTwo = event.target.imgTwo.value;
        const imgThree = event.target.imgThree.value;
        const imgFour = event.target.imgFour.value;
        const imgFive = event.target.imgFive.value;
        const imgSix = event.target.imgSix.value;




        const contactSection = {

            imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix,




        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/footer-address/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Address is Updated');
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


                            <h3> Update Instagram Feeds </h3>





                            <form class="contact-form " onSubmit={handlefooterAddress}>
                                <div class="row">



                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="imgOne" defaultValue={footerad.imgOne} required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="imgTwo" defaultValue={footerad.imgTwo} required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="imgThree" defaultValue={footerad.imgThree} required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="imgFour" defaultValue={footerad.imgFour} required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="imgFive" defaultValue={footerad.imgFive} required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="imgSix" defaultValue={footerad.imgSix} required />
                                        </div>
                                    </div>



                                    <div class="slider-btn">
                                        <button class="main-btn" data-delay=".8s"> Add Instagram URL</button>
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

export default EditFooterContact;