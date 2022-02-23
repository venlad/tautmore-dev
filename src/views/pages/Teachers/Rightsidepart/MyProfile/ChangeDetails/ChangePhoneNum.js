import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { func, string, bool } from 'prop-types';
import { connect } from 'react-redux';
import './changedetails.scss';

import { changePhoneNumberAction } from '../../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const ChangePhoneNumPopUp = ({
    id, model, handleModel, changePhoneNumber,
}) => {
    const [newPhoneNum, setPhoneNum] = useState('');

    const onSaveClick = () => {
        console.log(id, 'on save Click');
        console.log(newPhoneNum);
        changePhoneNumber({ id, phone: newPhoneNum });
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
                    <h3>Update phone number</h3>

                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <input onChange={(e) => setPhoneNum(e.target.value)} className="name-input" type="number" name="name"  />
                <button onClick={() => onSaveClick()} className="save-button" type="button">Save</button>
            </Modal.Body>

        </Modal>
    );
};

ChangePhoneNumPopUp.propTypes = {
    handleModel: func.isRequired,
    model: bool.isRequired,
    changePhoneNumber: func.isRequired,
    id: string.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    changePhoneNumber: (data) => dispatch(changePhoneNumberAction(data)),
});

export default connect(null, mapDispatchToProps)(ChangePhoneNumPopUp);
