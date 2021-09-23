import React from 'react';
import { string, number, func } from 'prop-types';
import { checkIcon } from '../../../assets/icons/IconList';

const AnswerOption = ({
    data, ind, onChange, selectedOption, titleRef,
}) => {
    const selectAns = () => {
        onChange(ind);
        titleRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div
            className={`option-wrapper-tile-type d-flex align-items-center justify-content-between p-4 ${
                ind === selectedOption ? 'true' : ''
            }`}
        >
            <button type="button" onClick={selectAns}>
                <span>{data}</span>
                <div className="icon--check-wrapper d-flex align-items-center justify-content-center">
                    {checkIcon}
                </div>
            </button>
        </div>
    );
};

AnswerOption.propTypes = {
    data: string.isRequired,
    ind: number.isRequired,
    onChange: func.isRequired,
    selectedOption: string.isRequired,
    titleRef: string.isRequired,
};

export default AnswerOption;
