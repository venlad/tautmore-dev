import React from 'react';
import { v4 as uuid } from 'uuid';
import { object, string } from 'prop-types';

const ReattemptAnswerOption = ({ quesData, APImage, color }) => (
    <div className="reattemp-wrapper">
        <h4>Select your answer</h4>
        <div className="question-box-common p-4">
            {quesData?.objects?.map((index) => (
                <button key={index} type="button">
                    <span>
                        <div
                            className={color === index && 'second-attempt-correct'}
                        >
                            <span>{index}</span>
                        </div>
                        <img key={uuid()} className="image" src={APImage} alt="answer" />
                    </span>
                </button>
            ))}
        </div>
    </div>
);

ReattemptAnswerOption.propTypes = {
    quesData: object.isRequired,
    APImage: string.isRequired,
    color: string.isRequired,
};

export default ReattemptAnswerOption;
