import React from 'react';
import { display, clock } from '../../../../assets/icons/IconList';

const UpcomingclassShedule = ({
    color, bgcolor, title, desc, time,
}) => {
    const design = {
        color,
        backgroundColor: bgcolor,
    };

    return (
        <div className="row upcoming-shedule">
            <div className="col-md-2">
                <div className="icon" style={design}>
                    {display}
                </div>
            </div>
            <div className="col-md-4">
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
            <div className="col-md-3">
                <span>{clock} {time}</span>
            </div>
            <div className="col-md-3 upcoming-shedule-last">
                <button type="button">join class</button>
            </div>
        </div>
    );
};

export default UpcomingclassShedule;
