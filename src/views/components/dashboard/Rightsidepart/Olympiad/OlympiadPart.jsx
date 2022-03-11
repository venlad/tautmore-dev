import React, { useState } from 'react';
import { func, object, string } from 'prop-types';
import OlympiadSidebar from './OlympiadSidebar';
import OlympiadRIghtsidepart from './OlympiadRIghtsidepart';

const OlympiadPart = ({
    questionInExamData, setEachTimeOn,
    eachcurrenttime,
    setEachtime,
}) => {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState([]);
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
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    setEachTimeOn={setEachTimeOn}
                    eachcurrenttime={eachcurrenttime}
                    setEachtime={setEachtime}
                />
            </div>
        </div>
    );
};
OlympiadPart.propTypes = {
    questionInExamData: object.isRequired,
    setEachTimeOn: func.isRequired,
    eachcurrenttime: string.isRequired,
    setEachtime: func.isRequired,
};

export default OlympiadPart;
