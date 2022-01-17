import React, { useState } from 'react';
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

    const [showTimer, setShowTimer] = useState(false);

    const handleTimer = () => {
        setShowTimer(!showTimer);
    };

    // Timer Stuff

    // let timeLeft = 30;
    // const elem = document.getElementById('some_div');
    // function doSomething() {
    //     alert('Hi');
    // }

    // const timerId = setInterval(countdown, 1000);

    // const countdown = () =>  {
    //     if (timeLeft === -1) {
    //         clearTimeout(timerId);
    //         doSomething();
    //     } else {
    //         elem.innerHTML = `${timeLeft} seconds remaining`;
    //         timeLeft -= 1;
    //     }
    // };

    // const showCount = () => {
    //     let count = 30;
    //     if (count === 30) {
    //         return count--;
    //     }
    //     return count--;
    // };

    //

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
                <button type="submit" onClick={handleTimer}> <span>{showTimer ? '30 sec' : resendotp}</span> </button>

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
