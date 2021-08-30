import React from 'react';
import logo from '../../../assets/images/Logo.png';
import stopwatch from '../../../assets/images/stopwatch.png';

const OlympiadHead = () => {
    return (
        <div className="row olympiad-head">
            <div className="col-md-3">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-md-5">
                <h2>Olympiad - Grade 2</h2>
            </div>
            <div className="col-md-2 time">
                <div className="row">
                    <div className="col-md-4">
                        <img src={stopwatch} alt="clock" />
                    </div>
                    <div className="col-md-8">
                        <p>Time elapsed</p>
                        <h5>10 : 00</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <button type="button">Finish test</button>
            </div>
        </div>
    )
}

export default OlympiadHead
