import React from 'react';
import SpecialClam from '../../../../../../assets/images/SpecialClam.svg';
import Pencil from '../../../../../../assets/images/Pencil_brain-gym.svg';
import CheckList from '../../../../../../assets/images/CheckList.svg';
// import Flash from '../../../../../../assets/images/flash.svg';
import close from '../../../../../../assets/images/close.png';

import './popup.scss';

const Popup = () => (
    <>
        <div className="completed-popup-main">
            <button className="close-popup" type="button">
                <img src={close} alt="close" />
            </button>
            <div className="light-blue-background-container">
                <div className="rectangle-container">

                    <div className="green-rectangle">
                        <div className="white-rectangle">
                            <div className="flex-items">

                                <img className="specialClam" src={SpecialClam} alt="No Imag" />
                                <p className="bold-font">Well done!</p>
                                <p className="light-font">Shell 1 completed!</p>

                                <div className="flex-items-points">
                                    <img src={Pencil} alt="No Imag" />
                                    <p className="points">300 points</p>
                                </div>

                                <div className="stats">

                                    <div className="stats-1">
                                        <img src={CheckList} alt="No Imag" />
                                        <div>
                                            <p className="right-ans">Right Answers</p>
                                            <p className="score-1">28 of 30</p>
                                        </div>

                                    </div>

                                    <div className="stats-2">
                                        <img src={close} alt="No Imag" />
                                        <div>
                                            <p className="avg-score">Average Speed</p>
                                            <p className="score-2">8.2 sec / Que</p>

                                        </div>

                                    </div>

                                </div>

                                <button type="button">Next</button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
);

export default Popup;
