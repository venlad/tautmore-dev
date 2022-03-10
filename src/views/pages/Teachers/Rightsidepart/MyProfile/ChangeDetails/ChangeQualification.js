import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {
    func, string, bool, array,
} from 'prop-types';
import './changedetails.scss';
import { connect } from 'react-redux';
import Select from 'react-select';
import { changeQualificationAction, getProfileAction } from '../../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const ChangeQualPopUp = ({
    qualificationsList, id, model, handleModel, changeQual, getProfile,
}) => {
    const [newQualification, setQualification] = useState('');
    const [selectedObject, setSelectedObject] = useState({});

    const onSaveClick = () => {
        changeQual({ id, qualification: selectedObject?.id });
        handleModel(false);
        getProfile();
    };

    const onSelectQualChange = (val) => {
        setSelectedObject(val);
        setQualification(val);
        console.log(newQualification);
    };

    return (
        <Modal
            show={model}
            onHide={() => handleModel(false)}
            className="change-course-details-pop-up"

        >
            <Modal.Header closeButton>
                <Modal.Title className="update-username">
                    <h3>Update Qualification</h3>

                </Modal.Title>

            </Modal.Header>
            <Modal.Body>

                <Select
                    className="select-modal"
                    options={qualificationsList}
                    onChange={(val) =>  onSelectQualChange(val)}
                    value={newQualification}
                />

                <button onClick={() => onSaveClick()} className="save-button" type="button">Save</button>
            </Modal.Body>

        </Modal>
    );
};

ChangeQualPopUp.propTypes = {
    qualificationsList: array.isRequired,
    handleModel: func.isRequired,
    model: bool.isRequired,
    changeQual: func.isRequired,
    id: string.isRequired,
    getProfile: func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    changeQual: (data) => dispatch(changeQualificationAction(data)),
    getProfile: () => dispatch(getProfileAction()),

});

export default connect(null, mapDispatchToProps)(ChangeQualPopUp);
