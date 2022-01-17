import React, { useState, useEffect }  from 'react';

import Select from 'react-select';
import {
    object, array, string, func,
} from 'prop-types';
// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { connect } from 'react-redux';
import {
    categories,
} from './mockData/Coursedetailsdata';
import Coursedetailsubjects from './Coursedetailsubjects';
import CourseDetailsCategories from './CourseDetailsCategories';
import { dropdownSingleValueStyles, dropdownMultiValueStyles } from './customCssDef';
import { coCurricularActivitiesAction, getAllGradesAction } from '../../../../stores/Auth/AuthAction';
import TimeSlots from './TimeSlots';
// import plusIcon from '../../../../assets/images/plus.png';

const TeacherRequirements = ({
    setSubjectVal, subjectVal, validation, setGradeVal,
    coCurricularActivities, setCoCurricularActivities, pastExperience, setPastExperience,
    setExperienceField, setTimeSlotMonday, setTimeSlotTuesday, setTimeSlotWednesday,
    setTimeSlotThursday, setTimeSlotFriday, setTimeSlotSaturday, timeSlotMonday, gradeVal,
    fetchCoCurricularActivities, coCurricular, getAllGrades, allGrades,
}) => {
    const [subjectValue, setSubjectValue] = useState([]);
    const [coCurricularActivities1, setCoCurricularActivities1] = useState([]);
    const [showSubject, setShowSubject] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showAddNewGrade, setShowAddNewGrade] = useState(false);

    console.log(gradeVal?.value);
    console.log(timeSlotMonday);

    const userType = 'Student';
    // console.log(fetchCoCurricularActivities(), 'cocurricular');

    const experience = [
        { value: 'Yes', label: 8 },
        { value: 'No', label: 9 }];

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

    console.log(coActivityValue, 'Co-Activity-Value');

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

    console.log(allGrades);

    // console.log(coCurricular, 'CoCurricular', coCurricular.data);

    useEffect(() => {
        setSubjectValue([
            { value: 'Chemistry', label: 0 },
            { value: 'English', label: 1 },
            { value: 'Mathematics', label: 2 },

        ]);

        setCoCurricularActivities1([
            { value: 'Singing', label: 4 },
            { value: 'Dancing', label: 5 },
            { value: 'Music', label: 6 },

        ]);
    }, []);

    let arrayOnly = [];

    const setCategoryHandler = (val) => {
        arrayOnly = val.map((item) => item.value);

        if (arrayOnly.includes('subjects') && arrayOnly.includes('co-curricular')) {
            setShowSubject(true);
            setShowCategories(true);
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

    const gradeHandler = (value) => {
        setGradeVal(value);
    };

    const onExperienceClick = (e) => {
        console.log(e, 'On experience click');
    };

    console.log(gradeValue);

    return (

        <div>
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
                                     data={subjectValue}
                                     setSubjectVal={setSubjectVal}
                                     subjectVal={subjectVal}
                                     validation={validation}
                                     userType={userType}
                                     styles={dropdownSingleValueStyles}
                                 />
                             ) }

                                    {showCategories && (
                                        <CourseDetailsCategories
                                            label="Select Co-curricular activitie(s)*"
                                            data={coCurricularActivities1}
                                            setCategoryVal={setCoCurricularActivities}
                                            categoryVal={coCurricularActivities}
                                            validation={validation}
                                            userType={userType}
                                        />
                                    )}

                                    <CourseDetailsCategories
                                        label="Do you have past teaching experience? If yes, please specify"
                                        data={experience}
                                        setCategoryVal={setPastExperience}
                                        categoryVal={pastExperience}
                                        validation={validation}
                                        userType={userType}
                                        onChange={(e) => onExperienceClick(e)}
                                    />
                                </div>

                                <input className="experience-field" onChange={(e) => setExperienceField(e.target.value)} type="text" />

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
                        >
                            ADD GRADE
                        </button>

                    </div>

                    {showAddNewGrade && (
                        <div>

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
                                        onChange={(value) => { setCategoryHandler(value); }}
                                    />

                                    <div className="col-md-6 course-detail-select mutiple-dropdown-part">

                                        <div className="flex-column">
                                            { showSubject
                             && (
                                 <Coursedetailsubjects
                                     label={`Select subject(s) for ${gradeVal?.label?.toUpperCase()}*`}
                                     data={subjectValue}
                                     setSubjectVal={setSubjectVal}
                                     subjectVal={subjectVal}
                                     validation={validation}
                                     userType={userType}
                                 />
                             ) }

                                            {showCategories && (
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
                                                userType={userType}
                                            />

                                        </div>
                                        <input
                                            className="experience-field"
                                            onChange={(e) => setExperienceField(e.target.value)}
                                            type="text"
                                        />
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

                        </div>

                    )}

                </div>

            </div>

            <div>
                <TimeSlots
                    setTimeSlotMonday={setTimeSlotMonday}
                    setTimeSlotTuesday={setTimeSlotTuesday}
                    setTimeSlotWednesday={setTimeSlotWednesday}
                    setTimeSlotThursday={setTimeSlotThursday}
                    setTimeSlotFriday={setTimeSlotFriday}
                    setTimeSlotSaturday={setTimeSlotSaturday}
                    validation={validation}
                />
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
};

const mapStateToProps = (state) => ({
    coCurricular: state.Auth.CoCurricularActivities,
    allGrades: state.Auth.AllGrades,
    allSubjects: state.Auth.Subjects,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCoCurricularActivities: () => dispatch(coCurricularActivitiesAction()),
    getAllGrades: () => dispatch(getAllGradesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherRequirements);
