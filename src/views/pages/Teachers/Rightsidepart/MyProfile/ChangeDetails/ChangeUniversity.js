import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {
    func, string, bool, array,
} from 'prop-types';
import './changedetails.scss';
import { connect } from 'react-redux';
import Select from 'react-select';
import { changeUniversityAction, getProfileAction } from '../../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const ChangeUnivPopUp = ({
    universitiesList, id, model, handleModel, changeUniv, getProfile,
}) => {
    const [newUniv, setUniv] = useState('');
    const [selectedObject, setSelectedObject] = useState({});

    console.log(universitiesList);

    const onSaveClick = () => {
        changeUniv({ id, univ: selectedObject?.id });
        handleModel(false);
        getProfile();
    };

    const onSelectUnivChange = (val) => {
        console.log(val, 'Selected University');
        setSelectedObject(val);
        setUniv(val);
        console.log(newUniv);
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
            <Modal.Body className="modal-body">
                <Select
                    className="select-modal"
                    options={universitiesList}
                    onChange={(val) =>  onSelectUnivChange(val)}
                    value={newUniv}
                />

                <button onClick={() => onSaveClick()} className="save-button" type="button">Save</button>
            </Modal.Body>

        </Modal>
    );
};

ChangeUnivPopUp.propTypes = {
    universitiesList: array.isRequired,
    handleModel: func.isRequired,
    model: bool.isRequired,
    changeUniv: func.isRequired,
    id: string.isRequired,
    getProfile: func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    changeUniv: (data) => dispatch(changeUniversityAction(data)),
    getProfile: () => dispatch(getProfileAction()),
});

export default connect(null, mapDispatchToProps)(ChangeUnivPopUp);
