import React from 'react';
import Stepper from './Stepper';
import BraingymTime from './BraingymTime';
import { number } from 'prop-types';

const Braingymstepperpart = ({step}) => (
    <div className="row stepperpart-top">
        <div className="col-md-7 stepperpart-left">
            <div className="col-md-12">
                <Stepper step={step} />
            </div>
        </div>
        <div className="col-md-5 stepperpart-right">
            <div className="col-md-12">
                <BraingymTime />
            </div>
        </div>
    </div>
);

Braingymstepperpart.propTypes = {
    step: number.isRequired,
};

export default Braingymstepperpart;
