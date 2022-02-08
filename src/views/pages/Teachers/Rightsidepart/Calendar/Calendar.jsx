import React from 'react';
import './calendar.scss';
import { Link } from 'react-router-dom';
import { chevLeft, chevRight } from '../../../../../assets/icons/IconList';
import { calendar, timeTable, leaves } from './mockData/calendar';

const Calendar = () => (
    <div className="calendar-main">
        <div className="row calendar-head">
            <div className="col-md-7">
                <div>
                    <h3>Aug 2021</h3>
                    <div className="left-right-arrow">
                        <span className="arrow-common">
                            {chevLeft}
                        </span>
                        <span className="dot" />
                        <span className="arrow-common">
                            {chevRight}
                        </span>
                    </div>
                </div>
                <p>This calendar represents all the completed,
                    upcoming classes and leaves. You can also apply
                    leaves here and view leave history.
                </p>
            </div>
            <div className="col-md-5 text-right">
                <button type="button">APPLY LEAVE</button>
            </div>
            <div className="col-md-12 text-right">
                <div className="view-part">
                    <p>view</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                <div className="calendar-table">
                    <table>
                        {calendar?.map((data) => (
                            <tr>
                                <td className="border-bottom">{data?.day}</td>
                                {data?.date?.map((item) => (

                                    <td>{item}</td>
                                ))}
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <div className="col-md-4">
                <div className="time-table">
                    <div className="time-table-head">
                        <p>Wed, Aug 01, 2021</p>
                    </div>
                    <div className="time-table-body">
                        {timeTable?.map((data) => (
                            <div className="time-table-common">
                                <h5>{data?.time}</h5>
                                <p>{data?.subject}</p>
                                <Link to="/">View details</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

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
                        {leaves?.map((data, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{data?.from}</td>
                                <td>{data?.to}</td>
                                <td>{data?.comments}</td>
                                <td className={`${data?.status}`}><span className="dot" />{data?.status}</td>
                                <td className="edit">{data?.edit && 'Edit'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export default Calendar;
