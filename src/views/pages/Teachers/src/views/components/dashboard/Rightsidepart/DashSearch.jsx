import React, { useState } from 'react';
import search from '../../../../assets/images/search.png';
import calendar from '../../../../assets/images/calendar.png';
import notification from '../../../../assets/images/notification.png';
import Notificationmenu from './Notificationmenu';

const DashSearch = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="">
            <div className="dashboard-right-search row">
                <div className="col-md-5 col-sm-4 col-12  dash-right-search-common">
                    <p><img src={search} alt="search" /> <input type="search" placeholder="Search" /></p>
                </div>
                <div className="col-md-4 col-sm-4 col-12 dash-right-search-common dash-common-calendar">
                    <p><img src={calendar} alt="calendar" /> Friday, july 15</p>
                </div>
                <div className="col-md-2 col-sm-3 col-12 dash-right-search-common dash-right-search-common-two">
                    <p><span className="xp" />You have <span>300</span> XP</p>
                </div>
                <div className="col-md-1 col-sm-1 col-12 dash-right-search-common dash-right-search-common-one">
                    <button type="button" onClick={() => setShow(!show)}><img src={notification} alt="notification" /></button>
                </div>
            </div>
            <Notificationmenu className={show} />
        </div>
    );
};

export default DashSearch;
