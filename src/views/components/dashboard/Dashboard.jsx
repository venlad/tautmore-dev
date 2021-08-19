import React, { useState } from 'react';
import './dashboard.scss';
import Sidemenu from './Leftsidepart/Sidemenu';
import DashSearch from './Rightsidepart/DashSearch';
import Home from './Rightsidepart/Home';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState('Dashboard');

    return (

        <div className={`dashboard-main ${open ? 'open' : 'close'}`}>
            <div className="row row-main">
                <Sidemenu open={open} setOpen={setOpen} setView={setView}  />
                <div className="col-sm-9 dashboard-right">
                    <DashSearch />
                    {view === 'Dashboard' && <Home />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
