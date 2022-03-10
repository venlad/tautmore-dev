/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const FAQ = () => {
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
                <div className="acc-single">
                    <div className="acc-header">
                        <h4>How TautMore works?</h4>
                        <div className="acc-btn" onClick={() => showFaq(0)}>
                            {show === 0 ? '-' : '+' }
                        </div>
                    </div>
                    {
                        show === 0 && (
                            <div className="faq-content">
                                <p>It is a long established fact that a reader will be distracted by
                                    the readable content of a page when
                                    It is a long established fact that a reader will be
                                    distracted by
                                    the readable content of a page when
                                    It is a long established fact that a reader will be
                                    distracted by
                                    the readable content of a page when
                                </p>
                            </div>
                        )
                    }
                </div>
                <div className="acc-single">
                    <div className="acc-header">
                        <h4>How TautMore works?</h4>
                        <div className="acc-btn" onClick={() => showFaq(1)}>
                            {show === 1 ? '-' : '+' }
                        </div>
                    </div>
                    {
                        show === 1 && (
                            <div className="faq-content">
                                <p>It is a long established fact that a reader will be distracted by
                                    the readable content of a page when
                                    It is a long established fact that a reader will be
                                    distracted by
                                    the readable content of a page when
                                    It is a long established fact that a reader will be
                                    distracted by
                                    the readable content of a page when
                                </p>
                            </div>
                        )
                    }
                </div>
                <div className="acc-single">
                    <div className="acc-header">
                        <h4>How TautMore works?</h4>
                        <div className="acc-btn" onClick={() => showFaq(2)}>
                            {show === 2 ? '-' : '+' }
                        </div>
                    </div>
                    {
                        show === 2 && (
                            <div className="faq-content">
                                <p>It is a long established fact that a reader will be distracted by
                                    the readable content of a page when
                                    It is a long established fact that a reader will be
                                    distracted by
                                    the readable content of a page when
                                    It is a long established fact that a reader will be
                                    distracted by
                                    the readable content of a page when
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FAQ;
