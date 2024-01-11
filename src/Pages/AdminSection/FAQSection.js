import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
    const [faq, setFAQsection] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/faq`)
            .then((res) => res.json())
            .then((info) => setFAQsection(info));
    }, []);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/faq-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);

    const handleFAQtext = (event) => {
        event.preventDefault();
        const faqText = event.target.faqText.value;
        const faqHeading = event.target.faqHeading.value;
        const faqImg = event.target.faqImg.value;

        const faqSection = {
            faqText,
            faqHeading,
            faqImg,
        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-faq`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(faqSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert(' FAQ is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        const accodingText = event.target.accodingText.value;
        const accodingTitle = event.target.accodingTitle.value;

        const faqitemSection = {
            accodingText,
            accodingTitle,
        };

        const url = `https://travelagency-a887203e1d88.herokuapp.com/add-faq-item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(faqitemSection),
        })
            .then((res) => res.json())
            .then((result) => {
                alert(' FAQ Item is Added');
            });
    };

    return (
        <div className='mt-5'>
            <section id='services' class='services-area pt-120 pb-90 fix'>
                <div class='container'>
                    <div class='row'></div>
                    <div class='row'>
                        <div class='col-lg-8 col-md-12'>
                            <h3> Update Service </h3>
                            {faq.length === 1 && (
                                <>
                                    {faq.map((s) => (
                                        <Link
                                            className='main-btn'
                                            to={`/faqtext-edit/${s._id}`}
                                        >
                                            Update FAQ
                                        </Link>
                                    ))}
                                </>
                            )}
                            {faq.length === 0 && (
                                <form
                                    class='contact-form '
                                    onSubmit={handleFAQtext}
                                >
                                    <div class='row'>
                                        <div class='col-lg-12'>
                                            <div class='contact-field p-relative c-name mb-20'>
                                                <input
                                                    type='text'
                                                    id='firstn'
                                                    name='faqText'
                                                    placeholder='FAQ Text'
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class='col-lg-12'>
                                            <div class='contact-field p-relative c-name mb-20'>
                                                <input
                                                    type='text'
                                                    id='firstn'
                                                    name='faqHeading'
                                                    placeholder='FAQ Heading'
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class='col-lg-12'>
                                            <div class='contact-field p-relative c-name mb-20'>
                                                <input
                                                    type='text'
                                                    id='firstn'
                                                    name='faqImg'
                                                    placeholder='FAQ Image'
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class='slider-btn'>
                                            <button
                                                class='main-btn'
                                                data-animation='fadeInRight'
                                                data-delay='.8s'
                                            >
                                                {' '}
                                                FAQ Services{' '}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}

                            <h3> Add FAQ </h3>

                            <form
                                class='contact-form'
                                onSubmit={handleAddItem}
                            >
                                <div class='row'>
                                    <div class='col-lg-12'>
                                        <div class='contact-field p-relative c-name mb-20'>
                                             <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="accodingTitle" placeholder="Accoding Title" required />

                                        </div>
                                    </div>
                                    <div class='col-lg-12'>
                                        <div class='contact-field p-relative c-name mb-20'>
                                             <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="accodingText" placeholder="Accoding Text" required />
                                        </div>
                                    </div>
                                    <div class='slider-btn'>
                                        <button
                                            class='main-btn'
                                            data-animation='fadeInRight'
                                            data-delay='.8s'
                                        >
                                            {' '}
                                            Accoding Added{' '}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='col-lg-8 col-md-12 mt-5'>
                            <div className='accordion' id={`accordion`}>
                                {items.map((e, index) => (
                                    <div
                                        key={index}
                                        
                                    >
                                        <Link to={`/faq-edit/${e._id}`}
                                            
                                          
                                        >
                                            
                                            <button class="main-btn" data-animation="fadeInRight" data-delay=".8s"> Edit </button>

                                        </Link>

                                        <div
                                            id={`collapse${index}`}
                                            
                                            
                                        >
                                            <div className='accordion-body'>
                                                
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQSection;
