import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { func, string, bool } from 'prop-types';
import './changedetails.scss';
import { connect } from 'react-redux';
import { changeNameAction } from '../../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const ChangeNamePopUp = ({
    id, model, handleModel, changeName,
}) => {
    const [newName, setNewName] = useState('');

    const onSaveClick = () => {
        changeName({ id, name: newName });
        handleModel(false);
    };

    return (
        <Modal
            show={model}
            onHide={() => handleModel(false)}
            className="change-name-pop-up"

        >
            <Modal.Header closeButton>
                <Modal.Title className="update-username">
                    <h3>Update Username</h3>

                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <input onChange={(e) => setNewName(e.target.value)} className="name-input" type="text" name="name"  />
                <button onClick={() => onSaveClick()} className="save-button" type="button">Save</button>
            </Modal.Body>

        </Modal>
    );
};

ChangeNamePopUp.propTypes = {
    handleModel: func.isRequired,
    model: bool.isRequired,
    changeName: func.isRequired,
    id: string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    changeName: (data) => dispatch(changeNameAction(data)),
});

export default connect(null, mapDispatchToProps)(ChangeNamePopUp);
