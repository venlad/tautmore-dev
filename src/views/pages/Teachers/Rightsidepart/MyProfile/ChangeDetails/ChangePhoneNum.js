import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { func, string, bool } from 'prop-types';
import { connect } from 'react-redux';
import './changedetails.scss';
import PhoneInput from 'react-phone-input-2';

import '../../../../../components/auth/register/phoneStyle.css';

import { changePhoneNumberAction, getProfileAction } from '../../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const ChangePhoneNumPopUp = ({
    id, model, handleModel, changePhoneNumber, getProfile,
}) => {
    const [newPhoneNum, setPhoneNum] = useState('');
    const onSaveClick = () => {
        changePhoneNumber({ id, phone: newPhoneNum });
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
                    <h3>Update phone number</h3>

                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <div className="container-phone-number">
                    <PhoneInput
                        specialLabel=""
                        country="us"
                        className="phone-input"
                        inputStyle={{
                            fontSize: 16,
                            buttonStyle: {
                                display: 'none',
                            },

                        }}
                        onChange={(e) => setPhoneNum(e)}
                    />
                </div>

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
    getProfile: func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    changePhoneNumber: (data) => dispatch(changePhoneNumberAction(data)),
    getProfile: () => dispatch(getProfileAction()),

});

export default connect(null, mapDispatchToProps)(ChangePhoneNumPopUp);
