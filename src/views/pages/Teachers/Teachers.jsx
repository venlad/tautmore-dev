import React, { useState } from 'react';
import { object } from 'prop-types';
import '../../components/dashboard/dashboard.scss';
import Sidemenu from './Sidemenu';
import DashSearch from '../../components/dashboard/Rightsidepart/DashSearch';
import './teachers.scss';
import Home from './Rightsidepart/Home/Home';
import MyClass from './Rightsidepart/MyClass/MyClass';
import MySubjects from './Rightsidepart/MySubjects/MySubjects';
import MyStudents from './Rightsidepart/MyStudents/MyStudents';
import MyPayments from './Rightsidepart/MyPayments/MyPayments';
import Calendar from './Rightsidepart/Calendar/Calendar';
import MyProfile from './Rightsidepart/MyProfile/MyProfile';
import Myconcept from './Rightsidepart/MyStudents/StudentConcepts/MyConcepts';
import { viewTypeData } from './mockData/DashboardViewData';
import AssignmentsAndHomeWork from './Rightsidepart/MyStudents/Assignments/AssignmentsAndHomework';

const Teachers = ({ match }) => {
    const [open, setOpen] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const viewType = match.params.viewtype ? match.params.viewtype : '';

    const renderLayouts = () => {
        let view = <Home lgShow={lgShow} setLgShow={setLgShow} />;

        switch (viewType) {
            case 'home':
                view = <Home lgShow={lgShow} setLgShow={setLgShow} />;
                break;

            case 'subjects':
                view = <MySubjects  />;
                break;

            case 'students':
                view = <MyStudents lgShow={lgShow} setLgShow={setLgShow} />;
                break;

            case 'payments':
                view = <MyPayments lgShow={lgShow} setLgShow={setLgShow} />;
                break;

            case 'classes':
                view = <MyClass lgShow={lgShow} setLgShow={setLgShow} />;
                break;

            case viewTypeData?.CALENDAR:
                view = <Calendar />;
                break;

            case viewTypeData?.PROFILE:
                view = <MyProfile />;
                break;

            case viewTypeData?.MYCONCEPTS:
                view = <Myconcept />;
                break;

            case viewTypeData?.MYASSIGNMENTS:
                view = <AssignmentsAndHomeWork />;
                break;

            default:
                view = <Home lgShow={lgShow} setLgShow={setLgShow} />;
                break;
        }
        return view;
    };

    return (

        <div className={`dashboard-main ${open ? 'open' : 'close'}`}>
            <div className="row row-main">
                <Sidemenu
                    open={open}
                    setOpen={setOpen}
                    viewType={viewType}
                />
                <div className="col-sm-9 dashboard-right">
                    <DashSearch />
                    {renderLayouts()}
                </div>
            </div>
        </div>
    );
};

Teachers.propTypes = {
    match: object.isRequired,
};

export default Teachers;
