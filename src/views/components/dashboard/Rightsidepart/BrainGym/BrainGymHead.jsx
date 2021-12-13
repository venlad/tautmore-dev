import React from 'react';
import brainhead from '../../../../../assets/images/braingym-head.png';
// import brainhead from '../../../assets/images/braingym-head.png';
// import braingynOrgline from '../../../../../assets/images/braingym-orgline.png';
// import braingynGrayline from '../../../../../assets/images/braingym-grayline.png';
// import braingymMon from '../../../../../assets/images/braingym-mon.png';
// import braingymTue from '../../../../../assets/images/braingym-tue.png';
// import braingymDay from '../../../../../assets/images/braingym-days.png';
// import braingymMonBar from '../../../../../assets/images/braingym-monbar.png';
// import braingymTueBar from '../../../../../assets/images/braingym-tuebar.png';
import BrainGymDailyStatus from './BrainGymDailyStatus';
import Attendance from './mockData/BrainGymDaysStaus';

const BrainGymHead = () => (
    <div className="braingym-head">
        <div className="row ">
            <div className="col-md-2 col-sm-1 braingym-img ">

                <img src={brainhead} alt="" />
            </div>
            <div className="col-md-3 col-sm-2 braingym-text ">
                <h5>Brain gym</h5>
                <p>1 day streak lost! Start doing brain gym
                    to get it back
                </p>

            </div>

            <div className=" col-md-6 col-sm-5 braingym-right">
                <div className="braingym-orgline">
                    <div
                        className="grayline"
                    // style={{
                    //     width: '100%',
                    // }}
                    >
                        <div
                            className="orgline"
                        // style={{
                        //     width: '50%',
                        // }}
                        />

                    </div>

                    {/* <img className="orgline" src={braingynOrgline} alt="" /> */}
                    {/* <img className="grayline" src={braingynGrayline} alt="" /> */}

                </div>
                <div className="row">
                    {Attendance.map((days) => (
                        <BrainGymDailyStatus
                            barValue={days.presenty}
                            day={days.day}
                            attendance={days.attendace}
                        />
                    ))}

                </div>
            </div>
        </div>
    </div>
);

export default BrainGymHead;
