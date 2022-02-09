import React from 'react';
import { Modal } from 'react-bootstrap';
import { func, bool } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import './calendar.scss';
import { leaveValidation } from './mockData/calendar';

const LeavePopup = ({ model, handleModel }) => (
    <Modal
        show={model}
        onHide={() => handleModel(false)}
        className="calendar-leave-popup"
    >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                <h3>Apply for leave</h3>
                <p>Please make sure you apply your leaves 1-2 days prior and not on the same day</p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Formik
                enableReinitialize
                initialValues={{ fromDate: '', toDate: '', reason: '' }}
                validationSchema={leaveValidation}
                // onSubmit={(data) => handleAddSubmit(data)}
                validator={() => ({})}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleSubmit,
                    handleChange,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="label">From*</div>
                        <Field
                            type="date"
                            name="fromDate"
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                        <div className="text-center">
                            <button type="submit" className="button-common">Apply leave</button>
                            {/* <Button content="Apply leave" /> */}
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal.Body>
    </Modal>
);

LeavePopup.propTypes = {
    handleModel: func.isRequired,
    model: bool.isRequired,
};

export default LeavePopup;
