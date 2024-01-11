import React, { useEffect, useState } from 'react';

const FAQSection = () => {
  const [items, setItems] = useState([]);
  const [faq, setFAQsection] = useState([]);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/faq-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/faq`)
      .then((res) => res.json())
      .then((info) => setFAQsection(info));
  }, []);

  return (
    <>
      {faq.map((f, index) => (
        <section key={index} className="faq-area-v1 pt-120 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* Faq Wrapper */}
                <div className="faq-wrapper faq-wrapper-one mb-50">
                  <div className="section-title mb-60">
                    <span className="span">{f.faqText}</span>
                    <h2>{f.faqHeading}</h2>
                  </div>

                  <div className="accordion" id={`accordion${index}`}>
                    {items.map((e, i) => (
                      <div key={i} className="accordion-item mb-20">
                        <a
                          href={`#collapse${index}${i}`}
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}${i}`}
                          aria-expanded="false"
                        >
                          <span className="toggle" />
                          {e.accodingTitle}
                        </a>
                        <div
                          id={`collapse${index}${i}`}
                          className="accordion-collapse collapse"
                          data-bs-parent={`#accordion${index}`}
                        >
                          <div className="accordion-body">
                            <p>{e.accodingText}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* Faq image */}
                <div className="faq-img mb-50">
                  <img src={f.faqImg} alt="Faq" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default FAQSection;
