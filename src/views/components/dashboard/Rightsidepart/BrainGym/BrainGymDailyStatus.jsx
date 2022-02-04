import React from 'react';
import { string } from 'prop-types';
import presentImg from '../../../../../assets/images/braingym-mon.png';
import absentImg from '../../../../../assets/images/braingym-tue.png';
import futureDay from '../../../../../assets/images/braingym-days.png';
// import orangeBarImg from '../../../../../assets/images/braingym-monbar.png';
// import redBarImg from '../../../../../assets/images/braingym-tuebar.png';

const BrainGymDailyStatus = ({
    barValue, day, attendance,
}) => {
    let dayimg = '';
    let barColor = '';
    switch (attendance) {
        case 'present':
            dayimg = presentImg;
            barColor = '#FCA834';
            break;
        case 'absent':
            dayimg = absentImg;
            barColor = '#fd2a5b';
            break;

        default:
            dayimg = futureDay;
            break;
    }
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date();
    const Todaysday = weekday[d.getDay()];
    return (

        <div className="col-md-4 col-sm-12 col-12 braingym-day">
            <img src={dayimg} alt="Monday status" />
            <div className="braingym-bar" style={{ backgroundColor: barColor }}>
                {/* {barimg && <img src={barimg} alt="Monday status bar" />} */}
                <div>{barValue}</div>
            </div>
            <div
                style={
                    Todaysday === day ? {
                        color: '#FCA834',
                    } : {}
                }
                className="day"
            > {day}
            </div>
        </div>
    );
};
BrainGymDailyStatus.propTypes = {
    barValue: string.isRequired,
    attendance: string.isRequired,
    day: string.isRequired,

    // desc: string.isRequired,

};

export default BrainGymDailyStatus;
