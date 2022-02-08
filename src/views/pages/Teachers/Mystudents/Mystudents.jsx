import React from 'react';
import MyClassesTAB from './Myclassestab';

import '../teachers.scss';

const Mystudents = () => (
    <div>
        <div className="row">
            <div className="col-sm-3"><h1 className="mysujecthead">My students</h1></div>
            <div className="col-sm-9"><p className="totalstudents">45 Total students</p></div>
        </div>
        <div className="row">
            <div className="col-sm-8">
                <MyClassesTAB />
            </div>
            <div className="col-sm-4">
                search field
            </div>

        </div>

    </div>
);

export default Mystudents;
