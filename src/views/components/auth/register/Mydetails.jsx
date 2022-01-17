import React from 'react';
import  {
    string, func, object, number,
} from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import csc from 'country-state-city';
import PhoneInput from 'react-phone-input-2';
import './phoneStyle.css';

// import ReactFlagsSelect from 'react-flags-select';

// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Mydetailsinput from './Mydetailsinput';
import Mydetailotpinput from './Mydetailotpinput';
import { sendOtpAction, verifyOtpAction } from '../../../../stores/Auth/AuthAction';
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

}) => {
    const countries = csc.getAllCountries();
    // console.log(phoneNumVal, 'PHONE NUMBER', phoneNumVal.length);

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

    // console.log(stateVal);

    // const [value1, setValue1] = useState('');
    // console.log(value1, 'PHONE NUMBER');

    // // const phoneValChange = ()
    // const [selected, setSelected] = useState('');
    // console.log(selected);

    // console.log(countryVal);

    // const [selectCountry, setSelectCountry] = useState('');
    // console.log(selectCountry);
    // const [selectRegion, setSelectRegion] = useState('');
    // console.log(selectRegion);

    return (
        <div>

            {/* <div>
                <CountryDropdown
                    value={selectCountry}
                    onChange={(val) => setSelectCountry(val)}
                />
                <RegionDropdown
                    country={selectCountry}
                    value={selectRegion}
                    onChange={(val) => setSelectRegion(val)}
                />
            </div> */}
            {/* <PhoneInput
                onChange={(value) => setValue1(value)}
                countrySelectProps={{ unicodeFlags: true  }}

            /> */}

            <div className="mydetails-main">
                {renderHeader(userType)}

                <div className="row">
                    <div className="col-md-6 course-detail-select" style={{ display: ((userType === 'Teacher') ? 'block' : 'none')  }}>
                        <div className="label-div">Country*</div>
                        {/* <div className="flag-select">
                            <ReactFlagsSelect
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                                placeholder="Select..."
                                id="country"
                                value={countryVal}
                                name="country"
                                label="country"
                                onChange={(value) => {
                                    setCountryVal(value);
                                }}
                                options={updatedCountries}
                            />
                        </div> */}

                        {/* <CountryDropdown
                            value={selectCountry}
                            onChange={(val) => setSelectCountry(val)}
                        /> */}
                        <Select
                            id="country"
                            name="country"
                            label="country"
                            options={updatedCountries}
                            value={countryVal}
                            onChange={(value) => {
                                setCountryVal(value);
                            }}
                            styles={dropdownSingleValueStyles}

                        />
                        {validation.country && <span className="error-msg">Country is required.</span>}
                    </div>
                    <div className="col-md-6 course-detail-select" style={{ display: ((userType === 'Teacher') ? 'block' : 'none')  }}>
                        <div className="label-div">State*</div>

                        {/* <RegionDropdown
                            country={selectCountry}
                            value={selectRegion}
                            onChange={(val) => setSelectRegion(val)}
                        /> */}

                        <Select
                            id="state"
                            name="state"
                            options={updatedStates(countryVal ? countryVal.value : null)}
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
    setOtpVal: func.isRequired,
    otp: string.isRequired,
    sendOtp: func.isRequired,
    verifyOtp: func.isRequired,
    userType: string.isRequired,
    countryVal: object.isRequired,
    setCountryVal: string.isRequired,
    stateVal: string.isRequired,
    setStateVal: func.isRequired,
};

const mapStateToProps = (state) => ({
    otp: state.Auth.otp,
});
const mapDispatchToProps = (dispatch) => ({
    sendOtp: (data) => dispatch(sendOtpAction(data)),
    verifyOtp: (data) => dispatch(verifyOtpAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mydetails);
