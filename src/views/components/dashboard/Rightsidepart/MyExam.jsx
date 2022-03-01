import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import {  func, object } from 'prop-types';
import MyexamTitle from './MyexamTitle';
import MyexamCommon from './MyexamCommon';
import MyexamTab from './MyexamTab';
// import MyExamTotalscore from './MyExamTotalscore';
import MyexamExamlist from './MyexamExamlist';
import { chevRight } from '../../../../assets/icons/IconList';
import {
    getQuestionInExamAction, previousExamAction, startExamAction, upcomingExamAction,
} from '../../../../stores/MyExam/MyExamAction';

import { formatDate, formatTime } from '../../../../helpers/utility';
import Olympiad from './Olympiad/Olympiad';

const MyExam = ({
    upcomingexams, upcomingexamData, previousexams, previousexamData, startexam, questionInexam,
    questionInExamData,
}) => {
    const [selectedSubject, setSelectedSubject] = useState({ _id: '', name: 'All Subject' });
    const [subdata, setSubdata] = useState({ _id: '', name: 'All Subject' });
    const [timedata, setTimedata] = useState({ name: 'All time', value: '' });
    const [startexamState, setStartExamState] = useState('');
    console.log('startexamState', startexamState);
    useEffect(() => {
        // if (!subdata?._id) {
        upcomingexams({
            student: '621367b7d8f8340009d4a866',
            subject: subdata?._id,
            page_no: 1,
            examType: '',
        });
        // }
    }, [subdata]);
    useEffect(() => {
        // if (!subdata?._id) {
        previousexams({
            student: '61f3bf5ed81efd0009c31a5d',
            subject: selectedSubject?._id,
            page_no: 1,
            examType: '',
            timeFrame: timedata?.value,
        });
        // }
    }, [selectedSubject, timedata]);

    useEffect(() => {
        if (startexamState) {
            const selectedExam = upcomingexamData?.data && upcomingexamData?.data[0]?.response
                ?.filter((item) => item._id === startexamState)[0];
            console.log('startexamStateUSEEEEEE', startexamState, selectedExam);
            startexam({
            // student: '61f3bf5ed81efd0009c31a5d',
                student: '621367b7d8f8340009d4a866',
                exam: selectedExam?._id,
                subject: selectedExam?.subject,

            });
            questionInexam({
                exam: selectedExam?._id,
            });
        }
    }, [upcomingexamData, startexamState]);

    // console.log('upcomingexamData', upcomingexamData);
    // console.log('subjectList', subjectList);

    return (
        <div>
            {startexamState === ''
            && (
                <div className="myexam-main">
                    <MyexamTitle
                        title="Upcoming exams"
                        select
                        setSubdata={setSubdata}
                        subdata={subdata}
                    />
                    <div className="row">
                        {/* {console.log('upcomingexamData?.data?.response',
                         upcomingexamData?.data)} */}
                        <div className="col-md-6 myexam-main-common-left">
                            {upcomingexamData?.data && upcomingexamData?.data[0]?.response
                                ?.map((item) => (
                                    <MyexamCommon
                                        key={item?._id}
                                        examId={item?._id}
                                        subject={item?.subjectName}
                                        date={formatDate(item?.endDate)}
                                        time={formatTime(item?.endDate)}
                                        title={item?.name}
                                        student={15}
                                        setStartExam={setStartExamState}
                                    />
                                ))}
                        </div>

                        {/* <div className="col-md-6 myexam-main-common-right">
                    <MyexamCommon subject="English" date="20 Oct 2020" time="23:59" student={15} />
                </div> */}
                    </div>
                    <div className="subscribe-for-more-exam">
                        <button type="button">Subcribe for more exams <span>{chevRight}</span></button>
                    </div>
                    <MyexamTitle
                        title="Previous exams history"
                        setSubdata={setSubdata}
                        subdata={subdata}

                    />
                    <MyexamTab
                        setSelectedSubject={setSelectedSubject}
                        selectedSubject={selectedSubject}
                        timedata={timedata}
                        setTimedata={setTimedata}
                    />
                    {/* <MyExamTotalscore
                previousexamData={previousexamData}
            /> */}
                    <MyexamExamlist
                        previousexamData={previousexamData}
                    />
                </div>
            )}
            {/* { console.log('startexam', startexam)} */}
            {startexamState !== ''
            && (
                <Olympiad
                    questionInExamData={questionInExamData}

                />
            )}
        </div>
    );
};
MyExam.propTypes = {
    upcomingexams: func.isRequired,
    upcomingexamData: object.isRequired,
    previousexams: func.isRequired,
    previousexamData: object.isRequired,
    startexam: func.isRequired,
    // subjectList: array.isRequired,
    questionInexam: func.isRequired,
    questionInExamData: object.isRequired,
};
const mapStateToProps = (state) => ({
    subjectList: state.Auth.Login?.data?.subjectsEnrolled,
    upcomingexamData: state.MyExam.upcomingExam,
    previousexamData: state.MyExam.previousExam,
    questionInExamData: state.MyExam.questionInExam,
});
const mapDispatchToProps = (dispatch) => ({
    upcomingexams: (data) => dispatch(upcomingExamAction(data)),
    previousexams: (data) => dispatch(previousExamAction(data)),
    startexam: (data) => dispatch(startExamAction(data)),
    questionInexam: (data) => dispatch(getQuestionInExamAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyExam);
