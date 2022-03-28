import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
// import { leaves } from './mockData/calendar';
import { myLeavesListAction, cancelLeaveAction, applyLeaveAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';
import LeaveConfirmPopup from './LeaveConfirmPopup';

const MyLeaves = ({
    myLeavesList, myLeaves, applyLeaveResponse, cancelLeaveResponse
}) => {
    useEffect(() => {
        if (myLeaves?.length === 0) {
            const data = {
                status: 'approved',
                pageNumber: 1,
                limit: 5,
            };
            myLeavesList(data);
        }
    }, [myLeaves]);

    useEffect(() => {
        if (cancelLeaveResponse?.status === 'success') {
            const data = {
                status: 'approved',
                pageNumber: 1,
                limit: 5,
            };
            myLeavesList(data);
            // cancelLeave();
        }
    }, [cancelLeaveResponse]);

    useEffect(() => {
        if (applyLeaveResponse?.data) {
            const data = {
                status: 'approved',
                pageNumber: 1,
                limit: 5,
            };
            myLeavesList(data);
            // applyLeave();
        }
    }, [applyLeaveResponse]);

    const [model, setModel] = useState(false);
    const [selectedLeave, setSelectedLeave] = useState('');

    const [appliedFromDate, setAppliedFromDate] = useState('');
    const [appliedToDate, setAppliedToDate] = useState('');
    const [totalAppliedLeave, setTotalAppliedLeave] = useState('');

    const changeEditleave = (id) => {
        // cancelLeave();
        setModel(true);
        setSelectedLeave(id);
    };

    useEffect(() => {
        const oneDay = 24 * 60 * 60 * 1000;
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const selectedData = myLeaves?.data?.filter((leave) => leave._id === selectedLeave);

        let frmDate = new Date(selectedData && selectedData[0]?.from);
        const fromLeave = `${month[frmDate.getMonth()]} ${frmDate.getDate()}, ${frmDate.getFullYear()}`;
        setAppliedFromDate(fromLeave);
        frmDate = `${frmDate.getFullYear()}-${frmDate.getMonth() + 1}-${frmDate.getDate()}`;

        let toDate = new Date(selectedData && selectedData[0]?.to);
        const toLeave = `${month[toDate.getMonth()]} ${toDate.getDate()}, ${toDate.getFullYear()}`;
        setAppliedToDate(toLeave);
        toDate = `${toDate.getFullYear()}-${toDate.getMonth() + 1}-${toDate.getDate()}`;

        const fromLeaveDay = new Date(frmDate.replace(/-/g, ', '));
        const toLeaveDay = new Date(toDate.replace(/-/g, ', '));
        const totalLeaveDay = Math.round(Math.abs((fromLeaveDay - toLeaveDay) / oneDay));
        setTotalAppliedLeave(totalLeaveDay);
    }, [selectedLeave]);

    return (
        <>
            <div className="row leave-main">
                <h3>My leaves</h3>
                <div className="leave-table">
                    <table>
                        <thead>
                            <tr>
                                <td />
                                <td>FROM</td>
                                <td>TO</td>
                                <td className="comments">COMMENTS</td>
                                <td>STATUS</td>
                                <td />
                            </tr>
                        </thead>
                        <tbody>
                            {myLeaves?.data?.map((data, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data?.from?.split('T')[0]}</td>
                                    <td>{data?.to?.split('T')[0]}</td>
                                    <td>{data?.reason}</td>
                                    <td className={data?.status}><span className="dot" />{data?.status}</td>
                                    <td className="edit">{data?.status === 'pending' && <button type="button" className="edit" onClick={() => changeEditleave(data?._id)}>Edit</button>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <LeaveConfirmPopup
                model={model}
                handleModel={setModel}
                fromDate={appliedFromDate}
                toDate={appliedToDate}
                totalDay={totalAppliedLeave}
                selectedLeave={selectedLeave}
            />
        </>
    );
};

MyLeaves.propTypes = {
    myLeavesList: func.isRequired,
    myLeaves: array.isRequired,
    applyLeaveResponse: array.isRequired,
    cancelLeaveResponse: array.isRequired,
    cancelLeave: func.isRequired,
    applyLeave: func.isRequired,
};

const mapStateToProps = (state) => ({
    myLeaves: state.TeacherDashboard.myLeavesList,
    applyLeaveResponse: state.TeacherDashboard.applyLeave,
    cancelLeaveResponse: state.TeacherDashboard.cancelLeave,
});

const mapDispatchToProps = (dispatch) => ({
    myLeavesList: (data) => dispatch(myLeavesListAction(data)),
    cancelLeave: (id) => dispatch(cancelLeaveAction(id)),
    applyLeave: (data) => dispatch(applyLeaveAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyLeaves);
