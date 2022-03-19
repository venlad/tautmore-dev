import React from 'react';
import { func, object, string } from 'prop-types';
import OlympiadHead from './OlympiadHead';
import './style/olympiad.scss';
import OlympiadPart from './OlympiadPart';

const Olympiad = ({
    questionInExamData, currenttime,
    setEachTimeOn,
    eachcurrenttime,
    setEachtime,
    finishTest,
    setFinishTest,
    setModal,
    modal,
    setTime,
    examName,
}) => (
    <div className="Olympiad-main">
        {/* {console.log('questionInExamData@@@@@@@@@', questionInExamData)} */}
        <OlympiadHead
            questionInExamData={questionInExamData}
            currenttime={currenttime}
            setTime={setTime}
            finishTest={finishTest}
            setFinishTest={setFinishTest}
            setModal={setModal}
            modal={modal}
            examName={examName}
        />
        <OlympiadPart
            questionInExamData={questionInExamData}
            setEachTimeOn={setEachTimeOn}
            eachcurrenttime={eachcurrenttime}
            setEachtime={setEachtime}
        />
    </div>
);
Olympiad.propTypes = {
    questionInExamData: object.isRequired,
    currenttime: string.isRequired,
    setEachTimeOn: func.isRequired,
    eachcurrenttime: string.isRequired,
    setEachtime: func.isRequired,
    setFinishTest: func.isRequired,
    finishTest: string.isRequired,
    setModal: func.isRequired,
    modal: string.isRequired,
    setTime: string.isRequired,
    examName: string.isRequired,

};

export default Olympiad;
