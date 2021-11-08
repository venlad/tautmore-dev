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

const Register = ({ registerAction }) => {
    const [step, setStep] = useState(0);
    const [userType, setUserType] = useState('');

    const completeFromStep = () => {
        const data = {
            studentName: 'mithun palangotu',
            userName: 'mithun.9535778823',
            email: 'mithun@codewave.com',
            state: 'Karnataka',
            city: 'Bangalore',
            grade: '6108f79b068b133284e28cc7',
            cocurricularActivity: ['6171359e332220b7e364d559', '617135c3332220b7e364d55a'],
            examType: 'annually',
            subjectsEnrolled: [
                { subject: '6108f7f6068b133284e28cc8', classCount: 70 },
            ],
            onBoardThrough: 'web',
        };
        if (step === 5) {
            registerAction(data);
        }
        setStep((cur) => cur + 1);
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
                    <div className="step-body">
                        {step === 1 && <Mydetails />}
                        {step === 2 && <Coursedetail />}

                        {step === 3 && (
                            <div className="step-1">
                                <h3 className="text-center">Pay fees</h3>
                            </div>
                        )}

                        {step === 4 && <Createstudentaccount />}

                        {step === 5 && <Success />}

                        <div className="text-center step-btn-part">
                            {step > 1 && step < 5 && <button type="button" onClick={backStep}>Back</button>}
                            {step < 6 && (
                                <button type="button" onClick={completeFromStep} className="next-button">
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
