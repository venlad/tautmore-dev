import React from 'react';
import { Row, ProgressBar } from 'react-bootstrap';
import clock from '../../../../../assets/images/clock.png';

const Subscription = () => (
    <div className="myprofile-subscription">
        <h4 className="mysubscription-name"> SUBSCRIPTION</h4>
        <Row>
            <div className="col-md-6 subscription-left">
                <Row>
                    <div className="col-md-6">
                        <p>Subscribed for</p>
                        <h5 className="pre-kind">Pre - kindergarten</h5>
                    </div>
                    <div className="col-md-6 text-right">
                        <h5>USD 25.00</h5>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-6">
                        <p>Subscribed for</p>
                        <h5 className="pre-kind">Pre - kindergarten</h5>
                    </div>

                    <div className="col-md-6 text-right">
                        <h5>USD 25.00</h5>
                    </div>
                </Row>
            </div>
            <div className="col-md-6 subscription-right">
                <div className="completed-rectangle">
                    <div className="rect-inside">
                        <Row>
                            <div className="col-md-6 col-sm-6">
                                <p>Class completed</p>
                            </div>
                            <div className="col-md-6 col-sm-6 text-right">
                                <p>12/89</p>
                            </div>
                        </Row>

                        <ProgressBar now={12} max={89}  />
                        <h3><span className="span-one"><img src={clock} alt="clock-icon" /></span>Subscription ends on July 16, 2022</h3>
                    </div>

                </div>
            </div>

        </Row>
    </div>
);

export default Subscription;
