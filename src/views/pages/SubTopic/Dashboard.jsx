import React, { useState } from 'react';
import '../../components/dashboard/dashboard.scss';
import DashSearch from '../../components/dashboard/Rightsidepart/DashSearch';
import Sidemenu from '../../components/dashboard/Leftsidepart/Sidemenu';
import Myconcept from '../../components/dashboard/Rightsidepart/Myconcept';

const Dashboard = () => {
    const [open, setOpen] = useState(false);

    return (

        <div className={`dashboard-main ${open ? 'open' : 'close'}`}>
            <div className="row row-main dashboard-main-row">
                <Sidemenu
                    open={open}
                    setOpen={setOpen}
                    viewType="subject"
                />
                <div className="col-sm-9 dashboard-right">
                    <DashSearch />
                    <Myconcept />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
