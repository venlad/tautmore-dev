import React from 'react';
import { object } from 'prop-types';

const MyClassListCommon = ({ val }) => (
    <div>
        <table className="table table-hover">
            <tbody>
                <tr>
                    <th scope="row" aria-label="Save"  />
                    <td>
                        <p>Subscribed for</p>
                        <h5>{val.subscribedFor}</h5>
                    </td>
                    {/* <td></td> */}
                    <td>
                        <p>Subscribed date</p>
                        <h5>{val.subscribedDate}</h5>
                    </td>
                    {/* <td></td> */}
                    <td>
                        <p>Duration</p>
                        <h5>{val.duration}</h5>
                    </td>
                    <td>
                        <p>Subjects</p>
                        <h5>{val.subjects}</h5>
                    </td>
                    <td>
                        <p>Exams</p>
                        <h5>{val.exams}</h5>
                    </td>
                    <td>
                        <p>Amount</p>
                        <h5>{val.amount}</h5>
                    </td>
                    <td>
                        <p>Next Renewal</p>
                        <h5>{val.nextRenewal}</h5>
                    </td>
                    {/* <td></td>
      <td><p>Subjects</p></td>
      <td><h5>{val.subjects}</h5></td>
      <td><p>Exams</p></td>
      <td><h5>{val.exams}</h5></td>
      <td><p>Amount</p></td>
      <td><h5>{val.amount}</h5></td>
      <td><p>Next Renewal</p></td>
      <td><h5>{val.nextRenewal}</h5></td> */}
                </tr>
            </tbody>
        </table>
    </div>
);

MyClassListCommon.propTypes = {
    val: object.isRequired,
};

export default MyClassListCommon;
