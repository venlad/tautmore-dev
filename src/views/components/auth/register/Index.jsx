import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/Logo.png';
import './register.scss';
import  stepdata  from './mockData/Stepperdata';
import Coursedetail from './Coursedetail';
import Mydetails from './Mydetails';
import Createstudentaccount from './Createstudentaccount';
import Success from './Success';
import { chevRight, select } from '../../../../assets/icons/IconList';

const Register = () => {
    const [step, setStep] = useState(1);
    const completeFromStep = () => {
        setStep((cur) => cur + 1);
    };
    const backStep = () => {
        setStep((cur) => cur - 1);
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
                            <h2>
                                You are registering as a <span>Parent</span>
                            </h2>
                        </div>
                    </div>
                </div>
            )}

            {step < 5 && (
                <div className="stepper-top text-center">
                    {stepdata.map((data) => (
                        <div
                            key={data.title}
                            className={`stepper-above ${data.id === step ? 'active' : ''} ${
                                data.id < step ? 'prev-step' : ''
                            }`}
                        >
                            <button type="button">{select}</button>
                            <span>{data.title}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="step-body">
                {step === 1 && <Coursedetail />}
                {step === 2 && <Mydetails />}

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
    );
};

export default Register;
