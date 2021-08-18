import React from 'react';
import { search, calendar, notificationsicon } from '../../../../assets/icons/IconList';

const DashSearch = () => (
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
                {notificationsicon}
            </div>
        </div>
    </div>
);

export default DashSearch;
