import React, { useEffect } from 'react';
import { string, func } from 'prop-types';
import clock from '../../../assets/images/stopwatch.png';

const BraingymTime = ({
    time, setTime, timeOn, Questionbytag,
}) => {
    useEffect(() => {
        let interval = null;

        if (Questionbytag && timeOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeOn, Questionbytag]);

    return (
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
                                    <span>{(`0${Math.floor((time / 60000) % 60)}`).slice(-2)}:</span>
                                    <span>{(`0${Math.floor((time / 1000) % 60)}`).slice(-2)}</span>
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
                                <p>Chest 1 / 5</p>
                                <h5 className="coin">10 coins <span>x1</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

BraingymTime.propTypes = {
    time: string.isRequired,
    setTime: func.isRequired,
    timeOn: string.isRequired,
    Questionbytag: string.isRequired,
};
export default BraingymTime;
