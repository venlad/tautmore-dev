import React from 'react';
import {  string } from 'prop-types';
import stopwatch from '../../../../assets/images/stopwatch.png';

const UpcomingclassShedule = ({
    displaygreen, displayorange, title, desc, time,
}) => (
    <div className="row upcoming-shedule">
        <div className="col-md-2 col-sm-2 col-12">
            <div className="icon">
                {
                    displaygreen && <img src={displaygreen} alt="display" />
                }

                {
                    displayorange && <img src={displayorange} alt="display" />
                }

            </div>
        </div>
        <div className="col-md-4 col-sm-4 col-12 shedule-title-desc">
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
        <div className="col-md-3 col-sm-3 col-12 shedule-clock">

            <span><img src={stopwatch} alt="stopwatch" /> {time}</span>
        </div>
        <div className="col-md-3 col-sm-3 col-12 upcoming-shedule-last">
            <button type="button">join class</button>
        </div>
    </div>
);

UpcomingclassShedule.propTypes = {
    title: string.isRequired,
    desc: string.isRequired,
    time: string.isRequired,
    displaygreen: string,
    displayorange: string,
};
UpcomingclassShedule.defaultProps = {
    displaygreen: '',
    displayorange: '',
};
export default UpcomingclassShedule;
