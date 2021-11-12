import React from 'react';
import { connect } from 'react-redux';
import OtpInput from 'react-otp-input';
import  { string, object, func } from 'prop-types';
import { verifyOtpAction } from '../../../../stores/Auth/AuthAction';

const Mydetailotpinput = ({
    label, resendotp, setOtpVal, otpVal, verifyOtp,
}) => {
    const handeInput = (data) => {
        console.log(data);
        const str = data.toString();
        if (str.length === 6) {
            const reqData = {
                phone: '7015497010',
                otp: data,
            };
            verifyOtp(reqData);
        }
        setOtpVal(data);
    };
    return (
        <div className="col-md-6 otp-block">
            <label htmlFor="mydetail-input">{label}</label>
            <OtpInput
                value={otpVal}
                onChange={(otp) => handeInput(otp)}
                numInputs={6}
                separator={<span> </span>}
            />
            <p>
                <span>{resendotp}</span>
            </p>
        </div>
    );
};

Mydetailotpinput.propTypes = {
    label: string.isRequired,
    resendotp: string.isRequired,
    otpVal: string.isRequired,
    setOtpVal: object.isRequired,
    verifyOtp: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    verifyOtp: (data) => dispatch(verifyOtpAction(data)),
});

export default connect(null, mapDispatchToProps)(Mydetailotpinput);
