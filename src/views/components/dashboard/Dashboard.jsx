import React, { useState } from 'react';
import './dashboard.scss';
import Sidemenu from './Leftsidepart/Sidemenu';
import DashSearch from './Rightsidepart/DashSearch';
import NextClass from './Rightsidepart/NextClass';
import Braingym from './Rightsidepart/Braingym';
import Activity from './Rightsidepart/Activity';

const Dashboard = () => {
    const [open, setOpen] = useState(false);

    return (

        <div className={`dashboard-main ${open ? 'open' : 'close'}`}>
            <div className="row row-main">
                <Sidemenu open={open} setOpen={setOpen} />
                <div className="col-sm-9 dashboard-right">
                    <DashSearch />
                    <NextClass />
                    <Braingym />
                    <Activity />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
