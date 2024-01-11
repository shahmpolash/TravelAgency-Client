import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditLogo = () => {


    const [editlogo, setLogo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/logo/${id}`)
            .then((res) => res.json())
            .then((info) => setLogo(info));
    }, []);



    const handleLogo = (event) => {
        event.preventDefault();
        const logo = event.target.logo.value;



        const logoSection = {
            logo,


        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/logo/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(logoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Logo is Updated');
            });
    };



    return (
        <>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h4> Update Your Logo</h4>

                            

                                <form class="contact-form " onSubmit={handleLogo}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div>
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="logo" defaultValue={editlogo.logo} placeholder="Submit Your Logo" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Update Your Logo</button>
                                        </div>
                                    </div>

                                </form>
                            

                        </div>


                    </div>
                </div>
            </section>



        </>
    );
};

export default EditLogo;