import React from 'react';
import UpcomingclassShedule from './UpcomingclassShedule';
import UpcomingProgress from './UpcomingProgress';

const Upcomingclass = () => (
    <div className="row upcoming-class">
        <div className="col-md-8">
            <div className="row">
                <div className="col-md-12">
                    <div className="row upcoming-common left">
                        <div className="col-md-6 first">
                            <h3>upcoming class</h3>
                        </div>
                        <div className="col-md-6 second">
                            <li>view all classes</li>
                        </div>
                        <UpcomingclassShedule color="#43AA8B" bgcolor="#E3FFF6" title="Mathematics" desc="Trigonometry - Concept 2" time="Starts in 2mins" />

                        <UpcomingclassShedule color="#F3722C" bgcolor="#FFE7D9" title="Science" desc="Chemistry - Concept 22" time="Today, 2:30 PM" />

                    </div>

                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="row upcoming-common right">
                        <h3>progress</h3>
                        <UpcomingProgress color="#F3722C" bgcolor="#FFE7D9" title="7" desc="Assignments pending" />
                        <UpcomingProgress color="#43AA8B" bgcolor="#E3FFF6" title="12 of 80" desc="Classes completed" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Upcomingclass;
