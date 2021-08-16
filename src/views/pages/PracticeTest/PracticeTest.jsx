import React, { useState } from 'react';
import './style.css';
import APImage from './travelling.png';
import { quesData, ansData } from './data';
import TestHeader from './TestHeader';
import TestQuestion from './TestQuestion';
import TestAnswer from './TestAnswer';
import TestSubmitButton from './TestSubmitButton';

const PracticeTest = () => {
    const ansStatus = {
        isSubmitted: false,
        isTrue: false,
        isFalse: false,
    };

    const [quesStatus, setquesStatus] = useState(ansStatus);
    const [isSubmitValid, setIsSubmitValid] = useState(false);
    const [selectedAnswer, setAelectdAnswer] = useState([]);

    const handleClickAnswer = (ans) => {
        console.log(ans, 'item');
        // const filterAnswer = selectedAnswer.filter(
        //   (item) => item.value === ans.value
        // );
        // setAelectdAnswer([...filterAnswer, ans]);
        setAelectdAnswer(ans);
        setIsSubmitValid(true);
    };

    const handleSubmitAnswer = () => {
        console.log(selectedAnswer, quesData.objects.length);
        if (selectedAnswer.value === quesData.objects.length) {
            setquesStatus({ ...quesStatus, isSubmitted: true, isTrue: true });
        } else {
            setquesStatus({ ...quesStatus, isSubmitted: true, isTrue: false });
        }
    };

    const backgroundClass =    quesStatus.isSubmitted && !quesStatus.isFalse
        ? 'background-on-error'
        : 'background-on-success';

    return quesStatus.isSubmitted && quesStatus.isTrue ? (
        <div className="right-answer-container">
            <div className="right-answer-modal-bg" />
            <div className="right-answer-modal">
                <div className="success-img" />
                <h1>Fantastic !</h1>
                <p className="score-text">
                    Your Score: <span className="score">20</span>
                    <span className="success-badge">+10</span>
                </p>
                <div className="success-bonus">
                    <p>
                        Speed bonus<span>+3</span>
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <div
            className={`pt-4 pb-4 px-4 test-container ${backgroundClass}`}
        >
            <TestHeader />
            <TestQuestion quesData={quesData} APImage={APImage} />
            <TestAnswer
                ansData={ansData}
                // questionType={}
                selectedAnswer={selectedAnswer}
                handleClickAnswer={handleClickAnswer}
            />
            <TestSubmitButton
                isSubmitValid={isSubmitValid}
                handleSubmitAnswer={handleSubmitAnswer}
            />
        </div>
    );
};

export default PracticeTest;
