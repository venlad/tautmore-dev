import React from 'react';
import MyClassesTitle from '../MyexamTitle';
import MyClassesTAB from './MyClassesTab';
import MyClassesList from './MyClassesList';
import MyClassesCommon from './MyClassesCommon';
import MyClassReschedule from './MyClassReschedule';

export default function MyClasses() {
    return (
        <div className="myexam-main myclasses-main">
            <MyClassesTitle title="My upcoming classes - 3" status1="10 Classes Completed" status2="10 Classes left" />
            <MyClassesTAB />
            <div className="row">
                <div className="col-md-4 myexam-main-common-left">
                    <MyClassesCommon
                        topic="Algebra"
                        date="Tue 27th Jul"
                        time=" 10:30 AM - 11:30 AM"
                        join
                        test_audio_video
                    />
                </div>
                <div className="col-md-4 myexam-main-common-right">
                    <MyClassesCommon
                        topic="Algebra"
                        date="Tue 27th Jul"
                        time=" 10:30 AM - 11:30 AM"
                        startin="2 days 23:45 hours"
                    />
                </div>
                <div className="col-md-4 myexam-main-common-right">
                    <MyClassesCommon
                        topic="Algebra"
                        date="Tue 27th Jul"
                        time=" 10:30 AM - 11:30 AM"
                        startin="2 days 23:45 hours"
                    />
                </div>
            </div>
            <MyClassReschedule />
            <MyClassesTitle title="Completed classes history" />
            <MyClassesTAB dropdown />

            <MyClassesList />
        </div>

    );
}
