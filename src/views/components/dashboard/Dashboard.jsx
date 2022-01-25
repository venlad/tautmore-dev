import React, { useState } from 'react';
import {  object } from 'prop-types';
import './dashboard.scss';
import Sidemenu from './Leftsidepart/Sidemenu';
import DashSearch from './Rightsidepart/DashSearch';
import Home from './Rightsidepart/Home';
import Mysubjects from './Rightsidepart/Mysubjects';
import Myconcept from './Rightsidepart/Myconcept';
import MyAssignment from './Rightsidepart/MyAssignment/MyAssignment';
import MyExam from './Rightsidepart/MyExam';
import MyClasses from './Rightsidepart/MyClass/MyClasses';
import MySubscription from './Rightsidepart/MySubscription/MySubscription';
import MyProfile from './Rightsidepart/MyProfile/MyProfile';
import Renewsub from './Rightsidepart/RenewSubscription/Renewsub';
import BrainGym from './Rightsidepart/BrainGym/BrainGym';
import { viewTypeData } from './mockData/dashboardViewData';

const Dashboard = ({ match }) => {
    const viewType = match.params.viewtype ? match.params.viewtype : '';
    const [open, setOpen] = useState(false);
    // const [view, setView] = useState('Dashboard');
    // const [concept, setConcept] = useState('');
    // const [renewSub, setRenewSub] = useState('');

    const renderLayouts = () => {
        let view = <Home />;
        switch (viewType) {
            case '':
                view = <Home />;
                break;
            case viewTypeData?.SUBJECT:
                view = <Mysubjects />;
                break;
            case viewTypeData?.CONCEPT:
                view = <Myconcept />;
                break;
            case viewTypeData?.EXAMS:
                view = <MyExam  />;
                break;
            case viewTypeData?.BRAIN_GYM:
                view = <BrainGym />;
                break;
            case viewTypeData?.ASSIGNMENTS:
                view = <MyAssignment  />;
                break;
            case viewTypeData?.CLASSES:
                view = <MyClasses  />;
                break;
            case viewTypeData?.SUBSCRIPTIONS:
                view = <MySubscription />;
                break;
            case viewTypeData?.PROFILE:
                view = <MyProfile />;
                break;
            case viewTypeData?.RENEW_SUBSCRIPTION:
                view = <Renewsub  />;
                break;
            default:
                view = <Home />;
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

Dashboard.propTypes = {
    match: object.isRequired,
};

export default Dashboard;
