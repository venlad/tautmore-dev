import React from 'react';
import bell from '../../../../../assets/images/bell.png';
import shape from '../../../../../assets/images/Shape.png';

export default function MyClassReschedule() {
    return (
        <div className="myclass-reschedule-rectanle">
            <div className="myclass-inside-rectangle row">
                <div className="col-md-1 myclass-bell">
                    <img src={bell} alt="bell-icon" />
                </div>
                <div className="col-md-4 myclass-reschedule">
                    <p>Your class has been rescheduled</p>
                </div>
                <div className="col-md-7 myclass-subject ">
                    <div className="myclass-inside-rectangle">
                        <div className="col-md-2 shape"><img src={shape} alt="shape-icon" /></div>

                        <div className="col-md-10 subject">
                            <p className="algebra">Algebra</p>
                            <p className="math">MATHEMATICS —  CONCEPT 2 </p>
                            <p className="previous"> <span className="span-one"> Previous date</span>  <span className="span-two">Tue 27th Jul 10:30 AM - 11:30 AM</span></p>
                            <p className="reschedule"><span className="span-one">Rescheduled </span>  <span className="span-two">Sat 31st Jul 10:30 AM - 11:30 AM</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
