import React, { useEffect, useState } from 'react';
import './myprofile.scss';
import { connect } from 'react-redux';
import {
    object, func,
} from 'prop-types';
import studentimg from '../../../../../assets/images/sidebar-profile.png';
import totalScore from '../../../../../assets/images/totalScore.png';
import editIcon from '../../../../../assets/images/pencil (2).svg';
import infoIcon from '../../../../../assets/images/info-2-16.png';
import { getProfileAction,changeNameAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';
import { FileUploader } from 'react-drag-drop-files';
import UploadingIcon from '../../../../../assets/images/upload.svg';
import ChangeNamePopUp from './ChangeDetails/ChangeNamePopUp';
import ChangeEmailPopUp from './ChangeDetails/ChangeEmailPopUp';
import ChangePhoneNumPopUp from './ChangeDetails/ChangePhoneNum';
import ChangeQualPopUp from './ChangeDetails/ChangeQualification';
import ChangeUnivPopUp from './ChangeDetails/ChangeUniversity';

const MyProfile = ({ myProfile, getMyProfile }) => {

    const [model, setModel] = useState(false);
    const [modelEmail, setModelEmail] = useState(false);
    const [modelPhone, setModelPhone] = useState(false);
    const [modelQual, setModelQual] = useState(false);
    const [modelUniv, setModelUniv] = useState(false);

    useEffect(() => {
        if (myProfile.length === 0) {
            getMyProfile();
        }
    }, [myProfile]);

    console.log(myProfile?.data?._id,"ID from my profile");
    const myprofileDetail = myProfile?.data;

    const timeData = myprofileDetail?.timeslot?.map((item) => ({
        monday: item.monday.toString().split(',').map((data) => Number(data.split("-")[0].split(":")[0]) + data.slice(-2)),
        tuesday: item.tuesday.toString().split(',').map((data) => Number(data.split("-")[0].split(":")[0]) + data.slice(-2)),
        wednesday: item.wednesday.toString().split(',').map((data) => Number(data.split("-")[0].split(":")[0]) + data.slice(-2)),
        thursday: item.thursday.toString().split(',').map((data) => Number(data.split("-")[0].split(":")[0]) + data.slice(-2)),
        friday: item.friday.toString().split(',').map((data) => Number(data.split("-")[0].split(":")[0]) + data.slice(-2)),
        saturday: item.saturday.toString().split(',').map((data) => Number(data.split("-")[0].split(":")[0]) + data.slice(-2)),
    }));

    const fileTypes = ['JPG', 'PDF', 'docx'];
    const [documents, setDocuments] = useState([]);
    const [fileNames, setFileNames] = useState([]);

    const uploadFile = (event) => {
        // e.persist();
        const images = [];
        setFileNames([...fileNames, event.name]);
        const file = event;
        const reader = new FileReader();
        reader.onloadend =  () => {
            const reqData = {
                file_name: new Date().getTime().toString(36),
                base64_file: reader.result,
            };
            fetch(
                'https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/image/upload',
                {
                    method: 'POST',
                    headers: {
                        bucketKey: 'abc.pdf',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(reqData),
                },
            )
                .then((response) => response.json())
                .then((imgRes) => {
                    console.log(imgRes, 'imgRes from aws');
                    images.push(imgRes.response);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        };
        reader.readAsDataURL(file);
        setDocuments([...documents, images]);
    };

    const removeAttachment = (item) => {
        setDocuments(documents.filter((item1) => item1 !== item));
        console.log(documents);
        setFileNames(fileNames?.filter((item2) => item2 !== item));
    };

    const onEditName = () => {
        setModel(true)
    }

    return (

        <>
            <div className="container-teacher-profile">
                <div className="profile-pic-and-name">

                    <img src={studentimg} alt="student-img" />
                    <img className="edit-icon" src={editIcon} alt="student-img" />

                    <div className="name-and-id">
                        <h5>{myprofileDetail?.fullName}</h5>
                        <h6>{myprofileDetail?._id}</h6>
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
                                {myprofileDetail?.subject?.map((data, i, arr) => <h5 className="sub-common">{`${data}` + `${!i + 1 === arr.length ? ',' : ''}` }</h5>)}

                            </div>

                            <button type="button">CHANGE</button>
                        </div>

                        <div className="space-between">
                            <div className="details">
                                <h5 className="faded">Timings</h5>
                                {timeData?.map((data, i , arr) => (
                                    <div>
                                    <h5>Mon ({`${data?.monday}` + `${!arr.length - 1 === i ? ',' : ''}` })</h5>
                                    <h5>Tue ({`${data?.tuesday}` + `${!arr.length - 1 === i ? ',' : ''}`})</h5>
                                    <h5>Wed ({`${data?.wednesday}` + `${!arr.length - 1 === i ? ',' : ''}`})</h5>
                                    <h5>Thu ({`${data?.thursday}` + `${!arr.length - 1 === i ? ',' : ''}`})</h5>
                                    <h5>Fri ({`${data?.friday}` + `${!arr.length - 1 === i ? ',' : ''}`})</h5>
                                    <h5>Sat ({`${data?.saturday}` + `${!arr.length - 1 === i ? ',' : ''}`})</h5>
                                    </div>
                                ))}
                                {/* <h5>09:30 AM - 05:00PM</h5> */}
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
                                <h5>{myprofileDetail?.fullName}</h5>
                            </div>

                            <button onClick={()=>onEditName()} className="button-green" type="button">EDIT</button>
                        </div>

                        <div className="space-between">
                            <div className="details">
                                <h5 className="faded">Email ID</h5>
                                <h5>{myprofileDetail?.emailID}</h5>
                            </div>

                            <button onClick={()=>setModelEmail(true)} className="button-green" type="button">EDIT</button>

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
                                <h5>{myprofileDetail?.phoneNumber}</h5>
                            </div>

                            <button onClick={()=>setModelPhone(true)} className="button-green" type="button">EDIT</button>
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
                                <h5>{myprofileDetail?.qualification}</h5>
                            </div>

                            <button onClick={()=>setModelQual(true)} className="button-green" type="button">EDIT</button>
                        </div>

                        <div className="space-between">
                            <div className="details">
                                <h5 className="faded">University</h5>
                                <h5>{myprofileDetail?.university}</h5>
                            </div>

                            <button  onClick={()=>setModelUniv(true)}  className="button-green" type="button">EDIT</button>
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
                        {/* <p>Upload document <a href="//"><span className="orange-underlined">here</span></a> </p> */}
                        <FileUploader
                            label="Upload document"
                            className="AA"
                            handleChange={uploadFile}
                            name="file"
                            types={fileTypes}
                            maxSize={15}
                         />
                    </div>

                    {documents?.length > 0 && documents.map((item, i) => (
                        <p className="upload-notif">
                            <img className="upload-image" src={UploadingIcon} alt="Upload" />
                            {fileNames[i]}
                            <button className="remove-file" type="button" onClick={() => removeAttachment(item)}>Delete File</button>
                        </p>
                    ))}

                </div>
                <ChangeNamePopUp id={myProfile?.data?._id} model={model} handleModel={setModel}/>
                <ChangeEmailPopUp id={myProfile?.data?._id} model={modelEmail} handleModel={setModelEmail}/>
                <ChangePhoneNumPopUp id={myProfile?.data?._id} model={modelPhone} handleModel={setModelPhone}/>
                <ChangeQualPopUp id={myProfile?.data?._id} model={modelQual} handleModel={setModelQual}/>
                <ChangeUnivPopUp id={myProfile?.data?._id} model={modelUniv} handleModel={setModelUniv}/>

            </div>
        </>

    );
};

MyProfile.propTypes = {
    myProfile: object.isRequired,
    getMyProfile: func.isRequired,
};

const mapStateToProps = (state) => ({
    myProfile: state.TeacherDashboard.getProfile,
});

const mapDispatchToProps = (dispatch) => ({
    getMyProfile: () => dispatch(getProfileAction()),
    changeName : (data)=>(changeNameAction(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
