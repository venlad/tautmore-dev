import React from 'react';
import { string } from 'prop-types';
import clock from '../../../../../../assets/images/clock.svg';

const Time = ({ totalTime }) => (
    <div className="row stepperpart-top">
        <div className="col-md-7 stepperpart-left" />
        <div className="col-md-5 stepperpart-right">
            <div className="row brain-margin-row">
                <div className="col-md-12 timer-top">
                    <div className="row">
                        <div className="col-md-5 col-12 timer-left">
                            <div className="">
                                <div className="timer-sub-left">
                                    <img src={clock} alt="clock" />
                                </div>
                                <div className="timer-sub-right">
                                    <p>Time elapsed</p>
                                    <h5>
                                        <span>{totalTime}</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-12 timer-right" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Time.propTypes = {
    totalTime: string.isRequired,
};

export default Time;
