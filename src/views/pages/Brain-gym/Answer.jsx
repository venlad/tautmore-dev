import React, { useState } from 'react';
import { chevRight } from '../../../assets/icons/IconList';
import answer from './mockData/answerData';
import AnswerOption from './AnswerOption';

const Answer = () => {
    const [select, setSelect] = useState('');
    return (
        <div>
            <span className="answer-title pt-4">Select your answer</span>
            <div className="question-options-wrapper selectTileType">
                {answer.map((data, ind) => (
                    <AnswerOption
                        data={data}
                        ind={ind}
                        selectedOption={select}
                        onChange={setSelect}
                    />
                ))}
            </div>

            <div className="col-12"><button type="button" className={`submit-answer-button ${select !== '' ? 'active' : ''}`} disabled={select === ''}><div className="button-wrapper d-flex align-items-center justify-content-between"><span>Submit </span><div className="icon-wrapper d-flex align-items-center justify-content-center">{chevRight}</div></div></button></div>
        </div>
    );
};

export default Answer;
