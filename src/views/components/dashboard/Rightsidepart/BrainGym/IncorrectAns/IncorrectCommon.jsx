import React from 'react';
import {  string, number, array } from 'prop-types';
import incorrectImg from '../../../../../../assets/images/incorrect-ans.png';
import addPlus from '../../../../../../assets/images/add-plus.png';
import { renderText } from '../QueAnswer/textHelper';

const IncorrectCommon = ({ question, answer, index }) => (
    <div className="incorrect-ans-common">
        <div>
            <h4><span>{index + 1}.</span>{renderText(question)}</h4>
            <span className="add-plus"><img src={addPlus} alt="add" /></span>
        </div>
        <p className="answer-p"><img src={incorrectImg} alt="wrong_answer" /><span>Answer :</span>{renderText(answer[0]?.text)}</p>
    </div>
);

IncorrectCommon.propTypes = {
    question: string.isRequired,
    answer: array.isRequired,
    index: number.isRequired,
};

export default IncorrectCommon;
