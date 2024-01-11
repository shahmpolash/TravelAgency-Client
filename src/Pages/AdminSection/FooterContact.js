import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const FooterContact = () => {

    const [footeraddress, setAddressfooter] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/footer-address`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);


    const handlefooterAddress = (event) => {
        event.preventDefault();

        const imgOne = event.target.imgOne.value;
        const imgTwo = event.target.imgTwo.value;
        const imgThree = event.target.imgThree.value;
        const imgFour = event.target.imgFour.value;
        const imgFive = event.target.imgThree.value;
        const imgSix = event.target.imgThree.value;




        const instaSection = {

            imgOne,
            imgTwo,
            imgThree,
            imgFour,
            imgFive,
            imgSix
            
           




        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-footer-address`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(instaSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Instagram Img URL is Updated');
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

                            {
                                footeraddress.length === 1 &&
                                <>
                                    {
                                        footeraddress.map(c =>
                                            footeraddress.map(c =>
                                                <Link className='main-btn' to={`/edit-instagram-url/${c._id}`}> Edit Now</Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                footeraddress.length === 0 &&

                                <form class="contact-form " onSubmit={handlefooterAddress}>
                                    <div class="row">




                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">

                                                <input type="text"  name="imgOne" placeholder=" Image URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="imgTwo" placeholder=" Image URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="imgThree" placeholder=" Image URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="imgFour" placeholder=" Image URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="imgFive" placeholder=" Image URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="imgSix" placeholder=" Image URL" required />
                                            </div>
                                        </div>



                                        <div class="slider-btn">
                                            <button class="main-btn" data-delay=".8s"> Add Instagram Img URL</button>
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

export default FooterContact;