import React, { useState, useEffect } from 'react';
import {
    func, bool, object, number,
} from 'prop-types';
import { connect } from 'react-redux';
import {
    unlockBrainGymAction, masterBraingymidAction,
} from '../../../stores/BrainGymOld/BrainGymAction';
import { chevRight } from '../../../assets/icons/IconList';
import close from '../../../assets/images/close.png';
import CompletedRecord from './CompletedRecord';
import chestopen from '../../../assets/images/Chestopen.svg';
import clock from '../../../assets/images/clock.svg';
import note from '../../../assets/images/exam.png';

const BraingymUnlock = ({
    handlePopup,
    showPopup,
    getMasterBrainGym,
    chestData,
    masterBrainGym,
    quesCounter,
}) => {
    const [timeTaken, setTimeTaken] = useState('');
    useEffect(() => {
        const localdata = localStorage.getItem('brain-gym-data');
        const localvalue = JSON.parse(localdata);
        const localtime = localvalue?.timeminutesecond;
        setTimeTaken(`${(`0${Math.floor((localtime / 60000) % 60)}`).slice(-2)
        }:${
            (`0${Math.floor((localtime / 1000) % 60)}`).slice(-2)}`);
    });

    const handleUnlockChest = () => {
        getMasterBrainGym();
        handlePopup(false);
    };

    return (
        <div>
            {quesCounter < 25 ? (
                <div className={`braingym-unlock-main ${showPopup === true && 'active'}`}>
                    <div className="close-top">
                        <button type="button" className="close-btn" onClick={() => handlePopup(false)}><img src={close} alt="close" /></button>
                    </div>
                    <div className="unlock-common">
                        <img src={chestopen} alt="chest_open" />
                        <h2>{`Chest ${chestData?.chestLevel && chestData?.chestLevel} unlocked`}</h2>
                        <p className="coin-p"><span />
                            {chestData?.scoreObtained && chestData?.scoreObtained} coins earned
                        </p>
                        <button type="button" onClick={handleUnlockChest}>Level {chestData?.chestLevel + 1} <span>{chevRight}</span></button>
                    </div>
                </div>
            )
                : (
                    <div className="braingym-unlock-main active">
                        <div className="close-top">
                            <button type="button" className="close-btn" onClick={() => handlePopup()}><img src={close} alt="close" /></button>
                        </div>
                        <div className="unlock-common">
                            <h2>Treasure hunt completed !</h2>
                            <p className="coin-p"><span />{masterBrainGym?.scoreObtained} coins totally earned</p>
                            <div className="unlock-data-part">
                                <div className="unlock-data-part-sub">
                                    <CompletedRecord title="Time taken" desc={timeTaken} image={clock} />
                                </div>
                                <div className="unlock-data-part-sub">
                                    <CompletedRecord title="Correct answers" desc="34 out of 50" image={note} />
                                </div>
                            </div>
                            <div className="row unlock-last-part">
                                <div className="col-md-6 last-part-half">
                                    <a href="view">View answers</a>
                                </div>
                                <div className="col-md-6 last-part-half">
                                    <button type="button">Finish <span>{chevRight}</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

BraingymUnlock.propTypes = {
    chestData: object.isRequired,
    quesCounter: number.isRequired,
    showPopup: bool.isRequired,
    handlePopup: func.isRequired,
    getMasterBrainGym: func.isRequired,
    masterBrainGym: object.isRequired,
};

const mapStateToProps = (state) => ({
    chestData: state.BrainGym.chestData,
    quesCounter: state.BrainGym.queCounter,
    masterBrainGym: state.BrainGym.masterBrainGym,
    showPopup: state.BrainGym.chestUnlockPopup,
});

const mapDispatchToProps = (dispatch) => ({
    getMasterBrainGym: () => dispatch(masterBraingymidAction()),
    handlePopup: (data) => dispatch(unlockBrainGymAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BraingymUnlock);
