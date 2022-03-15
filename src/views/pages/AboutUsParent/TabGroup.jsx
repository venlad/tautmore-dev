import React from 'react';
import Image from '../../../assets/images/trophy.png';
import Button from '../home/Button';

const TabGroup = () => (
    <div>
        <div>
            <div className="physical-classroom-main">
                <h4>
                    Keep a tab on your kids growth
                </h4>

                <p className="main-p">
                    TautMore’s AI-powered, real-time in-app analytics dashboard enables you to
                </p>

                <div className="row">
                    <div className="col-md-3">
                        <div
                            className="common-tab-div-1"
                        >
                            <img src={Image} alt="user_image" />
                            <h5>Track the overall growth of your kid</h5>
                            <span className="layer-1" />
                            <span className="layer-2" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div
                            className="common-tab-div-2"
                        >
                            <img src={Image} alt="user_image" />
                            <h5>Track the overall growth of your kid</h5>
                            <span className="layer-1" />
                            <span className="layer-2" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div
                            className="common-tab-div-2"
                        >
                            <img src={Image} alt="user_image" />
                            <h5>Track the overall growth of your kid</h5>
                            <span className="layer-1" />
                            <span className="layer-2" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div
                            className="common-tab-div-1"
                        >
                            <img src={Image} alt="user_image" />
                            <h5>Track the overall growth of your kid</h5>
                            <span className="layer-1" />
                            <span className="layer-2" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Button content="Sick Bro" link="/" />
                </div>
            </div>
        </div>
    </div>
);

export default TabGroup;
