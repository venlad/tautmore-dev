/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import './zoomClass.scss';
// import OnlineClassalert from '../../OnlineClassalert';
import { ZoomMtg } from '@zoomus/websdk';
import { connect } from 'react-redux';
import {
    object, func,
} from 'prop-types';
import { getMyClassesAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';
import '../../teachers.scss';

const signatureEndpoint = 'https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/admin/zoom/create-signature';
const apiKeys = {
    apiKey: 'nRL8IN65TFmul9s0RSq8vg',
};
const meetConfig = {
    apiKey: apiKeys.apiKey,
    meetingNumber: 92171968533,
    userName: 'mithun',
    userEmail: '', // must be the attendee email address
    passWord: 'UEF0NFppNjg2TGsrSHRTaDJHUnpjUT09',
    role: 1,
};
const ZoomClassContainer = ({
    myClasses,
    getMyClasses,
}) => {
    const [myClassesList, setMyClassesList] = useState([]);
    useEffect(() => {
        ZoomMtg.setZoomJSLib('https://source.zoom.us/2.2.0/lib', '/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
    }, []);
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
    function joinMeeting(signature) {
        document.getElementById('zmmtg-root').style.display = 'block';
        ZoomMtg.init({
            leaveUrl: 'http://localhost:3000/',
            isSupportAV: true,
            success(success) {
                console.log('Init Success ', success);
                ZoomMtg.join({
                    meetingNumber: meetConfig.meetingNumber,
                    userName: meetConfig.userName,
                    signature,
                    apiKey: meetConfig.apiKey,
                    passWord: meetConfig.passWord,
                    success: (succes) => {
                        console.log(succes);
                    },
                    error: (error) => {
                        console.log(error);
                    },
                });
            },
        });
    }
    function getSignaturee() {
        // console.log(e)
        // e.preventDefault();
        fetch(signatureEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',  Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIzNDQ5ZDg1NDkzNTc2MmRhOGE1YTMwIiwiaWF0IjoxNjQ3Njg4NzgwLCJleHAiOjE2NDc2OTU5ODB9.1L-UYBbOT8-60EuBidfL321gL--MQ0veYFfkECRLKLk'  },
            body: JSON.stringify({
                meetingNumber: meetConfig.meetingNumber,
                role: meetConfig.role,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                joinMeeting(data.data.signature, meetConfig);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const getSignature = () => {
        getSignaturee();
    };
    return (
        <div>
            <div className="jionlink">
                <button
                    type="button"
                    onClick={getSignature}
                >
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

// import React, { useState, useEffect } from 'react';
// import './zoomClass.scss';
// // import OnlineClassalert from '../../OnlineClassalert';
// import { ZoomMtg } from '@zoomus/websdk';
// import { connect } from 'react-redux';

// import {
//     object, func, bool, array,
// } from 'prop-types';
// import { getMyClassesAction } from '../../../../../stores/TeacherDashboard/TeacherDashboardAction';
// import '../../teachers.scss';

// const apiKeys = {
//     apiKey: 'nRL8IN65TFmul9s0RSq8vg',
//     apiSecret: 'Uhn2PTl9UaivyLnvB5MqMwSGRiTi5GB3m2ih',
// };
// const meetConfig = {
//     apiKey: apiKeys.apiKey,
//     meetingNumber: 93475407732,
//     userName: 'bhupinder',
//     userEmail: '', // must be the attendee email address
//     passWord: 'RnVITEdZS0RXeVd1RXN0QWNmYXI1dz09',
//     role: 1,
// };

// const ZoomClassContainer = ({
//     myClasses,
//     getMyClasses,
//     Login,
// }) => {
//     const [myClassesList, setMyClassesList] = useState([]);

//     useEffect(() => {
//         ZoomMtg.setZoomJSLib('https://source.zoom.us/2.2.0/lib', '/av');
//         ZoomMtg.preLoadWasm();
//         ZoomMtg.prepareJssdk();
//     });

//     useEffect(() => {
//         if (!myClasses.data) {
//             getMyClasses();
//         }
//         if (myClasses?.data) {
//             const cdata = myClasses?.data[0]?.response?.map((data) => (
//                 {

//                     meetingId: data?.scheduleInfo?.meetingId,
//                     passWord: data?.scheduleInfo?.encryptedPassword,

//                 }));
//             setMyClassesList(cdata);
//         }
//     }, [myClasses]);

//     console.log(myClassesList);

//     function joinMeeting(signature, meetConfig) {
//         document.getElementById('zmmtg-root').style.display = 'block';

//         ZoomMtg.init({
//             leaveUrl: 'http://localhost:3000/',
//             isSupportAV: true,
//             success(success) {
//                 console.log('Init Success ', success);
//                 ZoomMtg.join({

//                     meetingNumber: meetConfig.meetingNumber,
//                     userName: meetConfig.userName,
//                     signature,
//                     apiKey: meetConfig.apiKey,
//                     passWord: meetConfig.passWord,
//                     success: (success) => {
//                         console.log(success);
//                     },
//                     error: (error) => {
//                         console.log(error);
//                     },
//                 });
//             },
//         });
//     }

//     // const signatureEndpoint = 'https://lbbhqlqib3.execute-api.us-east-1.amazonaws.com/development/api/admin/zoom/create-signature';
//     // const apiKey = 'nRL8IN65TFmul9s0RSq8vg';
//     // const meetingNumber = myClassesList[0]?.meetingId; // should be dynamic95538527953
//     // const role = 1; // 1 is for teacher host.. 0 is for students
//     // const leaveUrl = 'http://localhost:3000';
//     // const userName = 'mithun'; // should be dyanmic from auth
//     // const userEmail = ''; // optional
//     // const passWord = myClassesList[0]?.passWord;
//     // should be dyanmic from API. shud be blank in case of no password(in students)
//     const registrantToken = '';  // optional

//     // ZoomMtg.setZoomJSLib('https://source.zoom.us/2.3.0/lib', '/av');
//     // ZoomMtg.preLoadWasm();
//     // ZoomMtg.prepareWebSDK();
//     // // loads language files, also passes any error messages to the ui
//     // ZoomMtg.i18n.load('en-US');
//     // ZoomMtg.i18n.reload('en-US');

//     // function startMeeting(signature) {
//     //     console.log(signature);
//     //     document.getElementById('zmmtg-root').style.display = 'block';
//     //     ZoomMtg.init({
//     //         leaveUrl,
//     //         isSupportAV: true,
//     //         success: (success) => {
//     //             console.log(success);
//     //             ZoomMtg.join({
//     //                 signature,
//     //                 meetingNumber,
//     //                 userName,
//     //                 apiKey,
//     //                 userEmail,
//     //                 passWord,
//     //                 tk: registrantToken,
//     //                 success: (success) => {
//     //                     console.log(success);
//     //                 },
//     //                 error: (error) => {
//     //                     console.log(error);
//     //                 },
//     //             });
//     //         },
//     //         error: (error) => {
//     //             console.log(error);
//     //         },
//     //     });
//     // }

//     // function getSignature(e) {
//     //     // console.log(e)
//     //     e.preventDefault();
//     //     fetch(signatureEndpoint, { // Auth token should dynamic
//     //         method: 'POST',
//     //         headers: { 'Content-Type': 'application/json',  Authorization: Login?.data.accessToken  },
//     //         body: JSON.stringify({
//     //             meetingNumber,
//     //             role,
//     //         }),
//     //     })
//     //         .then((response) => response.json())
//     //         .then((data) => {
//     //             startMeeting(data.data.signature);
//     //             // const joinUrl = `http://localhost:3000/${testTool.serialize(data.data.signature)}`;

//     //             // window.open(joinUrl, '_blank');
//     //         })
//     //         .catch((error) => {
//     //             console.error('Error:', error);
//     //         });
//     // }

//     const getSignature = () => {
//         ZoomMtg.generateSignature({
//             meetingNumber: meetConfig.meetingNumber,
//             apiKey: meetConfig.apiKey,
//             apiSecret: apiKeys.apiSecret,
//             role: meetConfig.role,
//             success(res) {
//                 console.log('res', res);
//                 setTimeout(() => {
//                     joinMeeting(res.result, meetConfig);
//                 }, 1000);
//             },
//         });
//     };
//     return (
//         <div>
//             <div className="jionlink">
//                 <button
//                     type="button"
//                     onClick={getSignature}
//                 >
//                     JOIN LINK

//                 </button>

//                 {/* <a href={latestClass?.startUrl}>JOIN LINK</a></button> */}
//                 {/* <Link to="/zoomCall" target="_blank">JOIN LINK</Link> */}

//             </div>
//         </div>
//     );
// };

// ZoomClassContainer.propTypes = {

//     myClasses: object.isRequired,
//     getMyClasses: func.isRequired,
//     Login: object.isRequired,

// };

// const mapStateToProps = (state) => ({
//     myClasses: state.TeacherDashboard.myClasses,
//     Login: state.Auth.Login,
// });

// const mapDispatchToProps = (dispatch) => ({
//     getMyClasses: () => dispatch(getMyClassesAction()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ZoomClassContainer);
