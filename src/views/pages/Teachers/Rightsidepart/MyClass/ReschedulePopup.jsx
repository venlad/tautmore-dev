import React, { useState } from 'react';
import { Modal, Dropdown } from 'react-bootstrap';
import { func, bool } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { rescheduleValidation } from './mockData/rescheduleData';

const ReschedulePopup = ({ model, handleModel }) => {
    const [ampmActive, setAmPmActive] = useState('am');
    // const [time, setTime] = useState({
    //     hour: '',
    //     minute: '',
    //     am_pm: '',
    // });

    const rescheduleDateChange = (e, setFieldValue) => {
        setFieldValue('rescheduleDate', e.target.value);
    };
    // const timeChange = (e, setFieldValue) => {
    //     setFieldValue('time', e.target.value);
    // };

    const amChange = () => {
        setAmPmActive('am');
    };
    const pmChange = () => {
        setAmPmActive('pm');
    };
    return (
        <Modal
            show={model}
            onHide={() => handleModel(false)}
            className="calendar-leave-popup reschedule-popup"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    <h3>Reschedule Class</h3>
                    <p>Please make sure you Re-schedule your class 1 day
                        prior and not on the same day
                    </p>
                </Modal.Title>
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
                            <div className="label">Time*</div>
                            {/* <Field
                                type="date"
                                name="time"
                                onChange={(e) => timeChange(e, setFieldValue)}
                                value={values.time}
                            />
                            <br /> <br />
                            {errors.time && touched.time ? (
                                <div className="mt-25 ml-25 rp-manage-school_error-message">
                                    {errors.time}
                                </div>
                            ) : null} */}
                            <Dropdown className="time-dropdown">

                                <Dropdown.Toggle>
                                    Select time
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <>
                                        <h5>ENTER TIME</h5>
                                        <div className="time-main">
                                            <div className="time-common">
                                                <input type="text" maxLength="2"  />
                                                <span>Hour</span>
                                            </div>
                                            <div className="time-center">
                                                <span>:</span>
                                            </div>
                                            <div className="time-common">
                                                <input type="number" min="0" max="60" onWheel={(e) => e.target.blur()}  />
                                                <span>Minute</span>
                                            </div>
                                            <div className="time-am-pm">
                                                <div>
                                                    <button
                                                        type="button"
                                                        className={`${ampmActive === 'am' ? 'active' : ''}`}
                                                        onClick={amChange}
                                                    >AM
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className={`${ampmActive === 'pm' ? 'active' : ''}`}
                                                        onClick={pmChange}
                                                    >PM
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="time-bottom">
                                            <button type="button">cancel</button>
                                            <button type="button">ok</button>
                                        </div>
                                    </>
                                </Dropdown.Menu>
                            </Dropdown> <br />
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
                                <button type="submit" className="button-common">Re-schedule</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
};

ReschedulePopup.propTypes = {
    model: bool.isRequired,
    handleModel: func.isRequired,
};

export default ReschedulePopup;
