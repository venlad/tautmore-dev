import React from 'react';
// import speaker from '../../../assets/images/speaker.png';
import { func, object, string } from 'prop-types';
// import APImage from '../../../../../assets/images/travelling.png';
// import { quesData } from './mockData/RightsidepartData';
import {  chevRight, chevLeft } from '../../../../../assets/icons/IconList';

const OlympiadQueanspart = ({ questionInExamData, selectedQuestion, setSelectedQuestion  }) => {
    const questionObject = questionInExamData[selectedQuestion];
    const handleNext = () => {
        if ((selectedQuestion + 1) < questionInExamData?.length) {
            setSelectedQuestion(selectedQuestion + 1);
        }
    };
    const handlePrev = () => {
        if (selectedQuestion > 0) {
            setSelectedQuestion(selectedQuestion - 1);
        }
    };

    return    (
        <div>
            <div className="row">
                {console.log('questionInExamData', questionInExamData, setSelectedQuestion)}
                <div className="col-12">
                    <div className="question-box">
                        <h4>Question - {selectedQuestion + 1}</h4>
                        <h2> <span>{questionObject?.description}</span></h2>
                        {/* <div className="question-box-common mt-4">
                            {quesData?.objects?.map(() => (
                                <img key={Math.random()} className="image"
                                 src={APImage} alt="answer" />
                            ))}
                        </div> */}
                    </div>
                    <span className="answer-title">Select your answer</span>
                    <div className="subscribe-for-more-exam">
                        <button type="button" className="prev" onClick={() => handlePrev()}><span>{chevLeft}</span>Previous Question</button>
                        <button type="button" className="next" onClick={() => handleNext()}>Next Question<span>{chevRight}</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
OlympiadQueanspart.propTypes = {
    questionInExamData: object.isRequired,
    selectedQuestion: string.isRequired,
    setSelectedQuestion: func.isRequired,
};

export default OlympiadQueanspart;
