import React, { useEffect, useState } from 'react';

const About = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/about`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, []);


    return (
        <div>
            {
                about.map(a => <section className="about-area-v1 pt-120 pb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                {/* About Image */}
                                <div className="about-img-box mb-50">
                                    <div className="experience-box wow fadeInUp">
                                        <h2>{a.AboutNumber}<span className="sign">+</span><span className="text">{a.AboutNumberText}</span></h2>
                                    </div>
                                    <div className="about-img-one wow fadeInDown">
                                        <img src={a.AboutImageOne} alt="About Image" />
                                    </div>
                                    <div className="about-img-two wow fadeInUp">
                                        <img src={a.AboutImageTwo} alt="About Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {/* About Content Box */}
                                <div className="about-content-box mb-50">
                                    <div className="section-title mb-35 wow fadeInDown">
                                        <span className="span">{a.AboutSubHeading}</span>
                                        <h2>{a.AboutHeading}</h2>
                                    </div>
                                    <p>{a.AboutDetails}</p>
                                    <div className="box d-flex wow fadeInUp">
                                        <div className="thumb">
                                            <img src={a.AboutSmallImage} alt="About Image" />
                                        </div>
                                        <div className="content">
                                            <h4>{a.AboutSmallHeading}</h4>
                                            <p>{a.AboutDetailsText}</p>
                                           
                                        </div>
                                    </div>
                                    <ul className="list wow fadeInDown">
                                        <li className="check">{a.AboutPointOne}</li>
                                        <li className="check">{a.AboutPointTwo}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )

            }




        </div>
    );
};

export default About;