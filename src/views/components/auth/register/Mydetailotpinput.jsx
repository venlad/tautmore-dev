import React from 'react';
import OtpInput from 'react-otp-input';
import  { string, object } from 'prop-types';

const Mydetailotpinput = ({
    label, resendotp, setOtpVal, otpVal,
}) => (
    <div className="col-md-6 otp-block">
        <label htmlFor="mydetail-input">{label}</label>
        <OtpInput
            value={otpVal}
            onChange={(otp) => setOtpVal(otp)}
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
    otpVal: string.isRequired,
    setOtpVal: object.isRequired,
};

export default Mydetailotpinput;
