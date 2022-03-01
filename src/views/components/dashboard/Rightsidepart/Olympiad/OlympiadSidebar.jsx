import { func, object, string } from 'prop-types';
import React from 'react';
// import sidebar from './mockData/sidebarData';

const OlympiadSidebar = ({ questionInExamData, selectedQuestion, setSelectedQuestion  }) =>     (
    // const [active, setActive] = useState(0);
    <div className="olympiad-sidebar">
        <ul>
            {questionInExamData && questionInExamData.map((data, ind) => (
                <li aria-hidden="true" key={data?._id} onClick={() => setSelectedQuestion(ind)} className={`${selectedQuestion === ind ? 'active' : ''}`}>{`Questions ${ind + 1}`}</li>
            ))}
        </ul>
    </div>
);
OlympiadSidebar.propTypes = {
    questionInExamData: object.isRequired,
    selectedQuestion: string.isRequired,
    setSelectedQuestion: func.isRequired,

};

export default OlympiadSidebar;
