import React from 'react';
import {  string, number } from 'prop-types';
import { checkIcon } from '../../../assets/icons/IconList';

const AnswerOption = ({
    data, ind, onChange, selectedOption,
}) => (
    <div className={`option-wrapper-tile-type d-flex align-items-center justify-content-between p-4 ${ind === selectedOption ? 'true' : ''}`}>
        <button type="button" onClick={() => onChange(ind)}>
            <span>{data}</span>
            <div className="icon--check-wrapper d-flex align-items-center justify-content-center">{checkIcon}</div>
        </button>
    </div>
);

AnswerOption.propTypes = {
    data: string.isRequired,
    ind: number.isRequired,
    onChange: string.isRequired,
    selectedOption: number.isRequired,
};

export default AnswerOption;
