import React, { useState } from 'react';
import {  string } from 'prop-types';
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

const Dashboard = ({ match }) => {
    const viewType = match.params.viewtype ? match.params.viewtype : '';
    const [open, setOpen] = useState(false);
    // const [view, setView] = useState('Dashboard');
    // const [concept, setConcept] = useState('');
    // const [renewSub, setRenewSub] = useState('');

    return (

        <div className={`dashboard-main ${open ? 'open' : 'close'}`}>
            <div className="row row-main">
                <Sidemenu
                    open={open}
                    setOpen={setOpen}
                    viewType={viewType}
                    // setView={setView}
                    // view={view}
                    // setConcept={setConcept}
                    // setRenewSub={setRenewSub}
                />
                <div className="col-sm-9 dashboard-right">
                    <DashSearch />
                    { viewType === ''
                    && <Home /> }
                    { viewType === 'My-subjects'
                        && <Mysubjects />}
                    { viewType === 'My-concept'
                    && <Myconcept /> }
                    { viewType === 'My-exams'
                    && <MyExam  /> }
                    { viewType === 'Brain-gym'
                    && <BrainGym /> }
                    { viewType === 'My-assignments'
                    && <MyAssignment  />}
                    { viewType === 'My-classes'
                    && <MyClasses  /> }
                    { viewType === 'My-subscriptions'
                    && <MySubscription /> }
                    { viewType === 'My-profile'
                    && <MyProfile />}
                    { viewType === 'Renew-subscription'
                    && <Renewsub  />}
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    match: string.isRequired,
};

export default Dashboard;
