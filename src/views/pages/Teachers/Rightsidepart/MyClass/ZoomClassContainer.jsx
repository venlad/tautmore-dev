import React, { useState, useEffect } from 'react';
import './zoomClass.scss';
// import OnlineClassalert from '../../OnlineClassalert';
import { ZoomMtg } from '@zoomus/websdk';
import { connect } from 'react-redux';

import {
    object, func, bool, array,
} from 'prop-types';
import { getMyClassesAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';
import '../../teachers.scss';

const ZoomClassContainer = ({
    myClasses,
    getMyClasses,
    Login,
}) => {
    const [myClassesList, setMyClassesList] = useState([]);

    useEffect(() => {
        if (!myClasses.data) {
            getMyClasses();
        }
        if (myClasses?.data) {
            const cdata = myClasses?.data[0]?.response?.map((data) => (
                {

                    meetingId: data?.scheduleInfo?.meetingId,
                    passWord: data?.scheduleInfo?.encryptedPassword,

                }));
            setMyClassesList(cdata);
        }
    }, [myClasses]);

    console.log(myClassesList);

    console.log(Login?.data.accessToken);

    const signatureEndpoint = 'https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/admin/zoom/create-signature';
    const apiKey = 'nRL8IN65TFmul9s0RSq8vg';
    const meetingNumber = myClassesList[0]?.meetingId; // should be dynamic95538527953
    const role = 1; // 1 is for teacher host.. 0 is for students
    const leaveUrl = 'http://localhost:3000';
    const userName = 'mithun'; // should be dyanmic from auth
    const userEmail = ''; // optional
    const passWord = myClassesList[0]?.passWord;
    // should be dyanmic from API. shud be blank in case of no password(in students)
    const registrantToken = '';  // optional

    ZoomMtg.setZoomJSLib('https://source.zoom.us/2.3.0/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    // loads language files, also passes any error messages to the ui
    ZoomMtg.i18n.load('en-US');
    ZoomMtg.i18n.reload('en-US');

    function startMeeting(signature) {
        console.log(signature);
        document.getElementById('zmmtg-root').style.display = 'block';
        ZoomMtg.init({
            leaveUrl,
            isSupportAV: true,
            success: (success) => {
                console.log(success);
                ZoomMtg.join({
                    signature,
                    meetingNumber,
                    userName,
                    apiKey,
                    userEmail,
                    passWord,
                    tk: registrantToken,
                    success: (success) => {
                        console.log(success);
                    },
                    error: (error) => {
                        console.log(error);
                    },
                });
            },
            error: (error) => {
                console.log(error);
            },
        });
    }

    function getSignature(e) {
        // console.log(e)
        e.preventDefault();
        fetch(signatureEndpoint, { // Auth token should dynamic
            method: 'POST',
            headers: { 'Content-Type': 'application/json',  Authorization: Login?.data.accessToken  },
            body: JSON.stringify({
                meetingNumber,
                role,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                startMeeting(data.data.signature);
                // const joinUrl = `http://localhost:3000/${testTool.serialize(data.data.signature)}`;

                // window.open(joinUrl, '_blank');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <div className="jionlink">
                <button type="button" onClick={getSignature}>
                    JOIN LINK

                </button>

                {/* <a href={latestClass?.startUrl}>JOIN LINK</a></button> */}
                {/* <Link to="/zoomCall" target="_blank">JOIN LINK</Link> */}

            </div>
        </div>
    );
};

ZoomClassContainer.propTypes = {

    myClasses: object.isRequired,
    getMyClasses: func.isRequired,
    Login: object.isRequired,

};

const mapStateToProps = (state) => ({
    myClasses: state.TeacherDashboard.myClasses,
    Login: state.Auth.Login,
});

const mapDispatchToProps = (dispatch) => ({
    getMyClasses: () => dispatch(getMyClassesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ZoomClassContainer);
