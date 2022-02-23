import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    bool, func, string, array,
} from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import sidebarLogo from '../../../assets/images/sidebarlogo.png';
import Sidebarprofile from '../../../assets/images/sidebar-profile.png';
import { sidebardata, accountData } from './mockData/SidebarData';
import { menu } from '../../../assets/icons/IconList';
import logouticon from '../../../assets/images/logouticon.png';
import { clearLoginAction } from '../../../stores/Auth/AuthAction';
import { getProfileAction } from '../../../stores/TeacherDashboard/TeacherDashboardAction';

const Sidemenu = ({
    open, setOpen, clearLogin, viewType, myProfile, getMyProfile,
}) => {
    useEffect(() => {
        if (myProfile.length === 0) {
            getMyProfile();
        }
    }, [myProfile]);

    const myprofileDetail = myProfile?.data;

    const history = useHistory();
    const logOut = () => {
        localStorage.removeItem('taut-student');
        clearLogin();
        history.push('/');
    };
    const toggleTrueFalse = () => {
        setOpen(!open);
    };

    // const url = window.location.href;
    // const urlParam = `/teacher/${url.split('/').slice(-1)[0]}`;
    // console.log(urlParam, 'urlParam');
    // console.log(sidebardata, 'sidebardata');
    console.log(viewType, 'viewType from sidemenu');
    console.log(sidebardata, 'sidebardata');

    return (
        <div className=" dashboard-left col-sm-3">
            <div className="logo-profile">
                <Link to="/"><img src={sidebarLogo} alt="logo" className="dashboard-logo" /></Link>
            </div>
            <div className="dashboard-profile">
                <div className="row">
                    <div
                        className="col-sm-3 dashboard-profile-left text-center"
                        aria-hidden="true"
                    >
                        <Link to="/teacher/profile"><img src={Sidebarprofile} alt="profile" /></Link>
                    </div>
                    <div
                        className="col-sm-6 dashboard-profile-center"

                    >
                        <Link to="/teacher/profile">
                            <h5>{myprofileDetail?.fullName}</h5>
                            <p>susan.9871245551</p>
                        </Link>
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

            <div className="dashboard-overview dash-list-common">
                <div key={sidebardata.title}>
                    <h5>{sidebardata.title}</h5>
                    <ul>
                        {sidebardata?.data?.map((data) => (
                            <li key={data?.title} className={viewType && viewType === data?.to ? 'active' : ''}>
                                <Link to={data?.to}>
                                    <img src={data?.image} alt="dash_list_img" />
                                    {data?.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div key={accountData.title}>
                    <h5>{accountData.title}</h5>
                    <ul>
                        {accountData?.data?.map((data) => (
                            <li key={data.title}>
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
    clearLogin: func.isRequired,
    viewType: string.isRequired,
    myProfile: array.isRequired,
    getMyProfile: func.isRequired,
};

const mapStateToProps = (state) => ({
    myProfile: state.TeacherDashboard.getProfile,
});

const mapDispatchToProps = (dispatch) => ({
    clearLogin: () => dispatch(clearLoginAction()),
    getMyProfile: () => dispatch(getProfileAction()),

});
export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);
