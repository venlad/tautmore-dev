import React from 'react';
import '../../../../components/dashboard/dashboard.scss';
import '../../teachers.scss';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Studentimg from '../../../../../assets/images/studentimg.png';
import Mypayments from './mockData/Mypayments';
import Mypaymentsstudentdata from './mockData/Mypaymentsstudent';

const MyPayments = () => (
    <>
        <div className="col-sm-12 topdivpad">
            <div className="row divbg">
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <img className="Clockicon" src={Studentimg} alt="studentimg" />
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

        <div className="tabsection mypaymenttab">
            <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Payment history">
                    <div className="firsttabcontent">
                        <div className="col-sm-12 paymentsection">

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
                                    <tr className="tablerow" key={item.id}>
                                        <td>{item.id}</td>
                                        <td className="td tabledatastyle">{item.amount}</td>
                                        <td className="tabledatastyle">{item.created_on}</td>
                                        <td className="tabledatastyle">{item.working_days}</td>
                                        <td><div className="dotdiv">{item.status === 'pending' ? <div className="dot1"><span className="dothide">hi</span> </div> : <div className="dot2"><span className="dothide">hi</span> </div>}</div><div className="">{item.status === 'pending' ? <span className="pending"> Pending</span> : <span className="processed">Processed</span> }</div></td>
                                        <td className="viewdetails">{item.details}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>

                    </div>

                </Tab>

                <Tab eventKey="second" title="Students">
                    <div className="secondtabcontent">
                        <div className="col-sm-12 paymentsection">

                            <table className="gfg">
                                <tr>
                                    <th> </th>
                                    <th className="tableheadings">ID NO.</th>
                                    <th className="tableheadings">NAME</th>
                                    <th className="tableheadings">SUBJECTS</th>
                                    <th className="tableheadings">GRADE</th>
                                    <th className="tableheadings">STATUS</th>
                                    <th className="tableheadings">VIEW</th>
                                    <th> </th>
                                </tr>
                                {Mypaymentsstudentdata.map((item) => (
                                    <tr className="tablerow" key={item.id}>
                                        <td>{item.id}</td>
                                        <td className="paymentstdid">{item.id_number}</td>
                                        <td className="td tabledatastyle">{item.name}</td>
                                        <td className="tabledatastyle">{item.subjects}</td>
                                        <td className="tabledatastyle">{item.grade}</td>
                                        <td><div className="dotdiv">{item.status === 'active' ? <div className="dot1"><span className="dothide">hi</span> </div> : <div className="dot2"><span className="dothide">hi</span> </div>}</div><div className="">{item.status === 'active' ? <span className="pending"> Active</span> : <span className="processed">Inactive</span> }</div></td>
                                        <td className="viewdetails">{item.view}</td>

                                    </tr>
                                ))}
                            </table>
                        </div>

                    </div>

                </Tab>
            </Tabs>

        </div>
    </>

);

export default MyPayments;

// import React from 'react';
// import '../../../../components/dashboard/dashboard.scss';
// import Student from '../../../../../assets/images/studentimg.png';
// import Mypayments from '../../mockData/MyPayments';
// import '../../teachers.scss';

// const MyPayments = () => (
//     <>
//         <div className="col-sm-12 topdivpad">
//             <div className="row divbg">
//                 <div className="col-sm-3">
//                     <div className="row">
//                         <div className="col-sm-3">
//                             <img className="student-image" src={Student} alt="studentimg" />
//                         </div>
//                         <div className="col-sm-9">
//                             <p className="paymentid">TM182902</p>
//                             <p className="payeename">Diana Kent</p>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="col-sm-3">
//                     <p className="paymentid">Subjects</p>
//                     <p className="payeename">Math, Eng</p>

//                 </div>
//                 <div className="col-sm-2">
//                     <p className="paymentid">This month</p>
//                     <p className="payeename">USD 399</p>
//                 </div>
//                 <div className="col-sm-2">
//                     <p className="paymentid">Overall earned</p>
//                     <p className="payeename">USD 2,978</p>
//                 </div>
//                 <div className="col-sm-2">
//                     <p className="paymentid">Total classes</p>
//                     <p className="payeename">
// 112 <span className="paymentid">(24 this month)</span> </p>
//                 </div>

//             </div>
//         </div>
//         <div className="col-sm-12 paymentsection">
//             <h1>Payment history</h1>
//             <table className="gfg">
//                 <tr>
//                     <th> </th>
//                     <th className="tableheadings">AMOUNT</th>
//                     <th className="tableheadings">CREDITED ON</th>
//                     <th className="tableheadings">WORKING DAYS</th>
//                     <th className="tableheadings">STATUS</th>
//                     <th> </th>
//                 </tr>
//                 {Mypayments.map((item) => (
//                     <tr className="tablerow">
//                         <td>{item.id}</td>
//                         <td className="td tabledatastyle">{item.amount}</td>
//                         <td className="tabledatastyle">{item.created_on}</td>
//                         <td className="tabledatastyle">{item.working_days}</td>
//                         <td>{item.status === 'pending' ?
// <span className="pending"> Pending</span> : <span className="processed">Processed</span> }</td>
//                         <td className="viewdetails">{item.details}</td>
//                     </tr>
//                 ))}
//             </table>
//         </div>
//     </>
// );

// export default MyPayments;
