import React from 'react';
// import speaker from '../../../assets/images/speaker.png';
import APImage from '../../../assets/images/travelling.png';
import { quesData } from './mockData/RightsidepartData';
import { speaker } from '../../../assets/icons/IconList';

const OlympiadQueanspart = () => (
    <div>
        <div className="row">
            <div className="col-12">
                <div className="question-box">
                    <h4>Question - 1</h4>
                    <h2><span className="span-one">{speaker}</span> <span>{quesData?.title}</span></h2>
                    <div className="question-box-common mt-4">
                        {quesData?.objects?.map(() => (
                            <img className="image" src={APImage} alt="answer" />
                        ))}
                    </div>
                </div>
                <span className="answer-title">Select your answer</span>
            </div>
        </div>
    </div>
);

export default OlympiadQueanspart;
