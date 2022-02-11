import React, { useState } from 'react';
import MyClassesTAB from './Myclassestab';
import Mystudentlisting from './Mystudentlisting';
import StudentDetail from './StudentDetail/StudentDetail';
import '../../teachers.scss';

const Mystudents = () => {
    const [students, setStudents] = useState('home');
    return (
        <>
            { students === 'home'
            && (
                <div>
                    <div className="row">
                        <div className="col-sm-3"><h1 className="heading">My students</h1></div>
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
                    <Mystudentlisting setStudents={setStudents} />

                </div>
            )}
            { students === 'studentDetail'
                && (
                    <StudentDetail setStudents={setStudents} />
                )}
        </>
    );
};

export default Mystudents;
