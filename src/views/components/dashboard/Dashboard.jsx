import React, { useState } from 'react';
import './dashboard.scss';
import Sidemenu from './Leftsidepart/Sidemenu';
import DashSearch from './Rightsidepart/DashSearch';
import Home from './Rightsidepart/Home';
import Mysubjects from './Rightsidepart/Mysubjects';
import Myconcept from './Rightsidepart/Myconcept';
import MyExam from './Rightsidepart/MyExam';
import MyAssignment from './Rightsidepart/MyAssignment/MyAssignment';
import MyClasses from './Rightsidepart/MyClass/MyClasses';
import MySubscription from './Rightsidepart/MySubscription/MySubscription';
import MyProfile from './Rightsidepart/MyProfile/MyProfile';


const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState('Dashboard');
    const [concept, setConcept] = useState('');
    // const [exam, setExam] = useState('');

    return (

        <div className={`dashboard-main ${open ? 'open' : 'close'}`}>
            <div className="row row-main">
                <Sidemenu
                    open={open}
                    setOpen={setOpen}
                    setView={setView}
                    view={view}
                    setConcept={setConcept}
                />
                <div className="col-sm-9 dashboard-right">
                    <DashSearch />
                    {view === 'Dashboard' && <Home />}
                    {view === 'My subjects' && concept === '' ? (
                        <Mysubjects
                            concept={concept}
                            setConcept={setConcept}
                        />
                    ) : ''}
                    {view === 'My subjects' && concept === 'concept' ? (
                        <Myconcept />
                    ) : ''}

                    {view === 'My exams' && (<MyExam  />) }

                    {view === 'My assignments' && (<MyAssignment  />) }

                    {view === 'My classes' && (<MyClasses  />) }

                    {view === 'My subscriptions' && (<MySubscription />)}

                    {view === 'Myprofile' && (<MyProfile />)}

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
