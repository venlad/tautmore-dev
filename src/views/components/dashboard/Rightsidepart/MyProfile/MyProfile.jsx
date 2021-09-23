import React from 'react';
import { Row } from 'react-bootstrap';
import profile from '../../../../../assets/images/sidebar-profile.png';
import clock from '../../../../../assets/images/clock.png';
import Progressbar from '../Progressbar';
import pencil from '../../../../../assets/images/pencil.png';

export default function MyProfile() {
    return (
        <div className=" myprofile">
            <Row className="profile">
                <div className="col-md-1 profilepic">
                    <img src={profile} className="pro-icon" alt="profile-icon" />
                    <img src={pencil} className="edit" alt="pencil-icon" />
                </div>
                <div className="col-md-4  common-name ">
                    <p className="name"> Susan Richard </p>
                    <p className="taut-id ">
                        Tautmorian ID<span className="id-name">susan.9871245551</span>
                    </p>
                </div>
            </Row>

            <div className="myprofile-subscription">
                <div>
                    <div className="mysubscription-name"> SUBSCRIPTION</div>
                </div>
                <div>
                    <Row>
                        <div className="col-md-4  subscribed">
                            <p>Subscribed for</p>
                            <h5 className="pre-kind">Pre - kindergarten</h5>
                            <p>Subjects</p>
                            <h5>Mathematics & English</h5>
                        </div>

                        <div className="col-md-2 usd">
                            <h5>USD 25.00</h5>
                            <div className="usd-inside">

                                <h5>USD 35.00</h5>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="completed-rectangle">
                                <div className="rect-inside">
                                    <p>Class completed</p>

                                    <Progressbar className="progressBar" peronevalue={25} perone title="" />

                                    <h3><span className="span-one"><img src={clock} alt="clock-icon" /></span>Subscription ends on July 16, 2022</h3>
                                </div>

                            </div>
                        </div>
                    </Row>
                </div>

                <div className="account-details ">
                    <div className="account-details-name">Account details</div>
                    <Row>
                        <div className="col-md-6 details">
                            <p className="tautid">Tautmorian ID (Login)</p>
                            <div className="space">
                                <p className="name">susan.<span className="span-one">9871245551</span></p>
                            </div>
                        </div>

                        <div className="col-md-3 cred">
                            <p>Password</p>
                            <div>

                                <h5>* * * * * * * * * *</h5>
                            </div>
                        </div>

                        <div className="col-md-3 ">
                            <button type="button" className="pass"><span>CHANGE PASSWORD</span></button>
                        </div>
                    </Row>

                    <div />
                    <div className="parent-details">
                        <div className="parent-details-name">PARENT DETAILS</div>
                        <Row>
                            <div className="col-md-6">
                                <div className="parent-details-block">
                                    <div className="parent">
                                        <p>Parent/guardian name</p>
                                        <h5>Jonathan Richards</h5>
                                    </div>
                                    <div className="number">
                                        <p>Phone number</p>
                                        <h5>+1 - 8973-213-2129</h5>
                                    </div>
                                    <div className="state">
                                        <p>State</p>
                                        <h5>Colorado</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 email-right">
                                <div className="email">
                                    <p>Email ID</p>
                                    <h5>jonathan@gmail.com</h5>
                                </div>
                                <div className="country">
                                    <p>Country</p>
                                    <h5>United States of America</h5>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>

            </div>

        </div>
    );
}
