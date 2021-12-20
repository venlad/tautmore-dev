import React from 'react';
// import RightAnswerWidgets from './RightAnswerWidgets';
import { chevRight } from '../../../assets/icons/IconList';
import Logo from '../../../assets/images/Logo.png';

const SubscriberScreenOne = () => (
    <div className="conatiner subscriberscreen-one">
        <div className="row subscriberscreen-row-main">
            <div className="col-12 col-md-7 subscriberscreen-left">
                <div className="right-answer-container">
                    <div className="right-answer-modal-bg" />
                    <div className="right-answer-modal">
                        <div className="success-img" />
                        <h1>Great achiever !</h1>
                        <div className="success-bonus">
                            <p>
                                Total score<span>:200</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-5 subscriberscreen-right">
                <div className="sub-screen-right">
                    <div className="sub-screen-right-img">
                        <img src={Logo} alt="website_log" />
                    </div>
                    <div className="sub-screen-right-heading">
                        Please subscribe <br /> to access all classroom content
                    </div>
                    <div className="sub-screen-right-headtwo">
                        You have exhausted free practice test
                    </div>
                    <button type="button" className="button-common">
                        Subscribe Me
                        <span>{chevRight}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default SubscriberScreenOne;
