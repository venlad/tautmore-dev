import React, { useState } from 'react';
import { connect } from 'react-redux';
import OtpInput from 'react-otp-input';
import  {
    string, object, func, bool,
} from 'prop-types';
import Countdown from 'react-countdown';
import { verifyOtpAction } from '../../../../stores/Auth/AuthAction';

const Mydetailotpinput = ({
    label, resendotp, setOtpVal, otpVal, verifyOtp, showResendOtp,
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

    const renderer = ({  seconds, completed }) => {
        if (completed) {
            // Render a completed state
            setShowTimer(false);
        }
        // Render a countdown
        return <span>{seconds}</span>;
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

                {showResendOtp && (
                    <button type="submit" onClick={handleTimer}>{showTimer ? (
                        <Countdown
                            renderer={renderer}
                            date={Date.now() + 30000}
                        />
                    ) : resendotp}

                    </button>
                )}

            </p>
        </div>
    );
};

Mydetailotpinput.propTypes = {
    label: string.isRequired,
    resendotp: string.isRequired,
    showResendOtp: bool.isRequired,
    otpVal: string.isRequired,
    setOtpVal: object.isRequired,
    verifyOtp: func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    verifyOtp: (data) => dispatch(verifyOtpAction(data)),
});

export default connect(null, mapDispatchToProps)(Mydetailotpinput);
