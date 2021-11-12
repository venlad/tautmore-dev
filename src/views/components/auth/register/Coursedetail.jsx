import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    func, object, array, string,
} from 'prop-types';
import Select from 'react-select';
import csc from 'country-state-city';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import {
    exam,
} from './mockData/Coursedetailsdata';
// import Coursedetaildropdown from './Coursedetaildropdown';
import Coursedetailsubjects from './Coursedetailsubjects';
// import CoursedetailMultipledropdown from './CoursedetailMultipledropdown';
import { coCurricularActivitiesAction, getAllGradesAction, getUniqueSubjectsAction } from '../../../../stores/Auth/AuthAction';

const Coursedetail = ({
    coCurricularActivities,
    coCurricular,
    setCoActivity,
    countryVal,
    setCountryVal,
    stateVal,
    setStateVal,
    getAllGrades,
    allGrades,
    setGradeVal,
    setExamVal,
    getUniqueSubjects,
    allSubjects,
    validation,
    setSubjectVal,
    subjectVal,
}) => {
    const countries = csc.getAllCountries();
    const updatedCountries = countries.map((country) => ({
        label: country.name,
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
            const gdata = allSubjects?.response.map((data, index) => (
                { value: data, label: index }));
            setSubjectValue(gdata);
        }
    }, [allSubjects]);

    const gradeChange = (selected) => {
        setGradeVal(selected.value);
    };

    const examChange = (selected) => {
        const edata = selected.map((val) => (val.label));
        setExamVal(edata);
    };

    const activityChange = (selected) => {
        const adata = selected.map((val) => (val.value));
        setCoActivity(adata);
    };

    console.log(allSubjects, 'allSubjects');

    return (
        <div>
            <div className="coursedetails-main">
                <h3 className="text-center">
                    Course details - <span>Student 1</span>
                </h3>
                <div className="row">
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
                    />

                    <div className="col-md-6 course-detail-select mutiple-dropdown-part">
                        <div className="label-div">Select exam(s)</div>
                        <ReactMultiSelectCheckboxes
                            options={exam}
                            placeholderButtonLabel="Select..."
                            onChange={examChange}
                        />
                    </div>

                    <div className="col-md-6 course-detail-select mutiple-dropdown-part">
                        <div className="label-div">Select co-curricular activities</div>
                        <ReactMultiSelectCheckboxes
                            options={coActivityValue}
                            placeholderButtonLabel="Select..."
                            onChange={activityChange}
                        />
                    </div>
                </div>
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
    getUniqueSubjects: func.isRequired,
    allSubjects: array.isRequired,
    validation: object.isRequired,
    setSubjectVal: object.isRequired,
    subjectVal: array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Coursedetail);
