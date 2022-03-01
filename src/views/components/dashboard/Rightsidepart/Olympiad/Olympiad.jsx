import React from 'react';
import { object } from 'prop-types';
import OlympiadHead from './OlympiadHead';
import './style/olympiad.scss';
import OlympiadPart from './OlympiadPart';

const Olympiad = ({ questionInExamData }) => (
    <div className="Olympiad-main">
        {console.log('questionInExamData@@@@@@@@@', questionInExamData)}
        <OlympiadHead
            questionInExamData={questionInExamData}
        />
        <OlympiadPart
            questionInExamData={questionInExamData}
        />
    </div>
);
Olympiad.propTypes = {
    questionInExamData: object.isRequired,
};

export default Olympiad;
