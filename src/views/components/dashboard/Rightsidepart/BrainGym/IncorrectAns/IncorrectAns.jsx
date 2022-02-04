import React from 'react';
import './incorrectAns.scss';
import { incorrectList } from './mockData/incorrectAnsData';
import IncorrectCommon from './IncorrectCommon';
import close from '../../../../../../assets/images/close.png';

const IncorrectAns = () => (
    <div className="incorrect-ans-main">
        <div className="incorrect-ans">
            <div className="incorrect-ans-head">
                <h1 className="title">Mathematics - Incorrect Answers (16th Aug)</h1>
                <button type="button"><img src={close} alt="close" /></button>
            </div>
            <div className="incorrect-ans-common-main">
                {incorrectList.map((data, index) => (
                    <IncorrectCommon
                        question={data.question}
                        answer={data.answer}
                        key={data.question}
                        index={index}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default IncorrectAns;
