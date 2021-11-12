import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Logo from '../../../../assets/images/Logo.png';
import './register.scss';
import  stepdata  from './mockData/Stepperdata';
import Coursedetail from './Coursedetail';
import Mydetails from './Mydetails';
import Createstudentaccount from './Createstudentaccount';
import Success from './Success';
import {
    chevRight, select, student, parents, errowRight,
} from '../../../../assets/icons/IconList';
import { register } from '../../../../stores/Auth/AuthAction';
import RegisterOption from './RegisterOption';
import PayFees from './PayFees';

const Register = ({ registerAction }) => {
    const [step, setStep] = useState(0);
    const [userType, setUserType] = useState('');
    const [coActivity, setCoActivity] = useState();

    const [countryVal, setCountryVal] = useState('');
    const [stateVal, setStateVal] = useState('');
    const [fullnameVal, setFullnameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [phoneNumVal, setPhoneNumVal] = useState('');
    const [gradeVal, setGradeVal] = useState('');
    const [examVal, setExamVal] = useState('');
    const [subjectVal, setSubjectVal] = useState([]);
    const [otpVal, setOtpVal] = useState('');

    const [validation, setValidation] = useState({
        fullName: false,
        emailId: false,
        phoneNumber: false,
        country: false,
        state: false,
        grade: false,
        subjects: false,
    });

    const completeFromStep = () => {
        const data = {
            studentName: fullnameVal,
            userName: 'mithun.9535778823',
            email: emailVal,
            state: stateVal?.label,
            city: countryVal?.label,
            grade: gradeVal,
            cocurricularActivity: coActivity,
            examType: examVal,
            subjectsEnrolled: [
                { subject: '6108f7f6068b133284e28cc8', classCount: 70 },
            ],
            onBoardThrough: 'web',
        };
        if (step === 5) {
            registerAction(data);
        }
        const emailRegex = /\S+@\S+\.\S+/;

        if (step === 1) {
            if (fullnameVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, fullName: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, fullName: false }));
            }

            if (emailRegex.test(emailVal)) {
                setValidation((prevPerson) => ({ ...prevPerson, emailId: false }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, emailId: true }));
            }

            if (phoneNumVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, phoneNumber: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, phoneNumber: false }));
            }

            if (fullnameVal === '' || !emailRegex.test(emailVal) || phoneNumVal === '') {
                setStep(step);
            } else {
                setStep((cur) => cur + 1);
            }
        }

        if (step === 2) {
            if (countryVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, country: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, country: false }));
            }

            if (stateVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, state: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, state: false }));
            }

            if (gradeVal === '') {
                setValidation((prevPerson) => ({ ...prevPerson, grade: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, grade: false }));
            }

            if (subjectVal.length === 0) {
                console.log('yes 0');
                setValidation((prevPerson) => ({ ...prevPerson, subjects: true }));
            } else {
                setValidation((prevPerson) => ({ ...prevPerson, subjects: false }));
            }

            if (countryVal === '' || stateVal === '' || gradeVal === '' || subjectVal.length === 0) {
                setStep(step);
            } else {
                setStep((cur) => cur + 1);
            }
        }
    };

    const backStep = () => {
        setStep((cur) => cur - 1);
    };

    const selectForm = () => {
        if (userType !== '') {
            setStep(1);
        }
    };

    return (
        <div className={`register-main ${step === 5 && 'success'}`}>
            {step < 5 && (
                <div className="register-top">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <Link to="/">
                                <img src={Logo} alt="website_log" />
                            </Link>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            {step > 0 && step < 5 && (
                                <h2>You are registering as a <span>{userType}</span></h2>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {step === 0 && (
                <div className="option-part">
                    <div className="option-part-head">
                        <h3>Sign up!</h3>
                        <p>Join our platform as one of the above</p>
                    </div>
                    <div className="text-center">
                        <RegisterOption icon={student} title="Student" setUserType={setUserType} userType={userType} />
                        <RegisterOption icon={parents} title="Parent" setUserType={setUserType} userType={userType} />
                        <h5 className="already-account">Already have an account? <Link to="/login">Login here</Link></h5>
                        <button type="button" onClick={selectForm}>Next {errowRight}</button>
                    </div>
                </div>
            )}

            {step > 0 && step < 5 && userType !== ''  && (
                <div>
                    <div className="stepper-top text-center">
                        {stepdata.map((data) => (
                            <div
                                key={data.title}
                                className={`stepper-above ${data.id === step ? 'active' : ''} ${
                                    data.id < step ? 'prev-step' : ''
                                }`}
                            >
                                <button type="button">{select}</button>
                                <span> {data.title}</span>
                            </div>
                        ))}
                    </div>

                </div>
            )}

            {step > 0 && step < 6 && userType !== ''  && (
                <div className="step-body">

                    {step === 1 && (
                        <Mydetails
                            setFullnameVal={setFullnameVal}
                            fullnameVal={fullnameVal}
                            validation={validation}
                            setEmailVal={setEmailVal}
                            emailVal={emailVal}
                            phoneNumVal={phoneNumVal}
                            setPhoneNumVal={setPhoneNumVal}
                            setOtpVal={setOtpVal}
                            otpVal={otpVal}
                        />
                    )}
                    {step === 2 && (
                        <Coursedetail
                            setCoActivity={setCoActivity}
                            countryVal={countryVal}
                            setCountryVal={setCountryVal}
                            stateVal={stateVal}
                            setStateVal={setStateVal}
                            setGradeVal={setGradeVal}
                            setExamVal={setExamVal}
                            validation={validation}
                            subjectVal={subjectVal}
                            setSubjectVal={setSubjectVal}
                        />
                    )}

                    {step === 3 && (
                        <PayFees />
                    )}

                    {step === 4 && <Createstudentaccount />}

                    {step === 5 && <Success />}

                    <div className="text-center step-btn-part">
                        {step > 1 && step < 5 && <button type="button" onClick={backStep}>Back</button>}
                        {step < 6 && (
                            <button type="button" className="next-button" onClick={completeFromStep}>
                                {step === 1 && 'Next'}
                                {step === 2 && 'Proceed to payment'}
                                {step === 3 && 'Next'}
                                {step === 4 && 'Submit'}
                                {step === 5 && 'Login to account'}
                                <span>{chevRight}</span>
                            </button>
                        )}
                    </div>

                </div>
            )}

        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    registerAction: (data) => dispatch(register(data)),
});

Register.propTypes = {
    registerAction: func.isRequired,
};

export default connect(null, mapDispatchToProps)(Register);
