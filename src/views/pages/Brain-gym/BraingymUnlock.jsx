import React, { useState } from 'react';
import {
    func, bool,
} from 'prop-types';
import { connect } from 'react-redux';
import {
    unlockBrainGymAction,
} from '../../../stores/BrainGym/BrainGymAction';
import { chevRight } from '../../../assets/icons/IconList';
import close from '../../../assets/images/close.png';
import CompletedRecord from './CompletedRecord';
import chestopen from '../../../assets/images/Chestopen.svg';
import clock from '../../../assets/images/clock.svg';
import note from '../../../assets/images/exam.png';

const BraingymUnlock = ({ handlePopup, showPopup  }) => {
    const [isConfirm] = useState(true);
    console.log(isConfirm, showPopup, 'pop');
    return (
        <div>
            {isConfirm ? (
                <div className={`braingym-unlock-main ${showPopup === true && 'active'}`}>
                    <div className="close-top">
                        <button type="button" className="close-btn" onClick={() => handlePopup(false)}><img src={close} alt="close" /></button>
                    </div>
                    <div className="unlock-common">
                        <img src={chestopen} alt="chest_open" />
                        <h2>Title</h2>
                        <p className="coin-p"><span />
                            sds
                        </p>
                        <button type="button" onClick={handlePopup}>stemp level <span>{chevRight}</span></button>
                    </div>
                </div>
            )
                :            (
                    <div className={`braingym-unlock-main ${showPopup === true && 'active'}`}>
                        <div className="close-top">
                            <button type="button" className="close-btn" onClick={() => handlePopup(false)}><img src={close} alt="close" /></button>
                        </div>
                        <div className="unlock-common">
                            <h2>Treasure hunt completed !</h2>
                            <p className="coin-p"><span />124</p>
                            <div className="unlock-data-part">
                                <div className="unlock-data-part-sub">
                                    <CompletedRecord title="Time taken" desc="timeout" image={clock} />
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
    showPopup: bool.isRequired,
    handlePopup: func.isRequired,
};

const mapStateToProps = (state) => ({
    chestData: state.BrainGym.chestData,
    showPopup: state.BrainGym.chestUnlockPopup,
});

const mapDispatchToProps = (dispatch) => ({
    handlePopup: (data) => dispatch(unlockBrainGymAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BraingymUnlock);
