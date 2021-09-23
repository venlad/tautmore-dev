import React from 'react';
import {  bool, func, string } from 'prop-types';
import sidebarLogo from '../../../../assets/images/sidebarlogo.png';
import Sidebarprofile from '../../../../assets/images/sidebar-profile.png';
import sidebardata from '../mockData/dashboardsidebardata';
import { menu } from '../../../../assets/icons/IconList';

function Sidemenu({
    open, setOpen, setView, view, setConcept,
}) {
    const toggleTrueFalse = () => {
        setOpen(!open);
    };

    const changeValue = (value) => {
        setView(value);
        setConcept('');
    };

    const profileValue = (value) => {
        setView(value);
    };

    return (
        <div className=" dashboard-left col-sm-3">
            <div className="logo-profile">
                <img src={sidebarLogo} alt="logo" className="dashboard-logo" />
            </div>
            <div className="dashboard-profile" aria-hidden="true" onClick={() => profileValue('Myprofile')}>
                <div className="row">
                    <div className="col-sm-3 dashboard-profile-left text-center">
                        <img src={Sidebarprofile} alt="profile" />
                    </div>
                    <div className="col-sm-6 dashboard-profile-center">

                        <h5>Susan Richards</h5>
                        <p>susan.9871245551</p>
                    </div>
                    <div
                        className="col-sm-3 text-center dashboard-profile-right"
                        onClick={toggleTrueFalse}
                        aria-hidden="true"
                    >
                        {menu}
                    </div>
                </div>
            </div>

            <div className="dashboard-overview dash-list-common ">
                {sidebardata?.map((item) => (
                    <div key={item.title}>
                        <h5>{item.title}</h5>
                        <ul>
                            {item?.data?.map((data) => (
                                <li key={data.title} onClick={() => changeValue(data.title)} className={view === data.title ? 'active' : ''} aria-hidden="true">
                                    <img src={data.image} alt="dash_list_img" />
                                    {data.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    );
}

Sidemenu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
    setView: func.isRequired,
    view: string.isRequired,
    setConcept: func.isRequired,
};

export default Sidemenu;
