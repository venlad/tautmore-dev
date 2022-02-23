import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { changeEmailAction } from '../../../../../../stores/TeacherDashboard/TeacherDashboardAction';

// import { Field } from 'formik';
import './changedetails.scss';

// import { connect } from 'react-redux';

const ChangeEmailPopUp = ({
    id, model, handleModel, changeEmail,
}) => {
    const [newEmail, setNewEmail] = useState('');

    const onSaveClick = () => {
        changeEmail({ id, email: newEmail });
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
    changeEmail: func.isRequired,
    id: string.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    changeName: (id, data) => dispatch(changeEmailAction(id, data)),
});

export default connect(null, mapDispatchToProps)(ChangeEmailPopUp);
