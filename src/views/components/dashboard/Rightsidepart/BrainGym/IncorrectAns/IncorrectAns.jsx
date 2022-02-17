import React from 'react';
import { object } from 'prop-types';
import './incorrectAns.scss';
// import { incorrectList } from './mockData/incorrectAnsData';
import IncorrectCommon from './IncorrectCommon';
import close from '../../../../../../assets/images/close.png';

const IncorrectAns = ({ incorrecrAnsData }) => (
    <div className="incorrect-ans-main">
        <div className="incorrect-ans">
            <div className="incorrect-ans-head">
                <h1 className="title">Mathematics - Incorrect Answers (16th Aug)</h1>
                <button type="button"><img src={close} alt="close" /></button>
            </div>
            <div className="incorrect-ans-common-main">
                {incorrecrAnsData?.data?.wrongAnswers.map((data, index) => (
                    <IncorrectCommon
                        question={data?.description}
                        answer={data?.answer}
                        key={Math.random()}
                        index={index}
                    />
                ))}
            </div>
        </div>
    </div>
);

IncorrectAns.propTypes = {
    incorrecrAnsData: object.isRequired,
};

export default IncorrectAns;
