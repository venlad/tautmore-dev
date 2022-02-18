import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { leaves } from './mockData/calendar';
import { myLeavesListAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const MyLeaves = ({myLeavesList, myLeaves}) => {
    useEffect(() => {
        if (myLeaves?.length === 0) {
            console.log('yes not data');
            myLeavesList();
        }
    }, [myLeaves]);

    console.log(myLeaves, 'myLeaves from leave');

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
                                <td>{data?.to}</td>
                                <td>{data?.reason}</td>
                                <td className={`${data?.status}`}><span className="dot" />{data?.status}</td>
                                <td className="edit">{data?.edit && 'Edit'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    myLeaves: state.TeacherDashboard.myLeavesList,
});

const mapDispatchToProps = (dispatch) => ({
    myLeavesList: () => dispatch(myLeavesListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyLeaves);