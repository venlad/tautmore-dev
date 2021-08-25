import React from 'react';
import {  bool, func } from 'prop-types';
import Logo from '../../../../assets/images/Logo.png';
import Profile from '../../../../assets/images/profileimage.jpeg';
import sidebardata from '../mockData/dashboardsidebardata';
import { menu } from '../../../../assets/icons/IconList';

function Sidemenu({ open, setOpen, setView }) {
    const toggleTrueFalse = () => {
        setOpen(!open);
    };

    const changeValue = (value) => {
        setView(value);
    };

    return (
        <div className=" dashboard-left col-sm-3">
            <div className="logo-profile">
                <img src={Logo} alt="logo" className="dashboard-logo" />
            </div>
            <div className="dashboard-profile">
                <div className="row">
                    <div className="col-sm-3 dashboard-profile-left text-center">
                        <img src={Profile} alt="profile" />
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
                                <li key={data.title} onClick={() => changeValue(data.title)} aria-hidden="true">
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
};

export default Sidemenu;
