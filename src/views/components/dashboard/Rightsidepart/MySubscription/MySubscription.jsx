import React from 'react';
import MySubscriptionList from './MySubscriptionList';
import { chevRight } from '../../../../../assets/icons/IconList';
import clock from '../../../../../assets/images/clock.png';

export default function MySubscription() {
    return (
        <div className="container mysubscription">
            <div className="row">
                <h4 className="subscription-details">
                    Subscription details
                </h4>
                <div className=" col-7">
                    <div className="subscription-details-left">

                        <div className="subscription-details-for-rectangle">
                            <p className="subscription-for-class">Subscription details for class</p>
                        </div>
                        <div className="parent-class">
                            <div className="class-payment">
                                <div className="subscribed-for"> <p>Subscribed for</p></div>
                                <div className="common-left-subject">
                                    <div className="prekindergarten"><p>Pre -  kindergarten</p></div>
                                    <div>USD 25.00</div>
                                </div>
                            </div>
                            <div className="class-payment">
                                <div className="subject"> Subjects</div>
                                <div className="common-left-subject">
                                    <div className="english-math"><p>English & Mathematics</p></div>
                                    <div>USD 35.00</div>
                                </div>
                            </div>

                            <div className="line" />
                            <div className="amount">
                                <div className="total-amount"><p>Total amount</p></div>
                                <div><p>USD 60.00</p></div>
                            </div>

                        </div>

                        <div className="subscription-details-for-rectangle">
                            <p className="subscription-for-exam">Subscription details for exam</p>
                        </div>
                        <div className="left-olympiad">
                            <div className="half-yearly-olympiad"><h5>Half yearly olympiad</h5></div>
                            <div><p>USD 10.00</p></div>
                        </div>
                        <div className="olympiad">
                            <div className="annual-olympiad"><h5>Annual Olympiad</h5></div>
                            <div><h5>USD 10.00</h5></div>

                        </div>

                        <div className="line" />
                        <div className="amount">
                            <div className="total-amount"><p>Total amount</p></div>
                            <div><p>USD 60.00</p></div>

                        </div>

                        <div className="subscription-details-for-cocurri-rectangle">
                            <p className="subscription-details-for-cocurri">Subscription details for co-curricular</p>
                        </div>

                        <div className="classes">
                            <div className="claasses-month"><h5>5 Classes / month</h5></div>
                            <div className="dollar"><p>USD 15.00</p></div>
                        </div>

                    </div>
                </div>
                <div className="col-5">
                    <div className="grand-total">
                        <div className="grand-total-right">
                            <h4>Grand total</h4>
                        </div>
                        <div className="left-olympiad">
                            <div className="half-yearly-olympiad"><h5 className="classes">Class</h5></div>
                            <div><p>USD 60.00</p></div>
                        </div>

                        <div className="left-olympiad">
                            <div className="half-yearly-olympiad"><h5>Exams</h5></div>
                            <div><p>USD 20.00</p></div>
                        </div>

                        <div className="left-olympiad">
                            <div className="half-yearly-olympiad"><h5>Co-curricular</h5></div>
                            <div><p>USD 15.00</p></div>
                        </div>

                        <div className="line" />
                        <div className="amount">
                            <div className="total-amount"><p>Total amount</p></div>
                            <div><p>USD 95.00</p></div>
                        </div>

                        <div className="renew">
                            <div className="left-days">
                                <h5>10 days left</h5>
                            </div>
                            <div className="subs-end">
                                <h6 className="subscription"><img src={clock} alt="clock-icon" />Subscription ends on 1st Aug, 2022</h6>

                            </div>

                            <div className="renew-button">
                                {/* <h5 className="renew-btn">Renew subscription</h5> */}
                                <button type="button" className="renew-btn">Renew subscription <span>{chevRight}</span></button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="subscription-history">

                <h4 className="subscription-details">Subscription history</h4>
                <span className="subscription-end"><img src={clock} alt="clock-icon" />Current subscription ends on 1st Aug 2022</span>
                <MySubscriptionList />
            </div>

        </div>

    );
}
