import React from 'react';
import Mydetailsinput from './Mydetailsinput';
import Mydetailotpinput from './Mydetailotpinput';
import  payment  from './mockData/Mydetailsdata';

const Mydetails = () => (
    <div>
        <div className="mydetails-main">
            <h3 className="text-center">my details</h3>
            <div className="row">
                <Mydetailsinput label="Full name*" type="text" />
                <Mydetailsinput label="Email ID*" type="email" />
                <Mydetailsinput
                    label="Phone number*"
                    type="number"
                    btncontent="Send OTP"
                />
                <Mydetailotpinput label="Enter OTP" resendotp="Resend OTP" />
            </div>
            <div className="row">
                <div className="col-md-2" />
                <div className="col-md-8">
                    {payment.map((pay) => (
                        <div className="payment-main" key={pay.name}>
                            <h3 className="text-center">{pay.name}</h3>

                            {pay.data.map((data) => (
                                <div className="row payment-data" key={data.title}>
                                    <div className="col-md-8 col-sm-8 col-12">
                                        <label htmlFor="payment-label">{data.title}</label>
                                        <h4>{data.type}</h4>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-12">
                                        <p>{data.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="col-md-2" />
            </div>

            <div className="row total-data">
                <div className="col-md-8 col-sm-8 col-12">
                    <h4>Grand total</h4>
                </div>
                <div className="col-md-4 col-sm-4 col-12">
                    <h3>USD 111.00</h3>
                </div>
            </div>
        </div>
    </div>
);

export default Mydetails;
