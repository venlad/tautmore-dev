import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {
    func, bool, string, array, object,
} from 'prop-types';
import '../../teachers.scss';

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

    const history = useHistory();

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
                        <h3 style={{ fontSize: 30, textAlign: 'center', marginBottom: 10 }}>Meeting Details</h3>
                        <p style={{ fontSize: 20, textAlign: 'center' }}>
                            Please select the following details prior to the meeting
                        </p>
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>

                    <div style={{
                        fontSize: 15, color: 'black', marginBottom: 10,
                    }}
                    >Which chapter are you going to teach today?
                    </div>
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
                        style={{ marginBottom: 10 }}

                    />

                    <div
                        style={{
                            fontSize: 15, color: 'black', marginBottom: 10, marginTop: 10,
                        }}
                        className="label-div"
                    >Select a concept in selected chapter
                    </div>

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
                        style={{ display: 'none' }}
                    />

                    <div
                        style={{
                            fontSize: 15, color: 'black', marginBottom: 10,  marginTop: 10,
                        }}
                        className="label-div"
                    >Select a subtopic for the selected sub-topic
                    </div>

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
                        style={{ marginBottom: 10 }}
                    />

                    <Button style={{ marginTop: 20, marginLeft: 50 }} type="button" onClick={() => onAddDetailsClick()}>Click to Submit</Button>

                    <Link style={{ marginTop: 10 }} to="/zoomCall" target="_blank"> JOIN MEETING </Link>

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
