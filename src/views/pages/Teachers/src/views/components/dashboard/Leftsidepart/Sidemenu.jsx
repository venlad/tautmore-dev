import React from 'react';
import { connect } from 'react-redux';
import {  bool, func, string } from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import sidebarLogo from '../../../../assets/images/sidebarlogo.png';
import Sidebarprofile from '../../../../assets/images/sidebar-profile.png';
import { sidebardata, accountData } from '../mockData/dashboardsidebardata';
import { menu } from '../../../../assets/icons/IconList';

import logouticon from '../../../../assets/images/logouticon.png';
import { clearLoginAction } from '../../../../stores/Auth/AuthAction';

const Sidemenu = ({
    open, setOpen, setView, view, setConcept, setRenewSub, clearLogin,
}) => {
    const history = useHistory();
    const logOut = () => {
        localStorage.removeItem('taut-student');
        clearLogin();
        history.push('/');
    };
    const toggleTrueFalse = () => {
        setOpen(!open);
    };

    const changeValue = (value) => {
        setView(value);
        setConcept('');
        setRenewSub('');
    };

    const profileValue = (value) => {
        setView(value);
    };

    return (
        <div className=" dashboard-left col-sm-3">
            <div className="logo-profile">
                <Link to="/"><img src={sidebarLogo} alt="logo" className="dashboard-logo" /></Link>
            </div>
            <div className="dashboard-profile">
                <div className="row">
                    <div
                        className="col-sm-3 dashboard-profile-left text-center"
                        onClick={() => profileValue('Myprofile')}
                        aria-hidden="true"
                    >
                        <img src={Sidebarprofile} alt="profile" />
                    </div>
                    <div
                        className="col-sm-6 dashboard-profile-center"
                        onClick={() => profileValue('Myprofile')}
                        aria-hidden="true"
                    >

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
                <div key={sidebardata.title}>
                    <h5>{sidebardata.title}</h5>
                    <ul>
                        {sidebardata?.data?.map((data) => (
                            <li key={data.title} onClick={() => changeValue(data.title)} className={view === data.title ? 'active' : ''} aria-hidden="true">
                                <img src={data.image} alt="dash_list_img" />
                                {data.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div key={accountData.title}>
                    <h5>{accountData.title}</h5>
                    <ul>
                        {accountData?.data?.map((data) => (
                            <li key={data.title} onClick={() => changeValue(data.title)} className={view === data.title ? 'active' : ''} aria-hidden="true">
                                <img src={data.image} alt="dash_list_img" />
                                {data.title}
                            </li>
                        ))}
                        <li onClick={() => logOut()} className="" aria-hidden="true">
                            <img src={logouticon} alt="dash_list_img" />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

Sidemenu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
    setView: func.isRequired,
    view: string.isRequired,
    setConcept: func.isRequired,
    setRenewSub: func.isRequired,
    clearLogin: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    clearLogin: () => dispatch(clearLoginAction()),
});
export default connect(null, mapDispatchToProps)(Sidemenu);
