import React, { useState, useEffect } from 'react';
import {
    func, object,
} from 'prop-types';
import { connect } from 'react-redux';
import './calendar.scss';
import { Link } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import { chevLeft, chevRight } from '../../../../../assets/icons/IconList';
import LeavePopup from './LeavePopup';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { applyLeaveAction, getMyClassesAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';

const allViews = Object.keys(BigCalendar.Views).map((k) => BigCalendar.Views[k]);

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
moment.locale('es-es', {
    week: {
        dow: 1, // Monday is the first day of the week.
    },
});
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const Calendar = ({
    applyLeave, myClasses,
    getMyClasses,
}) => {
    const [calendarView, setCalendarView] = useState(false);
    const [model, setModel] = useState(false);
    const [myClassesList, setMyClassesList] = useState([]);

    console.log(myClassesList);

    console.log(moment('1994-07-01').format('DD-MM-YYYY'));

    useEffect(() => {
        if (!myClasses.data) {
            getMyClasses();
        }
        if (myClasses?.data) {
            const cdata = myClasses?.data[0]?.response?.map((data) => (
                {
                    grade: data?.gradeInfo?.name,
                    subject: data?.subjectInfo.name,
                    numberOfStudent: data?.numOfStudents,
                    date: data?.scheduleInfo?.date,
                    duration: data?.scheduleInfo?.duration,
                    timeslot: data?.scheduleInfo?.timeSlot,
                    startTime: data?.scheduleInfo?.startTime,
                    id: data?.scheduleInfo?._id,
                    startUrl: data?.scheduleInfo?.startUrl,

                }));
            setMyClassesList(cdata);
        }
    }, [myClasses]);

    const customEvent = myClassesList?.map((item) => ({
        id: item.id,
        name: item.subject,
        description: '',
        allDay: true,
        start: moment(item.date).format('MM-DD-YYYY'),
        end: moment(item.date).format('MM-DD-YYYY'),
        time: item.timeslot,
    }
    ));
    console.log(customEvent);

    const betterDate = new Date().toLocaleDateString('en-us', {
        weekday: 'long', year: 'numeric', month: 'short', day: 'numeric',
    });

    // const events = [
    //     {
    //         id: 0,
    //         name: 'Holiday',
    //         description: 'this is description',
    //         allDay: true,
    //         start: new Date(),
    //         end: new Date(),
    //     },
    //     {
    //         id: 0,
    //         name: 'two',
    //         description: 'desc two',
    //         allDay: true,
    //         start: '03-15-2022',
    //         end: 'Mon Mar 15 2022',
    //     },
    // ];
    const event = () => (
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

    const changeApplyLeave = () => {
        applyLeave();
        setModel(true);
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
                    <button type="button" className="leave" onClick={changeApplyLeave}>APPLY LEAVE</button>
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
                            events={customEvent}
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
                                <p>{betterDate}</p>
                            </div>
                            <div className="time-table-body">
                                {customEvent?.map((data) => (
                                    <div className="time-table-common">
                                        <h5>{data?.time}</h5>
                                        <p>{data?.name}</p>
                                        <Link to="/">View details</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* <MyLeaves /> */}
            <LeavePopup model={model} handleModel={setModel} />
        </div>
    );
};
Calendar.propTypes = {
    applyLeave: func.isRequired,
    myClasses: object.isRequired,
    getMyClasses: func.isRequired,

};

const mapStateToProps = (state) => ({
    myClasses: state.TeacherDashboard.myClasses,
    myClassesHistory: state.TeacherDashboard.myClassesHistory,
    getProfile: state.TeacherDashboard.getProfile,
});

const mapDispatchToProps = (dispatch) => ({
    applyLeave: (data) => dispatch(applyLeaveAction(data)),
    getMyClasses: () => dispatch(getMyClassesAction()),

});
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
