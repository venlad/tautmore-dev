import React from 'react';
import { number, object } from 'prop-types';

const MyClassListCommon = ({ val, index }) => (
    <tr>
        <th>{index + 1}</th>
        <td>
            <p>Subscribed for</p>
            <h5>{val.subscribedFor}</h5>
        </td>
        <td>
            <p>Subscribed date</p>
            <h5>{val.subscribedDate}</h5>
        </td>
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
    </tr>

);

MyClassListCommon.propTypes = {
    val: object.isRequired,
    index: number.isRequired,
};

export default MyClassListCommon;
