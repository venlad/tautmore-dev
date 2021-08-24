import React from 'react';
import { string, func, object } from 'prop-types';
import { checkIcon } from './icons';

const AnswerOption = ({
    item,
    selectAnswer,
    handleSelectOption,
    ansType,
}) => {
    const optionClass = selectAnswer?.value === item?.value && ' select-answer';
    // selectAnswer.filter((order) => order.value === item.value).length &&
    // " select-answer";
    let renderAnswer = null;

    switch (ansType) {
        case 'selectBoxType':
            renderAnswer  = (
                <div className={`${optionClass} option-wrapper-box-type d-flex align-items-center justify-content-center`}>
                    <button type="button" onClick={() => handleSelectOption(item)}>
                        <span>{item?.value}</span>
                    </button>
                </div>
            );
            break;
        case 'selectTileType':
            renderAnswer = (
                <div className={`${optionClass} option-wrapper-tile-type d-flex align-items-center justify-content-between p-4`}>
                    <button type="button" onClick={() => handleSelectOption(item)}>
                        <span>{item?.value}</span>
                        <div className="icon--check-wrapper d-flex align-items-center justify-content-center">
                            {checkIcon()}
                        </div>
                    </button>
                </div>
            );
            break;
        default:
            renderAnswer = null;
    }
    return renderAnswer;
};

AnswerOption.propTypes = {
    item: object.isRequired,
    selectAnswer: string.isRequired,
    handleSelectOption: func.isRequired,
    ansType: string.isRequired,
};
AnswerOption.defaultProps = {
    selectAnswer: '',
};
export default AnswerOption;
