import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
// import { leaves } from './mockData/calendar';
import { myLeavesListAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const MyLeaves = ({ myLeavesList, myLeaves, applyLeaveResponse }) => {
    useEffect(() => {
        if (myLeaves?.length === 0 || applyLeaveResponse?.data) {
            myLeavesList();
        }
    }, [myLeaves, applyLeaveResponse]);

    return (
        <div className="row leave-main">
            <h3>My leaves</h3>
            <div className="leave-table">
                <table>
                    <thead>
                        <tr>
                            <td />
                            <td>FROM</td>
                            <td>TO</td>
                            <td>COMMENTS</td>
                            <td>STATUS</td>
                            <td />
                        </tr>
                    </thead>
                    <tbody>
                        {myLeaves?.data?.map((data, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{data?.from.split('T')[0]}</td>
                                <td>{data?.to.split('T')[0]}</td>
                                <td>{data?.reason}</td>
                                <td className={data?.status}><span className="dot" />{data?.status}</td>
                                <td className="edit">{data?.edit && 'Edit'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

MyLeaves.propTypes = {
    myLeavesList: func.isRequired,
    myLeaves: array.isRequired,
    applyLeaveResponse: array.isRequired,
};

const mapStateToProps = (state) => ({
    myLeaves: state.TeacherDashboard.myLeavesList,
    applyLeaveResponse: state.TeacherDashboard.applyLeave,
});

const mapDispatchToProps = (dispatch) => ({
    myLeavesList: () => dispatch(myLeavesListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyLeaves);
