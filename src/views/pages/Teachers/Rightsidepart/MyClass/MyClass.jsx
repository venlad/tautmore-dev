import React, { useState, useEffect } from 'react';
import {
    object, func, bool, array,
} from 'prop-types';
import { connect } from 'react-redux';
import OnlineClassalert from '../../OnlineClassalert';
import MyClassesTitle from '../../../../components/dashboard/Rightsidepart/MyexamTitle';
import MyClassesTAB from '../../../../components/dashboard/Rightsidepart/MyClass/MyClassesTab';
import MyClassesList from '../../../../components/dashboard/Rightsidepart/MyClass/MyClassesList';
import SimpleSlider from '../../Slider';
import SubjectModel from '../../SubjectModel';

// import Mysubjects from '../../Mysubjects/MySubjects';
import ReschedulePopup from './ReschedulePopup';
import { getMyClassesAction, getMyClassesHistoryAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const MyClass = ({
    lgShow, setLgShow, myClasses, getMyClasses, getMyClassesHistory, myClassesHistory,
}) => {
    const [model, setModel] = useState(false);

    const [myClassesList, setMyClassesList] = useState([]);
    // const [myClassesHistoryList, setMyClassesHistoryList] = useState([]);

    useEffect(() => {
        if (!myClasses.data) {
            getMyClasses();
        }

        // if (!myClassesHistory.data) {
        //     getMyClassesHistory();
        // }

        if (myClasses?.data) {
            console.log('Inside condition');
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

                }));
            setMyClassesList(cdata);
        }
    }, [myClasses, myClassesHistory]);

    console.log(myClassesHistory, 'myClassesHistory');

    console.log(myClassesList, 'myClassesList');

    console.log(myClasses, 'My Classes!');

    return (
        <div>
            <OnlineClassalert latestClass={myClassesList[0]} />
            <div className="myexam-main">
                <MyClassesTitle title={`My upcoming classes ${myClassesList.length}`} />
                <MyClassesTAB />
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <SimpleSlider
                            myClassesList={myClassesList}
                            handleSubjectModel={setLgShow}
                            handleModel={setModel}
                        />
                    </div>
                </div>
                <div>
                    <SubjectModel
                        showSubjectModel={lgShow}
                        handleSubjectModel={setLgShow}
                    />
                </div>
                <MyClassesTitle title="Completed classes history" />
                <MyClassesTAB />

                <MyClassesList />
                {/* <ExamDetails /> */}
                {/* <Mysubjects /> */}
            </div>
            <ReschedulePopup model={model} handleModel={setModel} />
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
};

const mapStateToProps = (state) => ({
    myClasses: state.TeacherDashboard.myClasses,
    myClassesHistory: state.TeacherDashboard.myClassesHistory,
});

const mapDispatchToProps = (dispatch) => ({
    getMyClasses: () => dispatch(getMyClassesAction()),
    getMyClassesHistory: () => dispatch(getMyClassesHistoryAction()),

});

export default connect(mapStateToProps, mapDispatchToProps)(MyClass);
