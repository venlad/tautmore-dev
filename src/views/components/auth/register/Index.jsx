import React, { useState } from "react";
import Logo from "../../../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import "./register.scss";
import { stepdata } from "./mockData/Stepperdata";
import Coursedetails from "./Coursedetails";
import { chevRight } from "../../../../assets/icons/IconList";
import { select } from "../../../../assets/icons/IconList";

const Register = () => {
  const [step, setStep] = useState(1);
  const completeFromStep = () => {
    setStep((cur) => cur + 1);
  };
  const backStep = () => {
    setStep((cur) => cur - 1);
  };
  return (
    <div className="register-main">
      <div className="register-top">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img src={Logo} alt="website_log" />
            </Link>
          </div>
          <div className="col-md-8">
            <h2>
              You are registering as a <span>Parent</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="stepper-top text-center">
        {stepdata.map((data, ind) => {
          return (
            <div
              key={ind}
              className={`stepper-above ${data.id === step && "active"}`}
            >
              <button>{select}</button>
              <span>{data.title}</span>
            </div>
          );
        })}
      </div>

      {step === 1 && <Coursedetails />}
      {step === 2 && (
        <div className="step-1">
          <h3>Second part</h3>
          <input type="text" />
        </div>
      )}

      {step === 3 && (
        <div className="step-1">
          <h3>Third part</h3>
          <input type="text" />
        </div>
      )}

      {step === 4 && (
        <div className="step-1">
          <h3>Fourth part</h3>
          <input type="text" />
        </div>
      )}
      <div className="text-center">
        {step > 1 && <button onClick={backStep}>Back</button>}
        {step < 4 && (
          <button onClick={completeFromStep} className="next-button">
            Next <span>{chevRight}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
