import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { func, string, bool } from 'prop-types';
import './changedetails.scss';
import { connect } from 'react-redux';
import { changeUniversityAction } from '../../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const ChangeUnivPopUp = ({
    id, model, handleModel, changeUniv,
}) => {
    const [newUniv, setUniv] = useState('');

    const onSaveClick = () => {
        console.log(id, 'on save Click');
        changeUniv({ id, univ: newUniv });
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
                <input onChange={(e) => setUniv(e.target.value)} className="name-input" type="text" name="name"  />
                <button onClick={() => onSaveClick()} className="save-button" type="button">Save</button>
            </Modal.Body>

        </Modal>
    );
};

ChangeUnivPopUp.propTypes = {
    handleModel: func.isRequired,
    model: bool.isRequired,
    changeUniv: func.isRequired,
    id: string.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    changeUniv: (data) => dispatch(changeUniversityAction(data)),
});

export default connect(null, mapDispatchToProps)(ChangeUnivPopUp);
