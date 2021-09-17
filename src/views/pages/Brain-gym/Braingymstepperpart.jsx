import React from 'react';
import {
    number, func, string, array,
} from 'prop-types';
import Stepper from './Stepper';
import BraingymTime from './BraingymTime';

const Braingymstepperpart = ({
    step, time, setTime, timeOn, setTimeOn, ques, totalcoin,
}) => (
    <div className="row stepperpart-top">
        <div className="col-md-7 stepperpart-left">
            <div className="col-md-12">
                <Stepper step={step} />
            </div>
        </div>
        <div className="col-md-5 stepperpart-right">
            <div className="col-md-12">
                <BraingymTime
                    time={time}
                    setTime={setTime}
                    timeOn={timeOn}
                    setTimeOn={setTimeOn}
                    ques={ques}
                    step={step}
                    totalcoin={totalcoin}
                />
            </div>
        </div>
    </div>
);

Braingymstepperpart.propTypes = {
    step: number.isRequired,
    time: number.isRequired,
    setTime: func.isRequired,
    timeOn: string.isRequired,
    setTimeOn: func.isRequired,
    ques: array.isRequired,
    totalcoin: number.isRequired,
};

export default Braingymstepperpart;
