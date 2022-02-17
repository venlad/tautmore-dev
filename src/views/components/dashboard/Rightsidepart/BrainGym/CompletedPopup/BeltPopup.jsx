import React, { useEffect, useState } from 'react';
import {
    func,
    object,
} from 'prop-types';
// import TursereComp from '../../../../../../assets/images/beltpopup.svg';
import TursereComp from '../../../../../../assets/images/YellowBelt.svg';
import yellowbeltIcon from '../../../../../../assets/images/yellowbeltIcon.svg';
import close from '../../../../../../assets/images/close.png';
import './popup.scss';

const  BeltPopup = ({ completeChestData, setViewBrain, currentChest }) => {
    const [result, setResult] = useState({});
    const handleNextClick = () => {
        setViewBrain('workout');
    };
    const closePopup = () => {
        setViewBrain('home');
    };
    const BeltData = [
        {
            beltimg: TursereComp, textcolor: 'yellow', beltColorName: 'yellow', belticon: yellowbeltIcon, percentage: 20,
        },
        {
            beltimg: TursereComp, textcolor: 'blue', beltColorName: 'blue', belticon: yellowbeltIcon, percentage: 40,
        },
        {
            beltimg: TursereComp, textcolor: 'purple', beltColorName: 'purple', belticon: yellowbeltIcon, percentage: 60,
        },
        {
            beltimg: TursereComp, textcolor: 'green', beltColorName: 'green', belticon: yellowbeltIcon, percentage: 80,
        },
        {
            beltimg: TursereComp, textcolor: 'black', beltColorName: 'black', belticon: yellowbeltIcon, percentage: 100,
        },
    ];

    useEffect(() => {
        const score = (completeChestData?.answeredCorrect / completeChestData?.questionsCount)
        * 100;
        const filteredBeltinfo = BeltData.filter((item) => item.percentage >= score);
        setResult(filteredBeltinfo[0]);
    }, [completeChestData]);

    return (
        <>
            <div className="completed-popup-main">
                <button className="close-popup" type="button" onClick={closePopup}>
                    <img src={close} alt="close" />
                </button>
                <div className="light-blue-background-container">
                    <div className="rectangle-container">

                        <div className="green-rectangle-belt">
                            <div className="white-rectangle-belt">
                                <div className="flex-items">

                                    <img className="specialClam" src={result?.beltimg} alt="No Imag" />
                                    <p className="bold-font">Congrats!</p>
                                    <p className="light-font">Shell {currentChest?.chestIndex} completed!
                                    </p>

                                    <div style={{ color: result?.textcolor }} className="yellow-belt-achieved">
                                        <img src={result?.belticon} alt="No Imag" />
                                        {result?.beltColorName} belt achieved
                                        <img src={result?.belticon} alt="No Imag" />
                                    </div>

                                    <div className="in-topic">In topic: Simple fractions</div>

                                    <button className="beltpopup-button" type="button" onClick={handleNextClick}>Next</button>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
BeltPopup.propTypes = {
    currentChest: object.isRequired,
    completeChestData: object.isRequired,
    setViewBrain: func.isRequired,
};
export default BeltPopup;
