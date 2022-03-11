import { func, string } from 'prop-types';
import React from 'react';
import logo from '../../../../../assets/images/Logo.png';
import stopwatch from '../../../../../assets/images/stopwatch.png';

const OlympiadHead = ({
    currenttime,
    setFinishTest,
    setModal,
    modal,
}) => {
    const handlefinishTest = () => {
        setFinishTest('step2');
        setModal(!modal);
    };
    return (
        <div className="row olympiad-head">
            <div className="col-md-3  olympiad-head-left">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-md-9 olympiad-head-right">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h2>Olympiad - Grade 2</h2>
                    </div>
                    <div className="col-md-3 col-sm-12 time">
                        <div className="row">
                            <div className="col-md-3 time-left">
                                <img src={stopwatch} alt="clock" />
                            </div>
                            <div className="col-md-9 time-right">
                                <p>Time elapsed</p>
                                <h5>{  currenttime}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 finish-test">
                        <button type="button" onClick={handlefinishTest}>Finish test</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
OlympiadHead.propTypes = {
    currenttime: string.isRequired,
    setFinishTest: func.isRequired,
    setModal: func.isRequired,
    modal: string.isRequired,

};
export default OlympiadHead;
