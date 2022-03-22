/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import {
    func, bool, string, array, object,
} from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Spinner from 'react-bootstrap/Spinner';
import { rescheduleValidation } from './mockData/rescheduleData';
import { teacherSlotsPerDateAction, rescheduleClassAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';
import { chevRight } from '../../../../../assets/icons/IconList';

const ReschedulePopup = ({
    model,
    handleModel,
    scheduleId,
    teacherSlotsPerDate,
    teacherSlotsPerDateData,
    rescheduleClass,
    reScheduleClassData,
}) => {
    const [checked, setChecked] = useState('');
    const [timeError, setTimeError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (teacherSlotsPerDateData?.status === 'success') {
            setLoading(false);
        }
    }, [teacherSlotsPerDateData]);

    const rescheduleDateChange = (e, setFieldValue) => {
        setLoading(true);
        setFieldValue('rescheduleDate', e.target.value);
        teacherSlotsPerDate(e.target.value);
    };

    const handleClick = (time) => {
        setChecked(time);
        // eslint-disable-next-line no-unused-expressions
        checked !== '' && setTimeError(false);
    };

    const submitReschedule = (values) => {
        if (checked === '') {
            setTimeError(true);
            return;
        }
        if (values.rescheduleDate === '' || values.reason === '') {
            return;
        }
        const data = {
            schedule: scheduleId,
            date: values?.rescheduleDate,
            timeSlot: checked,
            reason: values?.reason,
        };
        rescheduleClass(data);
    };
    const modelHide = () => {
        handleModel(false);
        rescheduleClass();
    };

    const rescheduleContinue = () => {
        handleModel(false);
        rescheduleClass();
    };

    return (
        <Modal
            show={model}
            onHide={() => modelHide()}
            className="calendar-leave-popup reschedule-popup"
        >
            <Modal.Header closeButton>
                {reScheduleClassData?.status === 'success' ? <div />
                    : (
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <h3>Reschedule Class</h3>
                            <p>Please make sure you Re-schedule your class 1 day
                                prior and not on the same day
                            </p>
                        </Modal.Title>
                    )}
            </Modal.Header>
            <Modal.Body>
                <Formik
                    enableReinitialize
                    initialValues={{ rescheduleDate: '', reason: '' }}
                    validationSchema={rescheduleValidation}
                    // onSubmit={(data) => handleAddSubmit(data)}
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
                        <>
                            {reScheduleClassData?.status === 'success'
                                ? (
                                    <div className="reschedule-success">
                                        <h3>Class rescheduled successfully</h3>
                                        <button className="button-common" onClick={rescheduleContinue}>Continue <span>{chevRight}</span></button>
                                    </div>
                                )
                                : (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="label">Re-schedule date* </div>
                                        <Field
                                            type="date"
                                            name="rescheduleDate"
                                            onChange={(e) => rescheduleDateChange(e, setFieldValue)}
                                            value={values.rescheduleDate}
                                        /><br /> <br />
                                        {errors.rescheduleDate && touched.rescheduleDate ? (
                                            <div className="mt-25 ml-25 rp-manage-school_error-message">
                                                {errors.rescheduleDate}
                                            </div>
                                        ) : null}
                                        {loading ? <div className="timer-loader"><Spinner animation="border" variant="success" /></div>
                                            : teacherSlotsPerDateData?.data?.availableSlots
                                && (
                                    <>
                                        <div className="label">Time*</div>
                                        <div className="time-list-main">
                                            {teacherSlotsPerDateData?.data?.availableSlots?.map((val) => (
                                                <div
                                                    key={val}
                                                    className={'time-list'.concat(checked === val ? 'active' : '')}
                                                >

                                                    <label htmlFor={val.label} className="round">
                                                        <input type="radio" name="time" id={val} onClick={() => handleClick(val)} />
                                                        <span className="checkmark"  />
                                                    </label>
                                                    {val}
                                                </div>
                                            ))}
                                        </div>
                                        {timeError && <div className="mt-25 ml-25 rp-manage-school_error-message">Time is required</div>}
                                    </>
                                )}
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
                                        <div className="text-center">
                                            <button type="submit" onClick={() => submitReschedule(values)} className="button-common">Re-schedule <span>{chevRight}</span></button>
                                        </div>
                                    </Form>
                                )}

                        </>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
};

ReschedulePopup.propTypes = {
    model: bool.isRequired,
    handleModel: func.isRequired,
    scheduleId: string.isRequired,
    teacherSlotsPerDate: func.isRequired,
    teacherSlotsPerDateData: array.isRequired,
    rescheduleClass: func.isRequired,
    reScheduleClassData: object.isRequired,
};

const mapStateToProps = (state) => ({
    teacherSlotsPerDateData: state.TeacherDashboard.teacherSlotsPerDateData,
    reScheduleClassData: state.TeacherDashboard.rescheduleclassData,
});

const mapDispatchToProps = (dispatch) => ({
    teacherSlotsPerDate: (data) => dispatch(teacherSlotsPerDateAction(data)),
    rescheduleClass: (data) => dispatch(rescheduleClassAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReschedulePopup);
