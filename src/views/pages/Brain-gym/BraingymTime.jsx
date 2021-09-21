import React from 'react';
import {
    string, number,
} from 'prop-types';
import clock from '../../../assets/images/stopwatch.png';

const BraingymTime = ({
    totalcoin, step, timeminutesecond,
}) => (
    <div className="row brain-margin-row">
        <div className="col-md-12 timer-top">
            <div className="row">
                <div className="col-md-5 col-12 timer-left">
                    <div className="row">
                        <div className="col-md-4 col-12 col-sm-4 timer-sub-left">
                            <img src={clock} alt="clock" />
                        </div>
                        <div className="col-md-8 col-12 col-sm-8 timer-sub-right">
                            <p>Time elapsed</p>
                            <h5>
                                <span>{timeminutesecond}</span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-12 timer-right">
                    <div className="row">
                        <div className="col-md-4 col-12 col-sm-4 timer-sub-left">
                            <img src={clock} alt="clock" />
                        </div>
                        <div className="col-md-8 col-12 col-sm-8 timer-sub-right">
                            <p>Chest {step + 1} / 5</p>
                            <h5 className="coin">{totalcoin} coins <span>x1</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
);
BraingymTime.propTypes = {

    totalcoin: number.isRequired,
    step: number.isRequired,
    timeminutesecond: string.isRequired,

};
export default BraingymTime;
