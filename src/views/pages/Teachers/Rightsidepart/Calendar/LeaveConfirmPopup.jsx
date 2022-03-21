import React from 'react';
import { connect } from 'react-redux';
import {
    func, bool, string, array, object, number,
} from 'prop-types';
import { Modal } from 'react-bootstrap';
import './calendar.scss';
import { cancelLeaveAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';
import { chevRight } from '../../../../../assets/icons/IconList';

const LeaveConfirmPopup = ({
    model,
    handleModel,
    fromDate,
    toDate,
    totalDay,
    cancelLeave,
    selectedLeave,
    cancelLeaveResponse,
    Login,
}) => {
    const token = Login?.data?.accessToken;
    const changeLeave = () => {
        const data = {
            id: selectedLeave,
            token,
        };
        cancelLeave(data);
    };

    const hideModel = () => {
        cancelLeave('id');
        handleModel(false);
    };

    const continueList = () => {
        cancelLeave('id');
        handleModel(false);
    };

    return (

        <Modal
            show={model}
            onHide={hideModel}
            className="confirm-leave-popup"
        >

            {!cancelLeaveResponse?.status
            && <Modal.Header closeButton />}
            <Modal.Body>
                {!cancelLeaveResponse?.status
                    ? (
                        <div>
                            <h3>Do you want to cancel this leave?</h3>
                            <p>From Date: <span>{fromDate}</span></p>
                            <p>To Date: <span>{toDate}</span></p>
                            <p>Total Day: <span>{totalDay}</span></p>
                        </div>
                    )
                    : (
                        <div className="leave-cancel">
                            <h3>Leave cancelled for {totalDay} days!</h3>
                            <p>From {fromDate} to {toDate}</p>
                            <button
                                type="button"
                                className="button-common"
                                onClick={continueList}
                            >Continue <span>{chevRight}</span>
                            </button>
                        </div>
                    )}
            </Modal.Body>
            {!cancelLeaveResponse?.status
            && (
                <Modal.Footer>
                    <button type="button" className="button-common" onClick={changeLeave}>Yes <span>{chevRight}</span></button>
                    <button type="button" className="button-common" onClick={() => handleModel(false)}>No <span>{chevRight}</span></button>
                </Modal.Footer>
            )}
        </Modal>
    );
};

LeaveConfirmPopup.propTypes = {
    model: bool.isRequired,
    handleModel: func.isRequired,
    fromDate: string.isRequired,
    toDate: string.isRequired,
    totalDay: number.isRequired,
    cancelLeave: func.isRequired,
    selectedLeave: string.isRequired,
    cancelLeaveResponse: array.isRequired,
    Login: object.isRequired,
};

const mapStateToProps = (state) => ({
    cancelLeaveResponse: state.TeacherDashboard.cancelLeave,
    Login: state.Auth.Login,
});

const mapDispatchToProps = (dispatch) => ({
    cancelLeave: (data) => dispatch(cancelLeaveAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaveConfirmPopup);
