/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import { array } from 'prop-types';
import React, { useState } from 'react';

const FAQ = ({ faq }) => {
    const [show, setShow] = useState(null);

    const showFaq = (index) => {
        if (index !== show) {
            setShow(index);
        } else {
            setShow(null);
        }
    };

    return (
        <div className="faq-main">
            <h2>FAQ's</h2>
            <div className="acc-wrap">
                {
                    faq?.map((item) => (
                        <div className="acc-single">
                            <div className="acc-header">
                                <h4>{item?.heading}</h4>
                                <div className="acc-btn" onClick={() => showFaq(item?.id)}>
                                    {show === item?.id ? '-' : '+' }
                                </div>
                            </div>
                            {
                                show === item?.id && (
                                    <div className="faq-content">
                                        <p>{item?.description}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }

            </div>
        </div>
    );
};
FAQ.propTypes = {
    faq: array,
};

FAQ.defaultProps = {
    faq: [],
};
export default FAQ;
