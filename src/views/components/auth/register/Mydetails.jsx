import React from 'react';
import  {
    string, func, object, number, shape,
} from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import csc from 'country-state-city';
import Mydetailsinput from './Mydetailsinput';
import Mydetailotpinput from './Mydetailotpinput';
import { sendOtpAction, verifyOtpAction } from '../../../../stores/Auth/AuthAction';

const Mydetails = ({
    setFullnameVal,
    fullnameVal,
    countryVal,
    validation,
    setEmailVal,
    setCountryVal,
    stateVal,
    setStateVal,
    emailVal,
    phoneNumVal,
    setPhoneNumVal,
    sendOtp,
    verifyOtp,
    otp,
    otpVal,
    setOtpVal,
    userType,
    stuFullname,
    setStuUsername,
}) => {
    const countries = csc.getAllCountries();
    const updatedCountries = countries.map((country) => ({
        label: country.name,
        value: country.id,
        ...country,
    }));
    const updatedStates = (countryId) => csc
        .getStatesOfCountry(countryId)
        .map((state) => ({ label: state.name, value: state.id, ...state }));

    const otpClick = () => {
        const data = {
            parentName: fullnameVal,
            email: emailVal,
            phone: phoneNumVal,
        };
        sendOtp(data);
    };

    const phoneChange = (e) => {
        setPhoneNumVal(e.target.value);
        if (stuFullname !== '' && e.target.value !== '') {
            setStuUsername(`${stuFullname.split(' ')[0]}.${e.target.value}`);
        } else {
            setStuUsername('');
        }
    };

    const renderHeader = (type) => {
        switch (type) {
            case 'Student':
                return (
                    <h3 className="text-center">My details</h3>
                );
            case 'Teacher':
                return (
                    <h3 className="text-center"> PERSONAL DETAILS</h3>
                );
            default:
                return (
                    <h3 className="text-center">No User Type|Error</h3>
                );
        }
    };
    return (
        <div>
            <div className="mydetails-main">
                {renderHeader(userType)}

                <div className="row">
                    <div className="col-md-6 course-detail-select" style={{ display: ((userType === 'Teacher') ? 'block' : 'none')  }}>
                        <div className="label-div">Country*</div>
                        <Select
                            id="country"
                            name="country"
                            label="country"
                            options={updatedCountries}
                            value={countryVal}
                            onChange={(value) => {
                                setCountryVal(value);
                            }}
                        />
                        {validation.country && <span className="error-msg">country is required.</span>}
                    </div>
                    <div className="col-md-6 course-detail-select" style={{ display: ((userType === 'Teacher') ? 'block' : 'none')  }}>
                        <div className="label-div">State*</div>
                        <Select
                            id="state"
                            name="state"
                            options={updatedStates(countryVal ? countryVal.value : null)}
                            value={stateVal}
                            onChange={(value) => {
                                setStateVal(value);
                            }}
                        />
                        {validation.state && <span className="error-msg">state is required.</span>}
                    </div>
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
                                <input type="number" name="phone_number" id="phone" value={phoneNumVal} onChange={(e) => phoneChange(e)} />
                                <button type="button" onClick={otpClick} style={{ display: ((phoneNumVal.length >= 10) ? 'block' : 'none') }}>Send OTP</button>
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
    userType: string.isRequired,
    countryVal: string.isRequired,
    setCountryVal: string.isRequired,
    stateVal: string.isRequired,
    setStateVal: string.isRequired,
    stuFullname: string.isRequired,
    setStuUsername: func.isRequired,
};

const mapStateToProps = (state) => ({
    otp: state.Auth.otp,
});
const mapDispatchToProps = (dispatch) => ({
    sendOtp: (data) => dispatch(sendOtpAction(data)),
    verifyOtp: (data) => dispatch(verifyOtpAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mydetails);
