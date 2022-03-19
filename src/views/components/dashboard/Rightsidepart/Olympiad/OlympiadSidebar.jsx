import { func, object, string } from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import sidebar from './mockData/sidebarData';

const OlympiadSidebar = ({
    questionInExamData, selectedQuestion, setSelectedQuestion, allQuesAns,
}) => {
    useEffect(() => () => {

    }, [allQuesAns]);

    return (
    // const [active, setActive] = useState(0);
        <div className="olympiad-sidebar">
            <ul>
                {questionInExamData && questionInExamData.map((data, ind) => (
                    <li aria-hidden="true" key={data?._id} onClick={() => setSelectedQuestion(ind)} className={`${selectedQuestion === ind ? 'active' : ''}  ${allQuesAns?.solutinIndex && !allQuesAns?.solutinIndex.includes(-1) ? '' : 'answered'}`}>{`Questions ${ind + 1}`}</li>
                ))}
            </ul>
        </div>
    );
};
OlympiadSidebar.propTypes = {
    questionInExamData: object.isRequired,
    selectedQuestion: string.isRequired,
    setSelectedQuestion: func.isRequired,
    allQuesAns: object.isRequired,

};
const mapStateToProps = (state) => ({
    allQuesAns: state.MyExam.allQuesAns,
});

export default connect(mapStateToProps)(OlympiadSidebar);
