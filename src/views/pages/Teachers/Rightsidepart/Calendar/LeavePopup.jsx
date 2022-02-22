import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { func, bool, array } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import './calendar.scss';
import { connect } from 'react-redux';
import { leaveValidation } from './mockData/calendar';
import { applyLeaveAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';
import { chevRight } from '../../../../../assets/icons/IconList';

const LeavePopup = ({
    model, handleModel, applyLeaveResponse, applyLeave, loginDetail,
}) => {
    const [totalLeave, setTotalLeave] = useState('');
    const leaveApplied = false;
    const fromDateChange = (e, setFieldValue, values) => {
        setFieldValue('fromDate', e.target.value);
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(e.target.value.replace(/-/g, ', '));
        const secondDate = new Date(values?.toDate.replace(/-/g, ', '));
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        if (!Number.isNaN(diffDays)) {
            setTotalLeave(diffDays);
        }
    };
    const toDateChange = (e, setFieldValue, values) => {
        setFieldValue('toDate', e.target.value);
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(values?.fromDate.replace(/-/g, ', '));
        const secondDate = new Date(e.target.value.replace(/-/g, ', '));
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        if (!Number.isNaN(diffDays)) {
            setTotalLeave(diffDays);
        }
    };
    const handleAddSubmit = (data) => {
        const value = {
            userId: loginDetail?.data?._id,
            userType: loginDetail?.data?.userType,
            from: `${data?.fromDate}T09:28:23.994Z`,
            to: `${data?.toDate}T09:28:23.994Z`,
            reason: data?.reason,
        };
        applyLeave(value);
    };
    console.log(applyLeaveResponse, 'applyLeaveResponse');
    return (
        <Modal
            show={model}
            onHide={() => handleModel(false)}
            className="calendar-leave-popup"
        >   {!leaveApplied
            && (
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h3>Apply for leave</h3>
                        <p>Please make sure you apply your leaves
                            1-2 days prior and not on the same day
                        </p>
                    </Modal.Title>
                </Modal.Header>
            )}
            <Modal.Body>
                { leaveApplied
                    ? (
                        <div className="leave-applied">
                            <h3>Leave applied for 3 days!</h3>
                            <p>From August 1, 2021 to August 3, 2021</p>
                            <button type="button" className="button-common" onClick={() => handleModel(false)}>Continue <span>{chevRight}</span></button>
                        </div>
                    )
                    : (
                        <Formik
                            enableReinitialize
                            initialValues={{ fromDate: '', toDate: '', reason: '' }}
                            validationSchema={leaveValidation}
                            onSubmit={(data) => handleAddSubmit(data)}
                            validator={() => ({})}
                        >
                            {({
                                errors,
                                touched,
                                values,
                                handleSubmit,
                                handleChange,
                                setFieldValue,
                            }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="label">From*</div>
                                    <Field
                                        type="date"
                                        name="fromDate"
                                        onChange={(e) => fromDateChange(e, setFieldValue, values)}
                                        value={values.fromDate}
                                    /><br /> <br />
                                    {errors.fromDate && touched.fromDate ? (
                                        <div className="mt-25 ml-25 rp-manage-school_error-message">
                                            {errors.fromDate}
                                        </div>
                                    ) : null}
                                    <div className="label">To*</div>
                                    <Field
                                        type="date"
                                        name="toDate"
                                        onChange={(e) => toDateChange(e, setFieldValue, values)}
                                        value={values.toDate}
                                    /><br /> <br />
                                    {errors.toDate && touched.toDate ? (
                                        <div className="mt-25 ml-25 rp-manage-school_error-message">
                                            {errors.toDate}
                                        </div>
                                    ) : null}
                                    <div className="label">Reason*</div>
                                    <Field
                                        type="textarea"
                                        name="reason"
                                        onChange={handleChange}
                                        value={values.reason}
                                    /><br /> <br />
                                    {errors.reason && touched.reason ? (
                                        <div className="mt-25 ml-25 rp-manage-school_error-message">
                                            {errors.reason}
                                        </div>
                                    ) : null}
                                    <p className="day-leave">{ totalLeave && `${totalLeave} days leave`}</p>
                                    <div className="text-center">
                                        <button type="submit" className="button-common">Apply leave <span>{chevRight}</span></button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
            </Modal.Body>
        </Modal>
    );
};

LeavePopup.propTypes = {
    handleModel: func.isRequired,
    model: bool.isRequired,
    applyLeaveResponse: array.isRequired,
    applyLeave: func.isRequired,
    loginDetail: array.isRequired,
};

const mapStateToProps = (state) => ({
    applyLeaveResponse: state.TeacherDashboard.applyLeave,
    loginDetail: state.Auth.Login,
});

const mapDispatchToProps = (dispatch) => ({
    applyLeave: (data) => dispatch(applyLeaveAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeavePopup);
