import React from 'react';
import UpcomingclassShedule from './UpcomingclassShedule';
import UpcomingProgress from './UpcomingProgress';
import displaygreen from '../../../../assets/images/displaygreen.png';
import displayorange from '../../../../assets/images/displayorange.png';
import noteorange from '../../../../assets/images/noteorange.png';

const Upcomingclass = () => (
    <div className="row upcoming-class">
        <div className="col-md-8 upcoming-left">
            <div className="row">
                <div className="col-md-12">
                    <div className="row upcoming-common left">
                        <div className="col-md-6 col-sm-6 col-12 first">
                            <h3>upcoming class</h3>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12 second">
                            <li>view all classes</li>
                        </div>
                        <UpcomingclassShedule displaygreen={displaygreen} title="Mathematics" desc="Trigonometry - Concept 2" time="Starts in 2mins" />

                        <UpcomingclassShedule displayorange={displayorange} title="Science" desc="Chemistry - Concept 22" time="Today, 2:30 PM" />

                    </div>

                </div>
            </div>
        </div>
        <div className="col-md-4 upcoming-right">
            <div className="row">
                <div className="col-md-12">
                    <div className="row upcoming-common right">
                        <h3>progress</h3>
                        <UpcomingProgress noteorange={noteorange} color="#F3722C" title="7" desc="Assignments pending" />
                        <UpcomingProgress displaygreen={displaygreen} color="#43AA8B" title="12 of 80" desc="Classes completed" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Upcomingclass;
