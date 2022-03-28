import React, { useState, useEffect }  from 'react';

import Select from 'react-select';
import {
    object, array, string, func,
} from 'prop-types';
import { connect } from 'react-redux';
import {
    categories,
} from './mockData/Coursedetailsdata';

import Coursedetailsubjects from './Coursedetailsubjects';
import CourseDetailsCategories from './CourseDetailsCategories';
import { dropdownSingleValueStyles, dropdownMultiValueStyles } from './customCssDef';
import {
    coCurricularActivitiesAction, getAllGradesAction,
    getAllTimeslots, getAllSubjects, getUniqueSubjectsAction,
} from '../../../../stores/Auth/AuthAction';
import TimeSlots from './TimeSlots';
import close from '../../../../assets/images/close.png';

const TeacherRequirements = ({
    setSubjectVal, subjectVal, validation, setGradeVal,
    coCurricularActivities, setCoCurricularActivities, pastExperience, setPastExperience,
    setExperienceField, setTimeSlotMonday, setTimeSlotTuesday, setTimeSlotWednesday,
    setTimeSlotThursday, setTimeSlotFriday, setTimeSlotSaturday, timeSlotMonday, gradeVal,
    fetchCoCurricularActivities, coCurricular, getAllGrades, allGrades, getAllTimeSlots, timeSlots,
    getSubjectsByClassId,
}) => {
    const [showSubject, setShowSubject] = useState(false);
    const [showSubject2, setShowSubject2] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showCategories2, setShowCategories2] = useState(false);
    const [showAddNewGrade, setShowAddNewGrade] = useState(false);
    const [selectedGrades, setSelectedGrades] = useState([]);

    console.log(timeSlotMonday);

    useEffect(() => {
        if (selectedGrades[0]) {
            getSubjectsByClassId({ classId: selectedGrades[0]?.value });
        }
    });

    const labelsOnly = (array1) => {
        const labels = array1?.map((item) => item.value);
        return labels;
    };

    const timeSlotMondayLabel = labelsOnly(timeSlotMonday);

    console.log(timeSlotMondayLabel.toString());

    const userType = 'Teacher';

    const experience = [
        { value: 'Yes', label: 8 },
        { value: 'No', label: 9 }];

    // Fetch Subjects

    const [subjects] = useState([{ value: 1, label: '' }]);

    // useEffect(() => {
    //     if (!subjectsList?.data) {
    //         getSubjectsAction();
    //     }
    //     if (subjectsList?.data?.length > 0) {
    //         const cdata = subjectsList?.data.map((data) => (
    //             { value: data.label, label: data.label }));
    //         setSubjects(cdata);
    //     }
    // }, [subjectsList]);

    // console.log(subjects, 'Fetched', subjectsList);

    // Fetch Co-curricular

    const [coActivityValue, setcoActivityValue] = useState([{ value: 1, label: '' }]);

    useEffect(() => {
        if (!coCurricular?.data) {
            fetchCoCurricularActivities();
        }
        if (coCurricular?.data?.length > 0) {
            const cdata = coCurricular?.data.map((data) => (
                { value: data.activityName, label: data._id }));
            setcoActivityValue(cdata);
        }
    }, [coCurricular]);

    // Fetch gradeValue

    const [gradeValue, setGradeValue] = useState({ value: 1, label: '' });

    useEffect(() => {
        if (!allGrades?.data) {
            getAllGrades();
        }
        if (allGrades?.data?.length > 0) {
            const gdata = allGrades?.data.map((data) => (
                { value: data._id, label: data.name }));
            setGradeValue(gdata);
        }
    }, [allGrades]);

    // Fetch timeslots

    const [timeslots, setTimeslots] = useState({ value: 1, label: '' });

    useEffect(() => {
        if (!timeSlots?.data) {
            getAllTimeSlots();
        }
        if (timeSlots?.data?.length > 0) {
            const gdata = timeSlots?.data.map((data) => (
                { value: data.value, label: data.label }));
            setTimeslots(gdata);
        }
    }, [timeSlots]);

    // console.log(timeslots);

    let arrayOnly = [];

    const setCategoryHandler = (val) => {
        arrayOnly = val.map((item) => item.value);

        if (arrayOnly.includes('subjects') && arrayOnly.includes('co-curricular')) {
            setShowSubject(true);
            setShowCategories(true);
        } else if (arrayOnly.includes('subjects') && !arrayOnly.includes('co-curricular')) {
            setShowSubject(true);
            setShowCategories(false);
        } else if (arrayOnly.includes('subjects')) {
            setShowSubject(true);
        } else if (arrayOnly.includes('co-curricular')) {
            setShowCategories(true);
        } else if (arrayOnly.includes('subjects')) {
            setShowSubject(true);
        } else if (!arrayOnly.includes('subjects') && !arrayOnly.includes('co-curricular')) {
            setShowSubject(false);
            setShowCategories(false);
        }  else if (!arrayOnly.includes('subjects')) {
            setShowSubject(false);
        } else if (!arrayOnly.includes('co-curricular')) {
            setShowCategories(false);
        } else if (!arrayOnly.includes('subjects') || arrayOnly.includes('co-curricular')) {
            setShowCategories(true);
            setShowSubject(false);
        } else if (arrayOnly.includes('subjects') || !arrayOnly.includes('co-curricular')) {
            setShowCategories(false);
            setShowSubject(true);
        }
    };

    let arrayOnly2 = [];

    const setCategoryHandler2 = (val) => {
        arrayOnly2 = val.map((item) => item.value);

        if (arrayOnly2.includes('subjects') && arrayOnly2.includes('co-curricular')) {
            setShowSubject2(true);
            setShowCategories2(true);
        } else if (arrayOnly2.includes('subjects') && !arrayOnly2.includes('co-curricular')) {
            setShowSubject2(true);
            setShowCategories2(false);
        } else if (arrayOnly2.includes('subjects')) {
            setShowSubject2(true);
        } else if (arrayOnly2.includes('co-curricular')) {
            setShowCategories2(true);
        } else if (arrayOnly2.includes('subjects')) {
            setShowSubject2(true);
        } else if (!arrayOnly2.includes('subjects') && !arrayOnly2.includes('co-curricular')) {
            setShowSubject2(false);
            setShowCategories2(false);
        }  else if (!arrayOnly2.includes('subjects')) {
            setShowSubject2(false);
        } else if (!arrayOnly2.includes('co-curricular')) {
            setShowCategories2(false);
        } else if (!arrayOnly.includes('subjects') || arrayOnly2.includes('co-curricular')) {
            setShowCategories2(true);
            setShowSubject2(false);
        } else if (arrayOnly2.includes('subjects') || !arrayOnly2.includes('co-curricular')) {
            setShowCategories2(false);
            setShowSubject2(true);
        }
    };

    const gradeHandler = (value) => {
        setGradeVal(value);
        setSelectedGrades([...selectedGrades, value]);
    };

    console.log(selectedGrades, 'Selected Grades');

    const onExperienceClick = (e) => {
        console.log(e, 'On experience click');
    };

    return (
        <div className="outermost-div">

            <div className="step-body">
                <div className="coursedetails-main">
                    <div className="heading-and-dropdown">
                        <div className="heading">
                            <h2>TAUTMORE REQUIREMENTS</h2>
                            <p>Please select what you would like to teach at Tautmore</p>
                        </div>

                        <div className="dropdowns">
                            <div className="col-md-6 course-detail-select">
                                <div className="label-div">Select a grade you wish to teach*

                                </div>
                                <Select
                                    className="dropdown-class"
                                    label="Select grade*"
                                    id="grade"
                                    name="grade"
                                    options={gradeValue}
                                    onChange={(value) => gradeHandler(value)}
                                    styles={dropdownSingleValueStyles}

                                />

                                {validation.gradeValTeacher && <span className="error-msg">Grade is required.</span>}

                            </div>

                            <div className="col-md-6 course-detail-select">

                                <div className="label-div">Select category*</div>

                                <Select
                                    className="dropdown-class"
                                    options={categories}
                                    placeholderButtonLabel="Select..."
                                    isMulti
                                    styles={dropdownMultiValueStyles}
                                    onChange={(value) => { setCategoryHandler(value); }}
                                />

                                {validation.subjectValTeacher && <span className="error-msg">Subjects are required.</span>}

                                <div className="col-md-6 course-detail-select mutiple-dropdown-part">

                                    <div className="flex-column">
                                        { showSubject
                             && (
                                 <Coursedetailsubjects
                                     label={`Select subject(s) for ${gradeVal?.label?.toUpperCase()}th grade*`}
                                     data={subjects}
                                     setSubjectVal={setSubjectVal}
                                     subjectVal={subjectVal}
                                     validation={validation}
                                     userType="Teacher"
                                     styles={dropdownSingleValueStyles}
                                 />
                             ) }

                                        {showCategories && (
                                            <CourseDetailsCategories
                                                label="Select Co-curricular activitie(s)*"
                                                data={coActivityValue}
                                                setCategoryVal={setCoCurricularActivities}
                                                categoryVal={coCurricularActivities}
                                                validation={validation}
                                                userType="Teacher"
                                            />
                                        )}

                                        <CourseDetailsCategories
                                            label="Do you have past teaching experience? If yes, please specify"
                                            data={experience}
                                            setCategoryVal={setPastExperience}
                                            categoryVal={pastExperience}
                                            validation={validation}
                                            userType="Teacher"
                                            onChange={(e) => onExperienceClick(e)}
                                        />
                                    </div>

                                    { pastExperience.includes('Yes') && (
                                        <input
                                            className="experience-field"
                                            onChange={(e) => setExperienceField(e.target.value)}
                                            type="text"
                                        />
                                    )}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="invisible-part">
                <button
                    onClick={() => setShowAddNewGrade(!showAddNewGrade)}
                    type="submit"
                    className="add-grade"
                    style={{
                        background: 'none',
                        border: 'none',
                        margin: '10px auto',
                    }}
                >ADD GRADE
                </button>

            </div>
            {showAddNewGrade && (
                <div className="step-body">

                    <div className="coursedetails-main">

                        <div className="heading-and-dropdown">
                            <div className="close-icon-container">
                                <button type="button" className="close-grade" onClick={() => setShowAddNewGrade(false)}>
                                    <img className="close-icon2" src={close} alt="close" />
                                </button>
                            </div>

                            <div className="dropdowns">
                                <div className="col-md-6 course-detail-select">
                                    <div className="label-div">Select a grade you wish to teach*

                                    </div>
                                    <Select
                                        className="dropdown-class"
                                        label="Select grade*"
                                        id="grade"
                                        name="grade"
                                        options={gradeValue}
                                        styles={dropdownSingleValueStyles}
                                        onChange={(value) => gradeHandler(value)}
                                    />

                                </div>

                                <div className="col-md-6 course-detail-select">

                                    <div className="label-div">Select category*</div>

                                    <Select
                                        className="dropdown-class"
                                        options={categories}
                                        placeholderButtonLabel="Select here"
                                        isMulti
                                        styles={dropdownMultiValueStyles}
                                        onChange={(value) => { setCategoryHandler2(value); }}
                                    />

                                    <div className="col-md-6 course-detail-select mutiple-dropdown-part">

                                        <div className="flex-column">
                                            { showSubject2
                             && (
                                 <Coursedetailsubjects
                                     label={`Select subject(s) for ${gradeVal?.label?.toUpperCase()}*`}
                                     data={subjects}
                                     setSubjectVal={setSubjectVal}
                                     subjectVal={subjectVal}
                                     validation={validation}
                                     userType={userType}
                                 />
                             ) }

                                            {showCategories2 && (
                                                <CourseDetailsCategories
                                                    label="Select Co-curricular activitie(s)*"
                                                    data={coActivityValue}
                                                    setCategoryVal={setCoCurricularActivities}
                                                    categoryVal={coCurricularActivities}
                                                    validation={validation}
                                                    userType={userType}
                                                />
                                            )}

                                            <CourseDetailsCategories
                                                label="Do you have past teaching experience
                                                ? If yes, please specify"
                                                data={experience}
                                                setCategoryVal={setPastExperience}
                                                categoryVal={pastExperience}
                                                validation={validation}
                                                userType="Student"
                                            />

                                        </div>
                                        { pastExperience.includes('Yes') && (
                                            <input
                                                className="experience-field"
                                                onChange={(e) => setExperienceField(e.target.value)}
                                                type="text"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            )}

            <div className="step-body">
                <div className="coursedetails-main">
                    <div className="heading-and-dropdown">

                        <div>
                            <TimeSlots
                                setTimeSlotMonday={setTimeSlotMonday}
                                setTimeSlotTuesday={setTimeSlotTuesday}
                                setTimeSlotWednesday={setTimeSlotWednesday}
                                setTimeSlotThursday={setTimeSlotThursday}
                                setTimeSlotFriday={setTimeSlotFriday}
                                setTimeSlotSaturday={setTimeSlotSaturday}
                                validation={validation}
                                timeslots={timeslots}
                                timeSlotValueonly={timeSlotMondayLabel}
                            />
                        </div>

                    </div>

                </div>

            </div>
        </div>

    );
};

TeacherRequirements.propTypes = {

    setSubjectVal: object.isRequired,
    subjectVal: array.isRequired,
    validation: object.isRequired,
    setGradeVal: object.isRequired,
    coCurricularActivities: array.isRequired,
    setCoCurricularActivities: object.isRequired,
    pastExperience: string.isRequired,
    setPastExperience: object.isRequired,
    setExperienceField: object.isRequired,
    setTimeSlotMonday: object.isRequired,
    setTimeSlotTuesday: object.isRequired,
    setTimeSlotWednesday: object.isRequired,
    setTimeSlotThursday: object.isRequired,
    setTimeSlotFriday: object.isRequired,
    setTimeSlotSaturday: object.isRequired,
    timeSlotMonday: string.isRequired,
    gradeVal: object.isRequired,
    fetchCoCurricularActivities: func.isRequired,
    coCurricular: object.isRequired,
    getAllGrades: func.isRequired,
    allGrades: object.isRequired,
    getAllTimeSlots: func.isRequired,
    timeSlots: object.isRequired,
    subjectsList: array.isRequired,
    getSubjectsAction: func.isRequired,
    getSubjectsByClassId: func.isRequired,
};

const mapStateToProps = (state) => ({
    coCurricular: state.Auth.CoCurricularActivities,
    allGrades: state.Auth.AllGrades,
    allSubjects: state.Auth.Subjects,
    timeSlots: state.Auth.timeSlots,
    subjectsList: state.Auth.subjects,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCoCurricularActivities: () => dispatch(coCurricularActivitiesAction()),
    getAllGrades: () => dispatch(getAllGradesAction()),
    getAllTimeSlots: () => dispatch(getAllTimeslots()),
    getSubjectsAction: () => dispatch(getAllSubjects()),
    getSubjectsByClassId: (data) => dispatch(getUniqueSubjectsAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherRequirements);
