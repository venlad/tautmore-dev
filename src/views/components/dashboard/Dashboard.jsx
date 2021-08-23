import React, { useState } from 'react';
import './dashboard.scss';
import Sidemenu from './Leftsidepart/Sidemenu';
import DashSearch from './Rightsidepart/DashSearch';
import Home from './Rightsidepart/Home';
import Mysubjects from './Rightsidepart/Mysubjects';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState('Dashboard');

    return (

        <div className={`dashboard-main ${open ? 'open' : 'close'}`}>
            <div className="row row-main">
                <Sidemenu open={open} setOpen={setOpen} setView={setView} view={view}  />
                <div className="col-sm-9 dashboard-right">
                    <DashSearch />
                    {view === 'Dashboard' && <Home />}
                    {view === 'My subjects' && <Mysubjects />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
