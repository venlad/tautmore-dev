import React from 'react';
import stopwatch from '../../../../../assets/images/stopwatch.png';
import { chevRight } from '../../../../../assets/icons/IconList';

const CongratsPopup = () => (
    <div className="congrats-popup-main">
        <div className="right-answer-container">
            <div className="right-answer-modal-bg" />
            <div className="right-answer-modal">
                <div className="congrats-detail">
                    <h2>Congrats !</h2>
                    <h4>You have scored <span>270</span> points in your custom test
                        Average time/question: 30secs
                    </h4>
                    <div className="congrats-detail-sub">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="congrats-detail-sub-part">
                                    <img src={stopwatch} alt="stopwatch" />
                                    <div className="congrats-detail-sub-part-right">
                                        <p>Time taken (min)</p>
                                        <h5>10 : 00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="congrats-detail-sub-part">
                                    <img src={stopwatch} alt="stopwatch" />
                                    <div className="congrats-detail-sub-part-right">
                                        <p>Accuracy</p>
                                        <h5>90%</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="congrats-detail-sub-part">
                                    <img src={stopwatch} alt="stopwatch" />
                                    <div className="congrats-detail-sub-part-right">
                                        <p>Right answers</p>
                                        <h5>27 out of 30</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="button-common">
                        View port
                        <span>{chevRight}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default CongratsPopup;
