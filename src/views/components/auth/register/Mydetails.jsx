import React from 'react';
import  {
    string, func, object, number, shape,
} from 'prop-types';
import { connect } from 'react-redux';
import Mydetailsinput from './Mydetailsinput';
import Mydetailotpinput from './Mydetailotpinput';
import { sendOtpAction, verifyOtpAction } from '../../../../stores/Auth/AuthAction';

const Mydetails = ({
    setFullnameVal,
    fullnameVal,
    validation,
    setEmailVal,
    emailVal,
    phoneNumVal,
    setPhoneNumVal,
    sendOtp,
    verifyOtp,
    otp,
    otpVal,
    setOtpVal,
}) => {
    const otpClick = () => {
        const data = {
            parentName: fullnameVal,
            email: emailVal,
            phone: phoneNumVal,
        };
        sendOtp(data);
    };
    return (
        <div>
            <div className="mydetails-main">
                <h3 className="text-center">my details</h3>
                <div className="row">
                    <div className="col-md-6 mydetail-input">
                        <Mydetailsinput label="Full name*" type="text" name="full_name" id="full-name" value={fullnameVal} setValue={setFullnameVal} />
                        {validation.fullName && <span className="error-msg">Full name is required.</span>}
                    </div>
                    <div className="col-md-6 mydetail-input">
                        <Mydetailsinput
                            label="Email ID*"
                            type="email"
                            name="email_id"
                            id="email"
                            value={emailVal}
                            setValue={setEmailVal}
                        />
                        {validation.emailId && <span className="error-msg">email is required.</span>}
                    </div>
                    <div className="col-md-6 mydetail-input">
                        <div className="mydetail-input-part">
                            <label htmlFor="detail-label">Phone number*
                                <input type="number" name="phone_number" id="phone" value={phoneNumVal} onChange={(e) => setPhoneNumVal(e.target.value)} />
                                <button type="button" onClick={otpClick}>Send OTP</button>
                            </label>
                        </div>
                        {otp.status === 'success' && <span className="success-msg">Otp sent</span>}
                        {validation.phoneNumber && <span className="error-msg">Phone number is required.</span>}
                    </div>
                    <Mydetailotpinput label="Enter OTP" verifyOtp={verifyOtp} resendotp="Resend OTP" otpVal={otpVal} setOtpVal={setOtpVal} />
                </div>
            </div>
        </div>
    );
};

Mydetails.propTypes = {
    fullnameVal: string.isRequired,
    setFullnameVal: func.isRequired,
    validation: object.isRequired,
    setEmailVal: object.isRequired,
    emailVal: string.isRequired,
    phoneNumVal: number.isRequired,
    setPhoneNumVal: object.isRequired,
    otpVal: string.isRequired,
    setOtpVal: object.isRequired,
    otp: shape({
        status: string.isRequired,
    }).isRequired,
    sendOtp: func.isRequired,
    verifyOtp: func.isRequired,
};

const mapStateToProps = (state) => ({
    otp: state.Auth.otp,
});
const mapDispatchToProps = (dispatch) => ({
    sendOtp: (data) => dispatch(sendOtpAction(data)),
    verifyOtp: (data) => dispatch(verifyOtpAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mydetails);
