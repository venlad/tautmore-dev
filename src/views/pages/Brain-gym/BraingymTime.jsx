import React from 'react';
import clock from '../../../assets/images/stopwatch.png';

const BraingymTime = () => (
    <div className="row brain-margin-row">
        <div className="col-md-12 timer-top">
            <div className="row">
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={clock} alt="clock" />
                        </div>
                        <div className="col-md-8">
                            <p>Time elapsed</p>
                            <h5>10 : 00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={clock} alt="clock" />
                        </div>
                        <div className="col-md-8">
                            <p>Chest 1 / 5</p>
                            <h5 className="coin">10 coins <span>x1</span></h5>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-2 timer-top-last">
                </div> */}
            </div>
        </div>
    </div>
);

export default BraingymTime;
