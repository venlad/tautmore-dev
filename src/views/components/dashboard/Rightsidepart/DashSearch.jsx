import React, { useState } from 'react';
import { search, calendar, notificationsicon } from '../../../../assets/icons/IconList';
import Notificationmenu from './Notificationmenu';

const DashSearch = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="">
            <div className="dashboard-right-search row">
                <div className="col-md-5 col-sm-4 col-12  dash-right-search-common">
                    <p>{search} <input type="search" placeholder="Search" /></p>
                </div>
                <div className="col-md-4 col-sm-4 col-12 dash-right-search-common">
                    <p>{calendar}Friday, july 15</p>
                </div>
                <div className="col-md-2 col-sm-3 col-12 dash-right-search-common dash-right-search-common-two">
                    <p><span className="xp" />You have <span>300</span> XP</p>
                </div>
                <div className="col-md-1 col-sm-1 col-12 dash-right-search-common dash-right-search-common-one">
                    <button type="button" onClick={() => setShow(!show)}>{notificationsicon}</button>
                </div>
            </div>
            <Notificationmenu className={show} />
        </div>
    );
};

export default DashSearch;
