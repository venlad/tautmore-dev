import React from 'react';
import { string, func } from 'prop-types';
import { checkIcon } from './icons';

const AnswerOption = ({
    item,
    selectAnswer,
    handleAnswerclick,
    questionType,
}) => {
    console.log(selectAnswer, item, 'type');
    const optionClass = selectAnswer.value === item.value && ' select-answer';
    // selectAnswer.filter((order) => order.value === item.value).length &&
    // " select-answer";

    return questionType !== 'selectTile' ? (
        <div className={`${optionClass} option-wrapper-box-type d-flex align-items-center justify-content-center`}>
            <button type="button" onClick={() => handleAnswerclick(item)}>
                <span>{item?.value}</span>
            </button>
        </div>
    ) : (
        <div className={`${optionClass} option-wrapper-tile-type d-flex align-items-center justify-content-between p-4`}>
            <button type="button" onClick={() => handleAnswerclick(item)}>
                <span>{item?.value}</span>
                <div className="icon--check-wrapper d-flex align-items-center justify-content-center">
                    {checkIcon()}
                </div>
            </button>

        </div>
    );
};

AnswerOption.propTypes = {
    item: string.isRequired,
    selectAnswer: string.isRequired,
    handleAnswerclick: func.isRequired,
    questionType: string.isRequired,
};
export default AnswerOption;
