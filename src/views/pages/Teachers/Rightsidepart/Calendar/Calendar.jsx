import React, { useState } from 'react';
import './calendar.scss';
import { Link } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import { chevLeft, chevRight } from '../../../../../assets/icons/IconList';
import {  timeTable } from './mockData/calendar';
import LeavePopup from './LeavePopup';
import MyLeaves from './MyLeaves';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const allViews = Object.keys(BigCalendar.Views).map((k) => BigCalendar.Views[k]);

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
moment.locale('es-es', {
    week: {
        dow: 1, // Monday is the first day of the week.
    },
});
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const Calendar = () => {
    const [calendarView, setCalendarView] = useState(false);
    const [model, setModel] = useState(false);

    const events = [
        {
            id: 0,
            name: 'Holiday',
            description: 'this is description',
            allDay: true,
            start: new Date(),
            end: new Date(),
        },
        {
            id: 0,
            name: 'two',
            description: 'desc two',
            allDay: true,
            start: new Date(),
            end: new Date(),
        },
    ];
    const event = ({ event }) => (
        <div className="event-main">
            {calendarView
                ? (
                    <div>
                        <p className="subject">{event.name}</p>
                        <p className="time">{event.description}</p>
                    </div>
                )
                : <div className="event-common" /> }
        </div>
    );

    const onNavigate = (e) => {
        console.log(e, 'e from navigate');
    };
    return (
        <div className="calendar-main">
            <div className="row calendar-head">
                <div className="col-md-7">
                    <div>
                        {/* <h3>Aug 2021</h3>
                    <div className="left-right-arrow">
                        <span className="arrow-common">
                            {chevLeft}
                        </span>
                        <span className="dot" />
                        <span className="arrow-common">
                            {chevRight}
                        </span>
                    </div> */}
                    </div>
                    <p className="desc">This calendar represents all the completed,
                        upcoming classes and leaves. You can also apply
                        leaves here and view leave history.
                    </p>
                </div>
                <div className="col-md-5 text-right">
                    <button type="button" className="leave" onClick={() => setModel(true)}>APPLY LEAVE</button>
                </div>
                <div className="col-md-12 text-right">
                    <div className="view-part">
                        <p>view</p>
                        <button type="button" onClick={() => setCalendarView(false)} className="menu">menu</button>
                        <button type="button" onClick={() => setCalendarView(true)} className="grid">grid</button>
                    </div>
                </div>
            </div>
            <div className={`row calendar-row ${calendarView ? 'full-view' : ''}`}>
                <div className={`${calendarView ? 'col-md-12' : 'col-md-8'}`}>
                    <div className="calendar-table">
                        <BigCalendar
                            events={events}
                            views={allViews}
                            step={60}
                            showMultiDayTimes
                            defaultDate={new Date()}
                            components={{
                                event,
                            }}
                            onNavigate={onNavigate}
                        />
                        {/* <table>
                        {calendar?.map((data) => (
                            <tr>
                                <td className="border-bottom">{data?.day}</td>
                                {data?.date?.map((item) => (

                                    <td>{item}</td>
                                ))}
                            </tr>
                        ))}
                    </table> */}
                    </div>
                </div>
                {!calendarView
                && (
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
                )}
            </div>
            <MyLeaves />
            <LeavePopup model={model} handleModel={setModel} />
        </div>
    );
};

export default Calendar;
