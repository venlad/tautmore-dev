import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { func, string, bool } from 'prop-types';
import './changedetails.scss';
import { connect } from 'react-redux';
import { changeQualificationAction } from '../../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const ChangeQualPopUp = ({
    id, model, handleModel, changeQual,
}) => {
    const [newQualification, setQualification] = useState('');

    const onSaveClick = () => {
        changeQual({ id, qualification: newQualification });
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
                    <h3>Update Qualification</h3>

                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <input onChange={(e) => setQualification(e.target.value)} className="name-input" type="text" name="name"  />
                <button onClick={() => onSaveClick()} className="save-button" type="button">Save</button>
            </Modal.Body>

        </Modal>
    );
};

ChangeQualPopUp.propTypes = {
    handleModel: func.isRequired,
    model: bool.isRequired,
    changeQual: func.isRequired,
    id: string.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    changeQual: (data) => dispatch(changeQualificationAction(data)),
});

export default connect(null, mapDispatchToProps)(ChangeQualPopUp);
