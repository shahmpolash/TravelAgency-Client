import React, { useEffect, useState } from 'react';
import './Pricing.css';
import { Link } from 'react-router-dom';

const PricingSection = () => {

    const [pricing, setPricing] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/pricings`)
            .then((res) => res.json())
            .then((info) => setPricing(info));
    }, []);


    return (
        <>
            <div class="demo">
                <div class="container mt-5 mb-5 ">
                    <div class="row">
                        {
                            pricing.map(b => b.packageName === 'Basic' &&
                                <div class="col-md-4 col-sm-6">
                                    <div class="pricingTable">
                                        <div class="pricingTable-header">
                                            <div class="pricing-icon"><i class="fa fa-lightbulb"></i></div>
                                            <h3 class="title">{b.packageName}</h3>

                                        </div>
                                        <ul class="pricing-content">
                                            <li><i className="far fa-check" /> {b.packagePointOne}</li>
                                            <li><i className="far fa-check" /> {b.packagePointTwo}</li>
                                            <li><i className="far fa-check" /> {b.packagePointThree}</li>
                                            <li><i className="far fa-check" /> {b.packagePointFour}</li>
                                            <li><i className="far fa-check" /> {b.packagePointFive}</li>
                                            <li><i className="far fa-check" /> {b.packagePointSix}</li>
                                            <li><i className="far fa-check" /> {b.packagePointSeven}</li>
                                            <li><i className="far fa-check" /> {b.packagePointEight}</li>
                                        </ul>
                                        <div class="price-value">
                                            ${b.packagePrice}
                                        </div>
                                        <div class="pricingTable-signup">
                                            <Link to={`/order-now/${b._id}`} >{b.packageButtonText}</Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                        {
                            pricing.map(s => s.packageName === 'Standard' &&
                                <div class="col-md-4 col-sm-6">
                                    <div class="pricingTable orange">
                                        <div class="pricingTable-header">
                                            <div class="pricing-icon"><i class="fa fa-crown"></i></div>
                                            <h3 class="title">{s.packageName}</h3>
                                        </div>
                                        <ul class="pricing-content">
                                            <li><i className="far fa-check" /> {s.packagePointOne}</li>
                                            <li><i className="far fa-check" /> {s.packagePointTwo}</li>
                                            <li><i className="far fa-check" /> {s.packagePointThree}</li>
                                            <li><i className="far fa-check" /> {s.packagePointFour}</li>
                                            <li><i className="far fa-check" /> {s.packagePointFive}</li>
                                            <li><i className="far fa-check" /> {s.packagePointSix}</li>
                                            <li><i className="far fa-check" /> {s.packagePointSeven}</li>
                                            <li><i className="far fa-check" /> {s.packagePointEight}</li>

                                        </ul>
                                        <div class="price-value">
                                            ${s.packagePrice}
                                        </div>
                                        <div class="pricingTable-signup">
                                            <Link to={`/order-now/${s._id}`}>{s.packageButtonText}</Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                        {
                            pricing.map(p => p.packageName === 'Premium' &&
                                <div class="col-md-4 col-sm-6">
                                    <div class="pricingTable">
                                        <div class="pricingTable-header">
                                            <div class="pricing-icon"><i class="fa fa-rocket"></i></div>
                                            <h3 class="title">{p.packageName}</h3>
                                        </div>
                                        <ul class="pricing-content">
                                            <li><i className="far fa-check" /> {p.packagePointOne}</li>
                                            <li><i className="far fa-check" /> {p.packagePointTwo}</li>
                                            <li><i className="far fa-check" /> {p.packagePointThree}</li>
                                            <li><i className="far fa-check" /> {p.packagePointFour}</li>
                                            <li><i className="far fa-check" /> {p.packagePointFive}</li>
                                            <li><i className="far fa-check" /> {p.packagePointSix}</li>
                                            <li><i className="far fa-check" /> {p.packagePointSeven}</li>
                                            <li><i className="far fa-check" /> {p.packagePointEight}</li>
                                        </ul>
                                        <div class="price-value">
                                            ${p.packagePrice}
                                        </div>
                                        <div class="pricingTable-signup">
                                            <Link to={`/order-now/${p._id}`}>{p.packageButtonText}</Link>
                                        </div>
                                    </div>
                                </div>

                            )}




                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingSection;
