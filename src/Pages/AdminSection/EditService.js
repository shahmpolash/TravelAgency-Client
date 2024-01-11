import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditService = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/service-item/${id}`)
            .then((res) => res.json())
            .then((info) => setItem(info));
    }, []);

    const handleAddItem = (event) => {
        event.preventDefault();
        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;
        const buttonText = event.target.buttonText.value;
        const buttonLink = event.target.buttonLink.value;

        const itemSection = {
            serviceIcon,
            serviceTitle,
            serviceDetails,
            buttonText,
            buttonLink,
        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/service-item/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Updated');
            });
    };


    return (
        <div className='container mt-5 vh-100 d-flex align-items-center justify-content-center'>
            <form class="contact-form" onSubmit={handleAddItem}>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contact-field p-relative c-name mb-20">
                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="serviceIcon" defaultValue={item.serviceIcon} placeholder="Service Icon" required />
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="contact-field p-relative c-name mb-20">
                           
                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="serviceTitle" defaultValue={item.serviceTitle} placeholder="Service Title" required />
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="contact-field p-relative c-name mb-20">
                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="serviceDetails" defaultValue={item.serviceDetails} placeholder="Servicet Details" required />
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="contact-field p-relative c-name mb-20">
                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="buttonText" hidden defaultValue={item.buttonText} placeholder="Button Text" required />
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="contact-field p-relative c-name mb-20">
                            <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="buttonLink" hidden defaultValue={item.buttonLink} placeholder="Button Link" required />
                        </div>
                    </div>

                    <div class="slider-btn">
                        <button class="main-btn" data-animation="fadeInRight"  data-delay=".8s"> Update service </button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default EditService;