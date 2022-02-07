import React from 'react';
import '../../../../components/dashboard/dashboard.scss';
import Student from '../../../../../assets/images/sidebar-profile.png';
import Mypayments from '../../mockData/MyPayments';
import '../../teachers.scss';

const MyPayments = () => (
    <>
        <div className="col-sm-12 topdivpad">
            <div className="row divbg">
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <img className="Clockicon" src={Student} alt="studentimg" />
                        </div>
                        <div className="col-sm-9">
                            <p className="paymentid">TM182902</p>
                            <p className="payeename">Diana Kent</p>

                        </div>
                    </div>

                </div>
                <div className="col-sm-3">
                    <p className="paymentid">Subjects</p>
                    <p className="payeename">Math, Eng</p>

                </div>
                <div className="col-sm-2">
                    <p className="paymentid">This month</p>
                    <p className="payeename">USD 399</p>
                </div>
                <div className="col-sm-2">
                    <p className="paymentid">Overall earned</p>
                    <p className="payeename">USD 2,978</p>
                </div>
                <div className="col-sm-2">
                    <p className="paymentid">Total classes</p>
                    <p className="payeename">112 <span className="paymentid">(24 this month)</span> </p>
                </div>

            </div>
        </div>
        <div className="col-sm-12 paymentsection">
            <h1>Payment history</h1>
            <table className="gfg">
                <tr>
                    <th> </th>
                    <th className="tableheadings">AMOUNT</th>
                    <th className="tableheadings">CREATED ON</th>
                    <th className="tableheadings">WORKING DAYS</th>
                    <th className="tableheadings">STATUS</th>
                    <th> </th>
                </tr>
                {Mypayments.map((item) => (
                    <tr className="tablerow">
                        <td>{item.id}</td>
                        <td className="td tabledatastyle">{item.amount}</td>
                        <td className="tabledatastyle">{item.created_on}</td>
                        <td className="tabledatastyle">{item.working_days}</td>
                        <td>{item.status === 'pending' ? <span className="pending"> Pending</span> : <span className="processed">Processed</span> }</td>
                        <td className="viewdetails">{item.details}</td>
                    </tr>
                ))}
            </table>
        </div>
    </>
);

export default MyPayments;
