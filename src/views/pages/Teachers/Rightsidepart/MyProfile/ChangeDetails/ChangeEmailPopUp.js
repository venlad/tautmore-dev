import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { changeEmailAction, getProfileAction } from '../../../../../../stores/TeacherDashboard/TeacherDashboardAction';
import './changedetails.scss';

const ChangeEmailPopUp = ({
    id, model, handleModel, changeEmail, getProfile,
}) => {
    const [newEmail, setNewEmail] = useState('');

    const onSaveClick = () => {
        changeEmail({ id, email: newEmail });
        handleModel(false);
        getProfile();
    };

    return (
        <Modal
            show={model}
            onHide={() => handleModel(false)}
            className="change-name-pop-up"

        >
            <Modal.Header closeButton>
                <Modal.Title className="update-username">
                    <h3>Update Email</h3>

                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <input onChange={(e) => setNewEmail(e.target.value)} className="name-input" type="text" name="name"  />
                <button onClick={() => onSaveClick()} className="save-button" type="button">Save</button>
            </Modal.Body>

        </Modal>
    );
};

ChangeEmailPopUp.propTypes = {
    handleModel: func.isRequired,
    model: bool.isRequired,
    id: string.isRequired,
    changeEmail: func.isRequired,
    getProfile: func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    changeEmail: (data) => dispatch(changeEmailAction(data)),
    getProfile: () => dispatch(getProfileAction()),
});

export default connect(null, mapDispatchToProps)(ChangeEmailPopUp);
