import React from 'react';
import {
    func,
    object,
} from 'prop-types';
import TursereComp from '../../../../../../assets/images/tresurehuntComp.svg';
import Pencil from '../../../../../../assets/images/Pencil_brain-gym.svg';
import CheckList from '../../../../../../assets/images/CheckList.svg';
import Flash from '../../../../../../assets/images/flash.svg';
import close from '../../../../../../assets/images/close.png';
import './popup.scss';

const  TruserePopup = ({ completeChestData, setViewBrain }) => {
    const handleNextClick = () => {
        setViewBrain('home');
    };
    const closePopup = () => {
        setViewBrain('home');
    };
    const viewReport = () => {
        setViewBrain('report');
    };

    return (
        <>
            <div className="completed-popup-main">
                <button className="close-popup" type="button" onClick={closePopup}>
                    <img src={close} alt="close" />
                </button>
                <div className="light-blue-background-container">
                    <div className="rectangle-container">

                        <div className="green-rectangle">
                            <div className="white-rectangle">
                                <div className="flex-items">

                                    <img className="specialClam" src={TursereComp} alt="No Imag" />
                                    <p className="bold-font">Treasure hunt</p>
                                    <p className="bold-font">completed!</p>
                                    {/* <p className="light-font">Treasure hunt completed!
                                    </p> */}

                                    <div className="flex-items-points-trusere">
                                        <img src={Pencil} alt="No Imag" />
                                        <p className="points">{completeChestData?.totalPoints} points totally earned</p>
                                    </div>

                                    <div className="stats">

                                        <div className="stats-1">
                                            <img src={CheckList} alt="No Imag" />
                                            <div>
                                                <p className="right-ans">Right Answers</p>
                                                <p className="score-1">{completeChestData?.totalAnsweredCorrect} of {completeChestData?.totalQuestionsCount}</p>
                                            </div>

                                        </div>

                                        <div className="stats-2">
                                            <img src={Flash} alt="No Imag" />
                                            <div>
                                                <p className="avg-score">Average Speed</p>
                                                <p className="score-2">{completeChestData?.totalAverageSpeed} sec / Que</p>

                                            </div>

                                        </div>

                                    </div>

                                    <button type="button" onClick={handleNextClick}>Finish</button>
                                    <p className="view-report" aria-hidden="true" onClick={viewReport}>View report</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
TruserePopup.propTypes = {
    // currentChest: object.isRequired,
    completeChestData: object.isRequired,
    setViewBrain: func.isRequired,
};
export default TruserePopup;
