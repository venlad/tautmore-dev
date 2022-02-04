import React from 'react';
import {  string, number } from 'prop-types';
import incorrectImg from '../../../../../../assets/images/incorrect-ans.png';
import addPlus from '../../../../../../assets/images/add-plus.png';

const IncorrectCommon = ({ question, answer, index }) => (
    <div className="incorrect-ans-common">
        <div>
            <h4><span>{index + 1}.</span>{question}</h4>
            <span className="add-plus"><img src={addPlus} alt="add" /></span>
        </div>
        <p className="answer-p"><img src={incorrectImg} alt="wrong_answer" /><span>Answer :</span> {answer}</p>
    </div>
);

IncorrectCommon.propTypes = {
    question: string.isRequired,
    answer: string.isRequired,
    index: number.isRequired,
};

export default IncorrectCommon;
