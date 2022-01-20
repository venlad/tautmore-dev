import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    func, object, array, string,
} from 'prop-types';
import Select from 'react-select';
import csc from 'country-state-city';
// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import {
    exam, qualification, olympiadSubscriptionOptions, examTypesOptions,
} from './mockData/Coursedetailsdata';
// import Coursedetaildropdown from './Coursedetaildropdown';
import Coursedetailsubjects from './Coursedetailsubjects';
// import CoursedetailMultipledropdown from './CoursedetailMultipledropdown';
import { coCurricularActivitiesAction, getAllGradesAction, getUniqueSubjectsAction } from '../../../../stores/Auth/AuthAction';
import CoursedetailInput from './CoursedetailInput';
import CoursedetailChoosesub from './CoursedetailChoosesub';
import CoursedetailActivity from './CoursedetailActivity';

const Coursedetail = ({
    coCurricularActivities,
    coCurricular,
    coActivity,
    setCoActivity,
    countryVal,
    setCountryVal,
    stateVal,
    setStateVal,
    getAllGrades,
    allGrades,
    setGradeVal,
    setExamVal,
    setQualificationVal,
    getUniqueSubjects,
    allSubjects,
    validation,
    setSubjectVal,
    subjectVal,
    userType,
    stuFullname,
    setStuFullname,
    stuUsername,
    setStuUsername,
    olympiadSubscriptionVal,
    setOlympiadSubscriptionVal,
    olympiadExamVal,
    setOlympiadExamVal,
}) => {
    const countries = csc.getAllCountries();
    console.log(countries, 'countries from all');
    const updatedCountries = countries.map((country) => ({
        label: <div><img src={`https://flagcdn.com/16x12/${country.sortname.toLowerCase()}.png`} alt="..." />  {country.name}</div>,
        value: country.id,
        ...country,
    }));
    const updatedStates = (countryId) => csc
        .getStatesOfCountry(countryId)
        .map((state) => ({ label: state.name, value: state.id, ...state }));

    const [coActivityValue, setcoActivityValue] = useState([{ value: 1, label: '' }]);
    const [gradeValue, setGradeValue] = useState({ value: 1, label: '' });
    const [subjectValue, setSubjectValue] = useState([]);

    useEffect(() => {
        if (!coCurricular?.data) {
            coCurricularActivities();
        }
        if (coCurricular?.data?.length > 0) {
            const cdata = coCurricular?.data.map((data) => (
                { value: data._id, label: data.activityName }));
            setcoActivityValue(cdata);
        }
    }, [coCurricular]);

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

    useEffect(() => {
        if (!allSubjects?.response) {
            getUniqueSubjects();
        }
        if (allSubjects?.response?.length > 0) {
            const gdata = allSubjects?.response.map((data) => (
                { value: data, label: data }));
            setSubjectValue(gdata);
        }
    }, [allSubjects]);

    const gradeChange = (selected) => {
        setGradeVal(selected.value);
    };

    const examChange = (selected) => {
        setExamVal(selected.value);
    };

    const qualificationChange = (selected) => {
        setQualificationVal(selected.value);
    };

    const activityChange = (selected) => {
        const adata = selected.map((val) => (val.value));
        setCoActivity(adata);
    };

    const renderHeader = (type) => {
        switch (type) {
            case 'Student':
                return (
                    <h3 className="text-center">student<br /> details</h3>
                );
            case 'Teacher':
                return (
                    <h3 className="text-center"> MY EDUCATION</h3>
                );
            default:
                return (
                    <h3 className="text-center">No User Type|Error</h3>
                );
        }
    };

    return (
        <div>
            <div className="coursedetails-main">
                {renderHeader(userType)}
                {userType === 'Student'
                && (
                    <>
                        <div className="row">
                            <div className="col-md-6 course-detail-select">
                                <CoursedetailInput
                                    label="Full name*"
                                    type="text"
                                    name=""
                                    id="full-name"
                                    value={stuFullname}
                                    setValue={setStuFullname}
                                />
                                {validation.stuFullname && <span className="error-msg">Full name is required.</span>}
                            </div>

                            <div className="col-md-6 course-detail-select">
                                <CoursedetailInput
                                    label="Username*"
                                    type="text"
                                    name=""
                                    id="user-name"
                                    value={stuUsername}
                                    setValue={setStuUsername}
                                />
                                {validation.stuUsername && <span className="error-msg">Username is required.</span>}
                            </div>

                            <div className="col-md-6 course-detail-select">
                                <div className="label-div">Country*</div>
                                <Select
                                    id="country"
                                    name="country"
                                    label="country"
                                    options={updatedCountries}
                                    value={countryVal}
                                    onChange={(value) => {
                                        setCountryVal(value);
                                    }}
                                />
                                {validation.country && <span className="error-msg">country is required.</span>}
                            </div>
                            <div className="col-md-6 course-detail-select">
                                <div className="label-div">State*</div>
                                <Select
                                    id="state"
                                    name="state"
                                    options={updatedStates(countryVal ? countryVal.value : null)}
                                    value={stateVal}
                                    onChange={(value) => {
                                        setStateVal(value);
                                    }}
                                />
                                {validation.state && <span className="error-msg">state is required.</span>}
                            </div>
                            <div className="col-md-6 course-detail-select">
                                <div className="label-div">Select grade*</div>
                                <Select
                                    id="grade"
                                    name="grade"
                                    options={gradeValue}
                                    onChange={gradeChange}
                                />
                                {validation.grade && <span className="error-msg">grade is required.</span>}
                            </div>

                            <Coursedetailsubjects
                                label="Select subject(s)*"
                                data={subjectValue}
                                setSubjectVal={setSubjectVal}
                                subjectVal={subjectVal}
                                validation={validation}
                                userType={userType}
                            />

                            <div className="col-md-6 course-detail-select" style={{ display: 'none' }}>
                                <div className="label-div">Select exam(s)</div>
                                <Select
                                    id="exam"
                                    name="exam"
                                    options={exam}
                                    onChange={examChange}
                                />
                            </div>

                            <h3 className="text-center bottom-title">olympaid subscription</h3>
                            <p className="text-center bottom-desc">Select the type of subscription and the
                                type of exams you want to take
                            </p>
                            <div className="col-md-6 course-detail-select">
                                <div className="label-div">Olympaid Subscription*</div>
                                <Select
                                    name="olympaid-subscription"
                                    options={olympiadSubscriptionOptions}
                                    value={olympiadSubscriptionVal.value}
                                    onChange={(e) => setOlympiadSubscriptionVal(e.value)}
                                />
                                {validation.olympiadSubscription && <span className="error-msg">Olympiad Subscription is required.</span>}
                            </div>
                            <div className="col-md-6 course-detail-select mutiple-dropdown-part">
                                <div className="label-div">Select type of exam(s)*</div>
                                <Select
                                    name="olympaid-exam"
                                    options={examTypesOptions}
                                    value={olympiadExamVal}
                                    onChange={(e) => setOlympiadExamVal(e)}
                                    isMulti
                                />
                                {validation.olympiadExam && <span className="error-msg">Olympiad Exam is required.</span>}
                            </div>
                        </div>
                        <CoursedetailChoosesub
                            subjectValue={subjectValue}
                            setSubjectVal={setSubjectVal}
                            subjectVal={subjectVal}
                        />
                        <CoursedetailActivity
                            options={coActivityValue}
                            onChange={activityChange}
                            value={coActivity}
                        />
                        {validation.cocurricularActivity && <span className="error-msg">co-curricular Activity is required.</span>}
                    </>
                ) }
                {userType === 'Teacher'
                && (
                    <div className="col-md-6 course-detail-select mutiple-dropdown-part">
                        <div className="label-div">Qualification*</div>
                        <Select
                            label="Qualification*"
                            id="exam"
                            name="exam"
                            options={qualification}
                            onChange={qualificationChange}
                        />

                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    coCurricular: state.Auth.CoCurricularActivities,
    allGrades: state.Auth.AllGrades,
    allSubjects: state.Auth.Subjects,
});

const mapDispatchToProps = (dispatch) => ({
    coCurricularActivities: () => dispatch(coCurricularActivitiesAction()),
    getAllGrades: () => dispatch(getAllGradesAction()),
    getUniqueSubjects: () => dispatch(getUniqueSubjectsAction()),
});

Coursedetail.propTypes = {
    coCurricularActivities: func.isRequired,
    coCurricular: object.isRequired,
    setCoActivity: array.isRequired,
    countryVal: string.isRequired,
    stateVal: string.isRequired,
    setCountryVal: object.isRequired,
    setStateVal: object.isRequired,
    getAllGrades: func.isRequired,
    allGrades: object.isRequired,
    setGradeVal: object.isRequired,
    setExamVal: object.isRequired,
    setQualificationVal: object.isRequired,
    getUniqueSubjects: func.isRequired,
    allSubjects: array.isRequired,
    validation: object.isRequired,
    setSubjectVal: object.isRequired,
    subjectVal: array.isRequired,
    userType: string.isRequired,
    stuFullname: string.isRequired,
    setStuFullname: object.isRequired,
    stuUsername: string.isRequired,
    setStuUsername: object.isRequired,
    olympiadSubscriptionVal: string.isRequired,
    setOlympiadSubscriptionVal: func.isRequired,
    olympiadExamVal: array.isRequired,
    setOlympiadExamVal: func.isRequired,
    coActivity: array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Coursedetail);
