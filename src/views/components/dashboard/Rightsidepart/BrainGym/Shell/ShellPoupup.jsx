import React, { useEffect } from 'react';
import {  func, array, string } from 'prop-types';
import { connect } from 'react-redux';
import Close from '../../../../../../assets/images/shell-pop-Close.svg';
import ActiveLevelIcon from '../../../../../../assets/images/shell-pop-OvalOrange.svg';
import FadedLevelIcon from '../../../../../../assets/images/shell-pop-OvalFaded.svg';
import Clam from '../../../../../../assets/images/shell-pop-clam.svg';
import OrangeGradientIcon from '../../../../../../assets/images/shell-pop-Orange.svg';
import BlueGradientIcon from '../../../../../../assets/images/shell-pop-Blue.svg';
import PurpleGradientIcon from '../../../../../../assets/images/shell-pop-Purple.svg';
import GreenGradientIcon from '../../../../../../assets/images/shell-pop-Green.svg';
import BlackGradientIcon from '../../../../../../assets/images/shell-pop-Black.svg';
import TotalPlays from '../../../../../../assets/images/shell-pop-TotalPlay.svg';
import './style/popup.scss';
import { getQuestionInChestAction } from '../../../../../../stores/BrainGym/BrainGymAction';

const ShellPoupup = ({
    setShowShell,
    getQuestionInChest,
    questionInChest,
    chestId,
    setViewBrain,
}) => {
    const startNow = () => {
        getQuestionInChest({
            chestId,
        });

        setViewBrain('question');
    };

    useEffect(() => {
        if (questionInChest?.data?.length > 0) {
            setShowShell(false);
        }
    }, [questionInChest]);

    return (
        <div className="shell-popup-main">
            <div className="svg-background-container">
                <div className="flex-items-details">
                    <h2>Shell 1</h2>
                    <h3>Topic: Count to 10  </h3>
                    <button type="button" className="close-btn" onClick={() => setShowShell(false)}>
                        <img className="floating-cross" src={Close} alt="No Imag" />
                    </button>
                    <div className="current-level-and-icons">
                        <p>Currently on Level:</p>
                        <p className="adjusted-para">1</p>
                        <img src={ActiveLevelIcon} alt="No Imag" />
                        <p className="adjusted-para">2</p>
                        <img src={FadedLevelIcon} alt="No Imag" />
                        <p className="adjusted-para">3</p>
                        <img src={FadedLevelIcon} alt="No Imag" />
                        <p className="adjusted-para">4</p>
                        <img src={FadedLevelIcon} alt="No Imag" />
                        <p className="adjusted-para">5</p>
                        <img src={FadedLevelIcon} alt="No Imag" />
                    </div>
                    <img src={Clam} className="floating-clam" alt="No Imag" />
                    <div className="gradient-container">
                        <img src={OrangeGradientIcon} alt="No Imag" />
                        <img src={BlueGradientIcon} alt="No Imag" />
                        <img src={PurpleGradientIcon} alt="No Imag" />
                        <img src={GreenGradientIcon} alt="No Imag" />
                        <img src={BlackGradientIcon} alt="No Imag" />
                    </div>
                    <div className="buttons-container">
                        <p className="text-below-gradient">Win the above badges by completeing this topic</p>
                        <button type="button" onClick={startNow}>Start Now</button>
                        <div className="total-play-and-score">
                            <p className="total-plays">Total Plays</p>
                            <img src={TotalPlays} alt="No Imag" className="highlighted-score" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShellPoupup.propTypes = {
    setShowShell: func.isRequired,
    getQuestionInChest: func.isRequired,
    questionInChest: array.isRequired,
    chestId: string.isRequired,
    setViewBrain: func.isRequired,
};

const mapStateToProps = (state) => ({
    questionInChest: state.BrainGym.questionInChest,
});

const mapDispatchToProps = (dispatch) => ({
    getQuestionInChest: (data) => dispatch(getQuestionInChestAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShellPoupup);
