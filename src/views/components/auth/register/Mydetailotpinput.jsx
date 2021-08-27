import React from 'react';
import OtpInput from 'react-otp-input';
import  { string } from 'prop-types';

const Mydetailotpinput = ({ label, resendotp }) => (
    <div className="col-md-6 otp-block">
        <label htmlFor="mydetail-input">{label}</label>
        <OtpInput
        // value={}
        // onChange={}
            numInputs={6}
            separator={<span> </span>}
        />
        <p>
            <span>{resendotp}</span>
        </p>
    </div>
);

Mydetailotpinput.propTypes = {

    label: string.isRequired,
    resendotp: string.isRequired,

};

export default Mydetailotpinput;
