import React from 'react';
import stepdata from './mockData/stepperData';
import { number } from 'prop-types';

const Stepper = ({step}) => {
    
    return (
        <div className="row brain-margin-row">
            <div className="col-md-12 stepper-top text-center">
                {stepdata.map((data) => (
                    <div
                        key={data.title}
                        className={`stepper-above ${data.id === step ? 'active' : ''} ${
                            data.id < step ? 'prev-step' : ''
                        }`}
                    >
                        <button type="button">
                            <span className="round" />
                        </button>
                        <span className="name">{data.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

Stepper.propTypes = {
    step: number.isRequired,
};

export default Stepper;
