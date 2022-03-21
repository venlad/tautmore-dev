import React, { useState, useEffect } from 'react';
import {
    object, func, bool, array,
} from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import OnlineClassalert from '../../OnlineClassalert';
import MyClassesTitle from '../../../../components/dashboard/Rightsidepart/MyexamTitle';
// import MyClassesTAB from '../../../../components/dashboard/Rightsidepart/MyClass/MyClassesTab';
import MyClassListCommon from './MyClassListCommon';
import SimpleSlider from '../../Slider';
import SubjectModel from '../../SubjectModel';
import SubjectTab from './SubjectTab';
// import ZoomClassContainer from './ZoomClassContainer';
// import Mysubjects from '../../Mysubjects/MySubjects';
import ReschedulePopup from './ReschedulePopup';
import { getMyClassesAction, getMyClassesHistoryAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const MyClass = ({
    lgShow,
    setLgShow,
    myClasses,
    getMyClasses,
    getMyClassesHistory,
    myClassesHistory,
    getProfile,
}) => {
    const [model, setModel] = useState(false);
    const [myClassesList, setMyClassesList] = useState([]);
    const [scheduleId, setScheduleId] = useState('');

    // const [myClassesHistoryList, setMyClassesHistoryList] = useState([]);
    console.log(myClasses, 'myClasses from myclass');
    console.log(getProfile, 'getProfile from myclass');
    useEffect(() => {
        if (!myClasses.data) {
            getMyClasses();
        }
        if (myClasses?.data) {
            const cdata = myClasses?.data[0]?.response?.map((data) => (
                {
                    grade: data?.gradeInfo?.name,
                    subject: data?.subjectInfo.name,
                    numberOfStudent: data?.numOfStudents,
                    date: data?.scheduleInfo?.date,
                    duration: data?.scheduleInfo?.duration,
                    timeslot: data?.scheduleInfo?.timeSlot,
                    startTime: data?.scheduleInfo?.startTime,
                    id: data?.scheduleInfo?._id,
                    startUrl: data?.scheduleInfo?.startUrl,
                    subjectInfo: data?.subjectInfo,
                    scheduleInfo: data?.scheduleInfo,

                }));
            setMyClassesList(cdata);
        }
    }, [myClasses]);

    useEffect(() => {
        if (!myClassesHistory?.data) {
            getMyClassesHistory();
        }
    }, [myClassesHistory]);

    return (
        <div>
            <OnlineClassalert latestClass={myClassesList[0]}  />
            <div className="myexam-main">
                <MyClassesTitle title={`My upcoming classes ${myClassesList.length}`} />
                <SubjectTab
                    data={getProfile?.data?.subject}
                />
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <SimpleSlider
                            myClassesList={myClassesList}
                            handleSubjectModel={setLgShow}
                            handleModel={setModel}
                            setScheduleId={setScheduleId}
                        />
                    </div>
                </div>
                <div>
                    <SubjectModel
                        classTitle={myClassesList?.subject}
                        timeslot={myClassesList?.startTime}
                        showSubjectModel={lgShow}
                        handleSubjectModel={setLgShow}
                    />
                </div>
                <MyClassesTitle title="Completed classes history" />
                <SubjectTab data={getProfile?.data?.subject} />

                <div className="myexam-examlist">
                    {myClassesHistory?.data?.[0]?.response?.map((data) => (
                        <MyClassListCommon val={data} />
                    ))}
                </div>
                {/* <ExamDetails /> */}
                {/* <Mysubjects /> */}
            </div>
            <ReschedulePopup model={model} handleModel={setModel} scheduleId={scheduleId} />
        </div>
    );
};
MyClass.propTypes = {
    lgShow: bool.isRequired,
    setLgShow: func.isRequired,
    myClasses: object.isRequired,
    getMyClasses: func.isRequired,
    myClassesHistory: array.isRequired,
    getMyClassesHistory: func.isRequired,
    getProfile: array.isRequired,
};

const mapStateToProps = (state) => ({
    myClasses: state.TeacherDashboard.myClasses,
    myClassesHistory: state.TeacherDashboard.myClassesHistory,
    getProfile: state.TeacherDashboard.getProfile,
});

const mapDispatchToProps = (dispatch) => ({
    getMyClasses: () => dispatch(getMyClassesAction()),
    getMyClassesHistory: () => dispatch(getMyClassesHistoryAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyClass);
