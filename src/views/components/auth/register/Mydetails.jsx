import React, { useState, useEffect } from 'react';
import  {
    string, func, object, number, array,
} from 'prop-types';
// import ReactFlagsSelect from 'react-flags-select';
import { connect } from 'react-redux';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import Dropdown from './customDropdown/cutomDopdown';
import './phoneStyle.css';
import Mydetailsinput from './Mydetailsinput';
import Mydetailotpinput from './Mydetailotpinput';
import {
    sendOtpAction, verifyOtpAction, getAllCountries, getAllStates,
} from '../../../../stores/Auth/AuthAction';
import { dropdownSingleValueStyles } from './customCssDef';

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
    countries,
    statesList,
    getAllStatesAction,
    getAllCountriesAction,

}) => {
    const [countryList, setCountryList] = useState([{ value: 1, name: '', flag: '' }]);
    useEffect(() => {
        if (!countries?.data) {
            getAllCountriesAction();
        }
        if (countries?.data?.length > 0) {
            const cdata = countries?.data.map((data) => ({
                id: data._id,
                name: data.country_label,
                label: data.country_label,
                code: data.country_code,
                flag: data.flag,
            }));
            setCountryList(cdata);
        }
    }, [countries, getAllCountries]);

    console.log(countryVal, 'Country Val');

    console.log(countries, 'redux countries');
    console.log(countryList, 'countryList');

    const [states, setStates] = useState([{ value: 1, label: '' }]);

    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (statesList?.data?.length > 0) {
            const cdata = statesList?.data.map((data) => (
                {
                    value: data.state_label,
                    label: data.state_label,
                    state_code: data.state_code,
                }));
            setStates(cdata);
        }
    }, [statesList]);

    const [showResend, setShowResend] = useState(false);

    const otpClick = () => {
        setShowResend(true);
        const data = {
            parentName: fullnameVal,
            email: emailVal,
            phone: phoneNumVal,
        };
        sendOtp(data);
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

    const onCountrySelect = (code) => {
        setStates([{ label: 'Loading....', value: 'loading', state_code: '' }]);
        const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
        const countryName = regionNames.of(`${code}`);
        if (countryName) {
            setCountryVal(countryName);
        }
        setSelected(code);
        getAllStatesAction(code);
        setStateVal('');
    };

    return (
        <div>

            <div className="mydetails-main">
                {renderHeader(userType)}

                <div className="row">
                    <div className="col-md-6 course-detail-select" style={{ display: ((userType === 'Teacher') ? 'block' : 'none')  }}>
                        <div className="label-div">Country*</div>

                        <div className="custom-dropdown">
                            <Dropdown
                                options={countryList}
                                prompt="Select countries"
                                onChange={(val) => setCountryVal(val)}
                                value={countryVal}
                                id="id"
                                name="name"
                                label="name"
                                selectedFlag={countryVal?.flag ? countryVal?.flag : ''}
                            />

                        </div>

                        {/* <ReactFlagsSelect
                            selectedSize={20}
                            selected={selected}
                            onSelect={(code) => onCountrySelect(code)}
                            placeholder="Select"
                            className="menu-flags"
                            searchable
                            selectButtonClassName="select-button"
                        /> */}
                        {/* <Select
                            id="country"
                            name="country"
                            label="country"
                            options={countries2}
                            value={countryVal}
                            onChange={(value) => {
                                setCountryVal(value);
                            }}
                            styles={dropdownSingleValueStyles}

                        /> */}
                        {validation.country && <span className="error-msg">Country is required.</span>}
                    </div>
                    <div className="col-md-6 course-detail-select" style={{ display: ((userType === 'Teacher') ? 'block' : 'none')  }}>
                        <div className="label-div">State*</div>

                        <Select
                            id="state"
                            name="state"
                            options={states}
                            // options={statesMapped}
                            value={stateVal}
                            onChange={(value) => {
                                setStateVal(value);
                            }}
                            styles={dropdownSingleValueStyles}
                        />
                        {validation.state && <span className="error-msg">State is required.</span>}
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
                        {validation.emailId && <span className="error-msg">Email is required.</span>}
                    </div>

                    <div className="col-md-6 mydetail-input">
                        <div className="mydetail-input-part">
                            <label htmlFor="detail-label">Phone number*
                                {/* <input
                                    type="number"
                                    name="phone_number"
                                    id="phone"
                                    value={phoneNumVal}
                                    onChange={(e) => setPhoneNumVal(e.target.value)}
                                /> */}

                                <div className="phone-input-custom">
                                    <PhoneInput
                                        specialLabel=""
                                        country="us"
                                        inputStyle={{
                                            fontSize: 20,
                                            buttonStyle: {
                                                display: 'none',
                                            },
                                        }}
                                        onChange={(e) => setPhoneNumVal(e)}
                                    />

                                </div>

                                <button type="button" onClick={otpClick} style={{ display: ((phoneNumVal.length >= 10) ? 'block' : 'none') }}>Send OTP</button>

                            </label>
                        </div>
                        {otp.status === 'success' && <span className="success-msg">Otp sent</span>}
                        {validation.phoneNumber && <span className="error-msg">Phone number is required.</span>}
                    </div>

                    <Mydetailotpinput label="Enter OTP" verifyOtp={verifyOtp} showResendOtp={showResend} resendotp="Resend OTP" otpVal={otpVal} setOtpVal={setOtpVal} />
                </div>
            </div>
        </div>
    );
};

Mydetails.propTypes = {
    fullnameVal: string.isRequired,
    setFullnameVal: func.isRequired,
    countryVal: string.isRequired,
    validation: object.isRequired,
    setEmailVal: object.isRequired,
    emailVal: string.isRequired,
    phoneNumVal: number.isRequired,
    setPhoneNumVal: object.isRequired,
    otpVal: string.isRequired,
    setOtpVal: func.isRequired,
    otp: string.isRequired,
    sendOtp: func.isRequired,
    verifyOtp: func.isRequired,
    userType: string.isRequired,
    setCountryVal: string.isRequired,
    stateVal: string.isRequired,
    setStateVal: func.isRequired,
    statesList: array.isRequired,
    getAllStatesAction: func.isRequired,
    countries: array.isRequired,
    getAllCountriesAction: func.isRequired,
};

const mapStateToProps = (state) => ({
    otp: state.Auth.otp,
    countries: state.Auth.countryList,
    statesList: state.Auth.statesList,
});
const mapDispatchToProps = (dispatch) => ({
    sendOtp: (data) => dispatch(sendOtpAction(data)),
    verifyOtp: (data) => dispatch(verifyOtpAction(data)),
    getAllCountriesAction: () => dispatch(getAllCountries()),
    getAllStatesAction: (data) => dispatch(getAllStates(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mydetails);
