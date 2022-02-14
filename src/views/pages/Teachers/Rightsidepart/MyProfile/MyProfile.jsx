import React from 'react';
import './myprofile.scss';
import studentimg from '../../../../../assets/images/sidebar-profile.png';
import totalScore from '../../../../../assets/images/totalScore.png';
import editIcon from '../../../../../assets/images/pencil (2).svg';
import infoIcon from '../../../../../assets/images/info-2-16.png';
// import connect from 'react-redux';
// import {
//     object, array, string, func,
// } from 'prop-types';

const MyProfile = () => (
    <>
        <div className="container-teacher-profile">
            <div className="profile-pic-and-name">

                <img src={studentimg} alt="student-img" />
                <img className="edit-icon" src={editIcon} alt="student-img" />

                <div className="name-and-id">
                    <h5>Diana Kent</h5>
                    <h6>TM182902</h6>
                </div>

            </div>

            <div className="teacher-details">

                <div className="heading-and-icon">
                    <h4>TEACHING DETAILS</h4>
                    <img src={totalScore} alt="student-img" />
                </div>

                <div className="details-and-change-button">

                    <div className="space-between">
                        <div className="details">
                            <h5 className="faded">Subjects</h5>
                            <h5>Mathematics, Science</h5>
                        </div>

                        <button type="button">CHANGE</button>
                    </div>

                    <div className="space-between">
                        <div className="details">
                            <h5 className="faded">Timings</h5>
                            <h5>09:30 AM - 05:00PM</h5>
                        </div>

                        <button type="button">CHANGE</button>
                    </div>

                </div>

                <p className="changes-admin3"> <img className="info-icon" src={infoIcon} alt="info-icon" />If changes need to be done on subject and timings,
                    please raise a ticket with the admin by clicking <a href="//"><span className="orange-underlined">here</span></a>
                </p>

            </div>

            <div className="teacher-details">

                <div className="heading-and-icon">
                    <h4>MY ACCOUNT </h4>
                </div>

                <div className="details-and-change-button">

                    <div className="space-between">
                        <div className="details">
                            <h5 className="faded">My name</h5>
                            <h5>Diana Kent</h5>
                        </div>

                        <button className="button-green" type="button">EDIT</button>
                    </div>

                    <div className="space-between">
                        <div className="details">
                            <h5 className="faded">Email ID</h5>
                            <h5>diana@gmail.com</h5>
                        </div>

                        <button className="button-green" type="button">EDIT</button>

                    </div>

                </div>

                <div className="details-and-change-button">

                    <div className="space-between">
                        <div className="details">
                            <h5 className="faded">Password</h5>
                            <h5>********</h5>
                        </div>

                        <button className="button-green" type="button">CHANGE</button>
                    </div>

                    <div className="space-between">
                        <div className="details">
                            <h5 className="faded">Phone number</h5>
                            <h5>+1 - 8973-213-2129</h5>
                        </div>

                        <button className="button-green" type="button">EDIT</button>
                    </div>

                </div>

            </div>

            <div className="teacher-details">

                <div className="heading-and-icon">
                    <h4>MY EDUCATION </h4>
                </div>

                <div className="details-and-change-button">

                    <div className="space-between">
                        <div className="details">
                            <h5 className="faded">Qualification</h5>
                            <h5>Master’s degree in Science</h5>
                        </div>

                        <button className="button-green" type="button">EDIT</button>
                    </div>

                    <div className="space-between">
                        <div className="details">
                            <h5 className="faded">University</h5>
                            <h5>University of XYZ </h5>
                        </div>

                        <button className="button-green" type="button">EDIT</button>
                    </div>

                </div>

                <div className="details-and-change-button">

                    <div className="space-between">
                        <div className="details">
                            <h5 className="faded">Documents</h5>
                            <h5>MSC certificate.pdf</h5>
                        </div>

                        <div className="certificate-buttons">
                            <button type="button">View</button>
                            <button className="faded" type="button">Delete</button>
                        </div>
                    </div>

                </div>

                <div className="details-and-change-button" />

                <div className="upload-container">
                    <p>Upload document <a href="//"><span className="orange-underlined">here</span></a> </p>
                </div>

            </div>

        </div>
    </>
);

export default MyProfile;
