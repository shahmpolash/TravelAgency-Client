import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PaypalEmail = () => {

    const [paypal, setPaypal] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/paypal-email/${id}`)
            .then((res) => res.json())
            .then((info) => setPaypal(info));
    }, []);


    const handleUpdatePaypal = (event) => {
        event.preventDefault();
        const paypalEmail = event.target.paypalEmail.value;

        const PaypalEmailUpdate = {
            paypalEmail,
        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/paypal-email/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(PaypalEmailUpdate),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Paypal Email Updated');
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

                            <form class="contact-form " onSubmit={handleUpdatePaypal}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="paypalEmail" defaultValue={paypal.paypalEmail} placeholder="Paypal Email" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update Now</button>
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

export default PaypalEmail;