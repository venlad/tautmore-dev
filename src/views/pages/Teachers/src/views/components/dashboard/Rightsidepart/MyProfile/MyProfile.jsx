import React from 'react';
import profile from '../../../../../assets/images/sidebar-profile.png';
// import Progressbar from '../Progressbar';
import pencil from '../../../../../assets/images/pencil.png';
import Subscription from './Subscription';
import AccountDetail from './AccountDetail';
import ParentDetail from './ParentDetail';

export default function MyProfile() {
    return (
        <div className=" myprofile">
            <div className="profile">
                <div className="profilepic">
                    <img src={profile} className="pro-icon" alt="profile-icon" />
                    <img src={pencil} className="edit" alt="pencil-icon" />
                </div>
                <div className="common-name ">
                    <p className="name"> Susan Richard </p>
                    <p className="taut-id ">
                        Tautmorian ID<span className="id-name">susan.9871245551</span>
                    </p>
                </div>
            </div>
            <Subscription />
            <AccountDetail />
            <ParentDetail />

        </div>
    );
}
