import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { FileUploader } from 'react-drag-drop-files';
import {
    func, object, array, string,
} from 'prop-types';
import Select from 'react-select';
import csc from 'country-state-city';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import UploadingIcon from '../../../../assets/images/upload.svg';
import {
    exam,
} from './mockData/Coursedetailsdata';
import Coursedetailsubjects from './Coursedetailsubjects';
import {
    coCurricularActivitiesAction, getAllGradesAction, getUniqueSubjectsAction, getAllUniversities,
    getAllQualifications,
} from '../../../../stores/Auth/AuthAction';
import { dropdownSingleValueStyles } from './customCssDef';
// import close from '../../../../assets/images/close.png';

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
    getUniversities,
    universitiesList,
    getAllQualificationsAction,
    qualificationsList,

}) => {
    const [universities, setUniversities] = useState([{ value: 1, label: '' }]);

    let inputFile = '';

    const uploadClick = (e) => {
        e.preventDefault();
        inputFile.click();
    };

    useEffect(() => {
        if (!universitiesList?.data) {
            getUniversities();
        }
        if (universitiesList?.data?.length > 0) {
            const cdata = universitiesList?.data.map((data) => (
                { value: data.universityName, label: data.universityName }));
            setUniversities(cdata);
        }
    }, [universitiesList]);

    console.log(universities);

    // Qualifications

    const [qualification1, setQualification1] = useState([{ value: 1, label: '' }]);

    useEffect(() => {
        if (!qualificationsList?.data) {
            getAllQualificationsAction();
        }
        if (qualificationsList?.data?.length > 0) {
            const cdata = qualificationsList?.data.map((data) => (
                { value: data.qualificationName, label: data.qualificationName }));
            setQualification1(cdata);
        }
    }, [qualificationsList]);

    console.log(qualification1);

    // coCurricularActivities

    const [coActivityValue, setcoActivityValue] = useState([{ value: 1, label: '' }]);

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

    // getAllGrades

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

    // getUniqueSubjects

    const [subjectValue, setSubjectValue] = useState([]);

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

    // DropZone Code

    // const fileTypes = ['JPG', 'PDF', 'docx'];
    const [documents, setDocuments] = useState([]);
    const [fileNames, setFileNames] = useState([]);

    console.log(documents);
    console.log(fileNames);

    const uploadFile = (e) => {
        e.persist();
        const images = [];
        setFileNames([...fileNames, e.target.files[0].name]);
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend =  () => {
            const reqData = {
                file_name: new Date().getTime().toString(36),
                base64_file: reader.result,
            };
            fetch(
                'https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/image/upload',
                {
                    method: 'POST',
                    headers: {
                        bucketKey: 'abc.pdf',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(reqData),
                },
            )
                .then((response) => response.json())
                .then((imgRes) => {
                    images.push(imgRes.response);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        };
        reader.readAsDataURL(file);
        setDocuments([...documents, images]);
    };

    // const handleChange = (event) => {
    //     const images = [];
    //     console.log(event);
    //     setFileNames([...fileNames, event.name]);
    //     const file = event;
    //     const reader = new FileReader();
    //     reader.onloadend =  () => {
    //         const reqData = {
    //             file_name: new Date().getTime().toString(36),
    //             base64_file: reader.result,
    //         };
    //         fetch(
    //             'https://y1z2gzytv3.execute-api.us-east-2.amazonaws.com/development/api/image/upload',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(reqData),
    //             },
    //         )
    //             .then((response) => response.json())
    //             .then((imgRes) => {
    //                 console.log(imgRes);
    //                 images.push(imgRes.response);
    //             })
    //             .catch((error) => {
    //                 console.error('Error:', error);
    //             });
    //     };
    //     reader.readAsDataURL(file);
    //     setDocuments([...documents, images]);
    // };

    //

    const countries = csc.getAllCountries();
    const updatedCountries = countries.map((country) => ({
        label: country.name,
        value: country.id,
        ...country,
    }));
    const updatedStates = (countryId) => csc
        .getStatesOfCountry(countryId)
        .map((state) => ({ label: state.name, value: state.id, ...state }));

    const gradeChange = (selected) => {
        setGradeVal(selected.value);
    };

    const examChange = (selected) => {
        setExamVal(selected.value);
    };

    const universityChange = (selected) => {
        setUniversity(selected);
    };

    const activityChange = (selected) => {
        const adata = selected.map((val) => (val.value));
        setCoActivity(adata);
    };

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

    console.log(university, 'UNIV');

    const changeQua = (data) => {
        setQualificationVal(data);
    };

    const removeAttachment = (item) => {
        setDocuments(documents.filter((item1) => item1 !== item));
        console.log(documents);
        setFileNames(fileNames?.filter((item2) => item2 !== item));
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
                            {validation.country && <span className="error-msg">Country is required.</span>}
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
                            {validation.state && <span className="error-msg">State is required.</span>}
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
                            {validation.grade && <span className="error-msg">Grade is required.</span>}
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
                                        options={qualification1}
                                        onChange={(val) => changeQua(val)}
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
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    ref={(input) => {
                                        inputFile = input;
                                    }}
                                    onChange={uploadFile}
                                    accept=".jpg,.pdf,.docx"
                                    name="filestore"
                                />
                                <p className="upload-text1"> Upload your education certificate
                                    <span className="orange" aria-hidden onClick={uploadClick}>here</span>
                                </p>
                                <div className="file-uploader">
                                    {/* <FileUploader
                                        label=""
                                        className="AA"
                                        handleChange={uploadFile}
                                        name="file"
                                        types={fileTypes}
                                    /> */}
                                    {/* <input type="file"
                                    handleChange={(e) => uploadFile(e)} /> */}
                                </div>

                                <p className="max-size">Maximum file size : 15MB</p>

                            </div>

                            {documents?.length > 0 && documents.map((item, i) => (

                                <p className="upload-notif">
                                    <img className="upload-image" src={UploadingIcon} alt="Upload" />

                                    {fileNames[i]}

                                    <button className="remove-file" type="button" onClick={() => removeAttachment(item)}>Delete File</button>

                                </p>

                            ))}

                        </div>

                    </div>

                ) }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    coCurricular: state.Auth.CoCurricularActivities,
    allGrades: state.Auth.AllGrades,
    allSubjects: state.Auth.Subjects,
    universitiesList: state.Auth.universities,
    qualificationsList: state.Auth.qualifications,

});

const mapDispatchToProps = (dispatch) => ({
    coCurricularActivities: () => dispatch(coCurricularActivitiesAction()),
    getAllGrades: () => dispatch(getAllGradesAction()),
    getUniqueSubjects: () => dispatch(getUniqueSubjectsAction()),
    getUniversities: () => dispatch(getAllUniversities()),
    getAllQualificationsAction: () => dispatch(getAllQualifications()),

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
    qualification: object.isRequired,
    university: string.isRequired,
    getUniversities: func.isRequired,
    universitiesList: array.isRequired,
    getAllQualificationsAction: func.isRequired,
    qualificationsList: array.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Coursedetail);
