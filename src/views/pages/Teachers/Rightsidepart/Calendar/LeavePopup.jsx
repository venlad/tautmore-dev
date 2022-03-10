import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { func, bool, array } from 'prop-types';
import { Formik, Form, Field } from 'formik';
import './calendar.scss';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker, { registerLocale }  from 'react-datepicker';
import enGb from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';
import { leaveValidation } from './mockData/calendar';
import { applyLeaveAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';
import { chevRight } from '../../../../../assets/icons/IconList';

registerLocale('en-gb', enGb);
const LeavePopup = ({
    model, handleModel, applyLeaveResponse, applyLeave, loginDetail,
}) => {
    const [totalLeave, setTotalLeave] = useState('');
    const [appliedFromDate, setAppliedFromDate] = useState('');
    const [appliedToDate, setAppliedToDate] = useState('');
    const [totalAppliedLeave, setTotalAppliedLeave] = useState('');

    const fromDateChange = (e, setFieldValue, values) => {
        setFieldValue('fromDate', e);
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(`${e.getFullYear()}, ${e.getMonth() + 1}, ${e.getDate()}`);
        const secondDate = new Date(`${values?.toDate.getFullYear()}, ${values?.toDate.getMonth() + 1}, ${values?.toDate.getDate()}`);
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        if (!Number.isNaN(diffDays)) {
            setTotalLeave(diffDays);
        }
    };
    const toDateChange = (e, setFieldValue, values) => {
        setFieldValue('toDate', e);
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(`${e.getFullYear()}, ${e.getMonth() + 1}, ${e.getDate()}`);
        const secondDate = new Date(`${values?.fromDate.getFullYear()}, ${values?.fromDate.getMonth() + 1}, ${values?.fromDate.getDate()}`);
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        if (!Number.isNaN(diffDays)) {
            setTotalLeave(diffDays);
        }
    };
    const handleAddSubmit = (data) => {
        const value = {
            userId: loginDetail?.data?._id,
            userType: 'Teacher',
            from: moment(data?.fromDate).toISOString(),
            to: moment(data?.toDate).toISOString(),
            reason: data?.reason,
        };
        applyLeave(value);
    };

    useEffect(() => {
        if (applyLeaveResponse?.data) {
            const oneDay = 24 * 60 * 60 * 1000;
            const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            let frmDate = new Date(applyLeaveResponse?.data?.from);
            const fromLeave = `${month[frmDate.getMonth()]} ${frmDate.getDate()}, ${frmDate.getFullYear()}`;
            setAppliedFromDate(fromLeave);
            frmDate = `${frmDate.getFullYear()}-${frmDate.getMonth() + 1}-${frmDate.getDate()}`;

            let toDate = new Date(applyLeaveResponse?.data?.to);
            const toLeave = `${month[toDate.getMonth()]} ${toDate.getDate()}, ${toDate.getFullYear()}`;
            setAppliedToDate(toLeave);
            toDate = `${toDate.getFullYear()}-${toDate.getMonth() + 1}-${toDate.getDate()}`;

            const fromLeaveDay = new Date(frmDate.replace(/-/g, ', '));
            const toLeaveDay = new Date(toDate.replace(/-/g, ', '));
            const totalLeaveDay = Math.round(Math.abs((fromLeaveDay - toLeaveDay) / oneDay));
            setTotalAppliedLeave(totalLeaveDay);
        }
    }, [applyLeaveResponse]);

    const continueApplyLeave = () => {
        handleModel(false);
        applyLeave();
    };

    return (
        <Modal
            show={model}
            onHide={() => handleModel(false)}
            className="calendar-leave-popup"
        >   {!applyLeaveResponse?.data
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
                {applyLeaveResponse?.data
                    ? (
                        <div className="leave-applied">
                            { applyLeaveResponse?.data?.from && applyLeaveResponse?.data?.to
                                ? (
                                    <>
                                        <h3>Leave applied for {totalAppliedLeave} days!</h3>
                                        <p>From {appliedFromDate} to {appliedToDate}</p>
                                    </>
                                ) : <h3>{applyLeaveResponse?.data}</h3>}

                            <button type="button" className="button-common" onClick={continueApplyLeave}>Continue <span>{chevRight}</span></button>
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
                                    {/* <Field
                                        type="date"
                                        name="fromDate"
                                        onChange={(e) => fromDateChange(e, setFieldValue, values)}
                                        value={values.fromDate}
                                    /><br /> <br /> */}
                                    <DatePicker
                                        name="fromDate"
                                        dateFormat="MMMM dd, yyyy"
                                        locale="en-gb"
                                        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
                                        selected={values.fromDate}
                                        onChange={(e) => fromDateChange(e, setFieldValue, values)}
                                    /><br /> <br />

                                    {errors.fromDate && touched.fromDate ? (
                                        <div className="mt-25 ml-25 rp-manage-school_error-message">
                                            {errors.fromDate}
                                        </div>
                                    ) : null}
                                    <div className="label">To*</div>
                                    {/* <Field
                                        type="date"
                                        name="toDate"
                                        onChange={(e) => toDateChange(e, setFieldValue, values)}
                                        value={values.toDate}
                                    /><br /> <br /> */}
                                    <DatePicker
                                        name="toDate"
                                        dateFormat="MMMM dd, yyyy"
                                        locale="en-gb"
                                        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
                                        selected={values.toDate}
                                        onChange={(e) => toDateChange(e, setFieldValue, values)}
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
