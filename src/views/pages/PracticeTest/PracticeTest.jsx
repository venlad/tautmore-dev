import React, { useState } from 'react';
import './style.scss';
import APImage from './travelling.png';
import { quesData, ansData } from './data';
import TestHeader from './TestHeader';
import TestQuestion from './TestQuestion';
import TestAnswerWrapper from './TestAnswerWrapper';
import TestSubmitButton from './TestSubmitButton';
import SubscriberWidgets from './SubscriberWidgets';
import ReattemptAnswerOption from './ReattemptAnswerOption';
import NextQuestionButton from './NextQuestionButton';

const PracticeTest = () => {
    const ansStatus = {
        isSubmitted: false,
        isTrue: false,
        isFalse: false,
    };

    const [quesStatus, setquesStatus] = useState(ansStatus);
    const [isSubmitValid, setIsSubmitValid] = useState(false);
    const [selectedAnswer, setSelectdAnswer] = useState([]);
    const [color, setColor] = useState(1);

    const handleClickAnswer = (ans) => {
        console.log(ans, 'item');
        // const filterAnswer = selectedAnswer.filter(
        //   (item) => item.value === ans.value
        // );
        // setAelectdAnswer([...filterAnswer, ans]);
        setSelectdAnswer(ans);
        setIsSubmitValid(true);
    };

    const handleSubmitAnswer = () => {
        if (selectedAnswer.value === quesData.objects.length) {
            setquesStatus({ ...quesStatus, isSubmitted: true, isTrue: true });
        } else {
            setquesStatus({ ...quesStatus, isSubmitted: true, isTrue: false });
        }
        setColor(quesData.objects.length);
    };

    // const handleSecondAttemtAnswer = (index) => {
    //     if (index === quesData.objects.length) {
    //         setquesStatus({ ...quesStatus, isSubmitted: true, isTrue: true });
    //     } else {
    //         setquesStatus({ ...quesStatus, isSubmitted: true, isTrue: false });
    //     }
    // };

    const backgroundClass =    quesStatus.isSubmitted && !quesStatus.isFalse
        ? 'background-on-error'
        : 'background-on-success';

    return quesStatus.isSubmitted && quesStatus.isTrue ? (
        <SubscriberWidgets />
    ) : (
        <div className={`pt-4 pb-4 px-5 test-container ${backgroundClass}`}>
            <TestHeader />
            <TestQuestion quesData={quesData} APImage={APImage} />
            <TestAnswerWrapper
                ansData={ansData}
                ansType="selectBoxType"
                quesType="optionsType"
                selectedAnswer={selectedAnswer}
                handleSelectOption={handleClickAnswer}
            />
            {quesStatus.isSubmitted && !quesStatus.isFalse ? (
                ''
            ) : (
                <TestSubmitButton
                    isSubmitValid={isSubmitValid}
                    handleSubmitAnswer={handleSubmitAnswer}
                />
            )}
            {console.log(color)}
            {quesStatus.isSubmitted && !quesStatus.isFalse ? (
                <>
                    {' '}
                    <ReattemptAnswerOption
                        color={color}
                        quesData={quesData}
                        APImage={APImage}
                    />{' '}
                    <NextQuestionButton />
                </>
            ) : (
                ''
            )}
        </div>
    );
};

export default PracticeTest;
