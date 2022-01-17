import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FileUploader } from 'react-drag-drop-files';

// import Dropzone from 'react-dropzone';

import {
    func, object, array, string,
} from 'prop-types';
import Select from 'react-select';
import csc from 'country-state-city';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import UploadingIcon from '../../../../assets/images/upload.svg';
import {
    exam, degrees, universities,
} from './mockData/Coursedetailsdata';
// import Coursedetaildropdown from './Coursedetaildropdown';
import Coursedetailsubjects from './Coursedetailsubjects';
// import CoursedetailMultipledropdown from './CoursedetailMultipledropdown';
import { coCurricularActivitiesAction, getAllGradesAction, getUniqueSubjectsAction } from '../../../../stores/Auth/AuthAction';
import { dropdownSingleValueStyles } from './customCssDef';
import close from '../../../../assets/images/close.png';

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
    setQualificationVal,
    qualification,
    setUniversity,
    university,
    getUniqueSubjects,
    allSubjects,
    validation,
    setSubjectVal,
    subjectVal,
    userType,
}) => {
    // DropZone Code

    const fileTypes = ['JPG', 'PNG', 'GIF', 'docx'];
    const [file, setFile] = useState(null);
    const handleChange = (value) => {
        setFile(value);
        console.log(value);
    };

    //

    // console.log(coCurricularActivities(), 'Cocurricular from my details ');

    console.log(coCurricular, 'CoCurricular');

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
    // console.log(subjectValue);

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
        setExamVal(selected.value);
    };

    const universityChange = (selected) => {
        setUniversity(selected.value);
    };

    const activityChange = (selected) => {
        const adata = selected.map((val) => (val.value));
        setCoActivity(adata);
    };

    // console.log(allSubjects, 'allSubjects');

    const renderHeader = (type) => {
        switch (type) {
            case 'Student':
                return (
                    <h3 className="text-center">My details</h3>
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

    // console.log(qualification);
    console.log(university, 'UNIV');

    const changeQua = (data) => {
        console.log('yes change');
        console.log(data, 'data change');
        setQualificationVal(data);
    };

    return (
        <div>
            <div className="coursedetails-main">
                {renderHeader(userType)}
                {userType === 'Student'
                && (
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
                                styles={dropdownSingleValueStyles}

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
                                styles={dropdownSingleValueStyles}
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
                                styles={dropdownSingleValueStyles}
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

                        <div className="col-md-6 course-detail-select">
                            <div className="label-div">Select exam(s)</div>
                            <Select
                                id="exam"
                                name="exam"
                                options={exam}
                                onChange={examChange}
                                styles={dropdownSingleValueStyles}
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
                ) }
                {userType === 'Teacher'
                && (
                    <div className="coursedetails-main">

                        <div className="heading-and-dropdown">

                            <div className="dropdowns">
                                <div className="col-md-6 course-detail-select">
                                    <div className="label-div">Qualification*</div>
                                    <Select
                                        className="dropdown-class"
                                        options={degrees}
                                        onChange={(val) => changeQua(val)}
                                        // onChange={(value) =>  setQualificationVal(value)}
                                        value={qualification}
                                        styles={dropdownSingleValueStyles}
                                    />
                                    {validation.qualificationTeacher && <span className="error-msg">Qualification is required.</span>}

                                </div>

                                <div className="col-md-6 course-detail-select">
                                    <div className="label-div">University*</div>
                                    <Select
                                        className="dropdown-class"
                                        options={universities}
                                        onChange={(e) => universityChange(e)}
                                        value={university}
                                        styles={dropdownSingleValueStyles}
                                    />
                                    {validation.universityTeacher && <span className="error-msg">University is required.</span>}
                                </div>
                            </div>

                        </div>

                        <div className="upload-container">
                            <p className="">Upload</p>
                            <div className="dashed-border">

                                <p className="upload-text1"> Upload your education certificate <span className="orange">here</span></p>
                                <div className="file-uploader">
                                    <FileUploader
                                        label=" "
                                        className="AA"
                                        handleChange={handleChange}
                                        name="file"
                                        types={fileTypes}

                                    />
                                </div>

                                <p className="max-size">Maximum file size : 15MB</p>

                            </div>

                            {/* <div className="upload-notif">
                                <div>
                                    <img className="upload-image"
                                    src={UploadingIcon} alt="Upload" />

                                    <p> {file ? `Uploading${file.name}` : 'no files uploaded yet'}
                                    </p>
                                </div>

                            </div> */}

                            <p className="upload-notif"><img className="upload-image" src={UploadingIcon} alt="Upload" />

                                {file ? `Uploading${file.name}` : 'no files uploaded yet'}

                                <img className="close" src={close} alt="Upload" />
                            </p>

                        </div>

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
    setUniversity: object.isRequired,
    getUniqueSubjects: func.isRequired,
    allSubjects: array.isRequired,
    validation: object.isRequired,
    setSubjectVal: object.isRequired,
    subjectVal: array.isRequired,
    userType: string.isRequired,
    qualification: string.isRequired,
    university: string.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Coursedetail);
