import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    func, bool, string, array, object,
} from 'prop-types';

import Select from 'react-select';
import {
    getProfileAction, getChapterBySubjectAction,
    getConceptByChapterAction, getSubconceptByConceptAction, addTeachingHistoryAction,

} from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';

// import Spinner from 'react-bootstrap/Spinner';

const AddHistoryPopUp = ({
    model,
    handleModel,
    myProfile, getMyProfile,
    latestClass,
    chapterBySubject,
    conceptByChapter,
    subconceptByConcept,
    getChapterBySubject,
    getConceptByChapter,
    getSubconceptByConcept,
    addTeachingHistory,
}) => {
    useEffect(() => {
        if (myProfile.length === 0) {
            getMyProfile();
        }
    }, [myProfile]);

    // FOR CHAPTERS
    const [selectedChapter, setSelectedChapter] = useState('');
    const [selectedChapterId, setSelectedChapterId] = useState('');
    const [chapterListBySubject, setChapterListBySubject] = useState([{ value: '', id: '' }]);

    useEffect(() => {
        if (latestClass?.subjectInfo._id) {
            getChapterBySubject({ subject_id: latestClass?.subjectInfo._id });
        }
    }, [latestClass?.subjectInfo._id]);

    const scheduleId = latestClass?.scheduleInfo?._id;

    console.log(latestClass);

    useEffect(() => {
        const cData = chapterBySubject?.data?.map((item) => ({
            value: item.name,
            label: item.name,
            id: item._id,
        }));

        setChapterListBySubject(cData);
    }, [chapterBySubject]);

    // FOR CONCEPTS

    const [selectedConcept, setSelectedConcept] = useState('');
    const [selectedConceptId, setSelectedConceptId] = useState('');
    const [conceptListByChapter, setConceptListbyChapter] = useState([{ value: '', id: '' }]);

    useEffect(() => {
        getConceptByChapter({ chapterId: selectedChapterId });
    }, [selectedChapterId]);

    useEffect(() => {
        const cData2 = conceptByChapter?.data?.map((item) => ({
            value: item.name,
            label: item.name,
            id: item._id,
        }));

        setConceptListbyChapter(cData2);
    }, [conceptByChapter]);

    // FOR SUB TOPICS

    const [subConceptList, setSubConceptList] = useState([{ value: '', id: '' }]);
    const [selectedSubConcept, setSelectedSubConcept] = useState('');
    const [selectedSubConceptId, setSelectedSubConceptId] = useState('');

    useEffect(() => {
        getSubconceptByConcept({ conceptId: selectedConceptId });
    }, [selectedConceptId]);

    useEffect(() => {
        const cData2 = subconceptByConcept?.data?.map((item) => ({
            value: item.name,
            label: item.name,
            id: item._id,
        }));

        setSubConceptList(cData2);
    }, [subconceptByConcept]);

    const modelHide = () => {
        handleModel(false);
    };

    console.log(scheduleId);
    console.log(selectedChapter, selectedConcept, selectedSubConcept);

    const historyData = {
        schedule: scheduleId,
        chapter: selectedChapterId,
        chapterName: selectedChapter,
        concept: selectedConceptId,
        conceptName: selectedConcept,
        subConcept: selectedSubConceptId,
        subConceptName: selectedSubConcept,

    };

    const onAddDetailsClick = () => {
        addTeachingHistory(historyData);
    };

    return (
        <div className="modal-div">
            <Modal
                show={model}
                onHide={() => modelHide()}
                className="add-history-modal"

            >
                <Modal.Header closeButton>

                    <Modal.Title>
                        <h3 className="pop-up-heading">Meeting Details</h3>
                        <p>Please select the following details prior to the meeting
                        </p>
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>

                    <div className="label-div">Which chapter are you going to teach today?</div>
                    <Select
                        id="chapters"
                        name="chapter"
                        placeholder="Select chapter"
                        options={chapterListBySubject}
                        value={selectedChapter.label}
                        onChange={(value) => {
                            setSelectedChapter(value.label);
                            setSelectedChapterId(value.id);
                        }}

                    />

                    <div className="label-div">Select a concept</div>

                    <Select
                        id="chapters"
                        name="chapter"
                        placeholder="Select concept"
                        options={conceptListByChapter}
                        value={selectedConcept.label}
                        onChange={(value) => {
                            setSelectedConcept(value.label);
                            setSelectedConceptId(value.id);
                        }}
                    />

                    <div className="label-div">Select a subtopic</div>

                    <Select
                        id="chapters"
                        name="chapter"
                        placeholder="Select sub-concept"
                        options={subConceptList}
                        value={selectedSubConcept.label}
                        onChange={(value) => {
                            setSelectedSubConcept(value.label);
                            setSelectedSubConceptId(value.id);
                        }}
                    />

                    <button type="button" onClick={onAddDetailsClick}>Click to Submit</button>

                    <Link to="/zoomCall" target="_blank"> JOIN MEETING </Link>

                </Modal.Body>
            </Modal>
        </div>
    );
};

AddHistoryPopUp.propTypes = {
    model: bool.isRequired,
    handleModel: func.isRequired,
    myProfile: object.isRequired,
    getMyProfile: func.isRequired,
    latestClass: object.isRequired,
    chapterBySubject: array.isRequired,
    conceptByChapter: array.isRequired,
    subconceptByConcept: array.isRequired,
    getChapterBySubject: func.isRequired,
    getConceptByChapter: func.isRequired,
    getSubconceptByConcept: func.isRequired,
    addTeachingHistory: func.isRequired,

};

const mapStateToProps = (state) => ({
    myProfile: state.TeacherDashboard.getProfile,
    chapterBySubject: state.TeacherDashboard.chapterBySubject,
    conceptByChapter: state.TeacherDashboard.conceptByChapter,
    subconceptByConcept: state.TeacherDashboard.subconceptByConcept,

});

const mapDispatchToProps = (dispatch) => ({
    getMyProfile: () => dispatch(getProfileAction()),
    getChapterBySubject: (data) => dispatch(getChapterBySubjectAction(data)),
    getConceptByChapter: (data) => dispatch(getConceptByChapterAction(data)),
    getSubconceptByConcept: (data) => dispatch(getSubconceptByConceptAction(data)),
    addTeachingHistory: (data) => dispatch(addTeachingHistoryAction(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddHistoryPopUp);
