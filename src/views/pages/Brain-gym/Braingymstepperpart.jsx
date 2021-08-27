import React from 'react';
import Stepper from './Stepper';
import BraingymTime from './BraingymTime';

const Braingymstepperpart = () => (
    <div className="row stepperpart-top">
        <div className="col-md-7 stepperpart-left">
            <div className="col-md-12">
                <Stepper />
            </div>
        </div>
        <div className="col-md-5 stepperpart-right">
            <div className="col-md-12">
                <BraingymTime />
            </div>
        </div>
    </div>
);

export default Braingymstepperpart;
