import React, { useState } from 'react';
import { object } from 'prop-types';
import OlympiadSidebar from './OlympiadSidebar';
import OlympiadRIghtsidepart from './OlympiadRIghtsidepart';

const OlympiadPart = ({ questionInExamData }) => {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    return (
        <div className="row olympiad-bottom">
            <div className="col-md-3 col-12">
                <OlympiadSidebar
                    selectedQuestion={selectedQuestion}
                    setSelectedQuestion={setSelectedQuestion}
                    questionInExamData={questionInExamData}
                />
            </div>
            <div className="col-md-9 col-12">
                <OlympiadRIghtsidepart
                    selectedQuestion={selectedQuestion}
                    setSelectedQuestion={setSelectedQuestion}
                    questionInExamData={questionInExamData}
                />
            </div>
        </div>
    );
};
OlympiadPart.propTypes = {
    questionInExamData: object.isRequired,
};

export default OlympiadPart;
