import React from 'react';
import { string, object } from 'prop-types';
import profile from '../../../../../assets/images/Bitmap.png';

const MyClassesCommon = ({
    date, time, topic, startin, join, test_audio_video,
}) => (
    <div className="row myexam-common-top">
        <div className="myexam-common ">
            <div className="profile">
                <img src={profile} alt="profile icon" />
            </div>
            <div className="">
                <div className="row">
                    <div className="myassignment-common-left">
                        <h5>{topic}</h5>
                    </div>
                </div>

                <div className="row">
                    <div className=" myassignment-common-subject-left">
                        <h5>MATHEMATICS — CONCEPT 2 </h5>
                    </div>
                </div>

                <div className="row">
                    <div className="myassignment-assigned-left">
                        <p className="p-one">
                            <span className="span-two">{date}</span>
                            <span className="span-three">{time}</span>
                        </p>
                    </div>
                </div>
            </div>
            { startin
            && (
                <div>
                    <div className="col-12 myclasses-common-day-left">

                        <p>
                            <span className="span-one">Starts in </span>
                            <span className="span-two">{startin}</span>
                        </p>
                    </div>
                </div>
            )}
            {join
                && <button type="button">join live session</button>}

            {test_audio_video && <div className="test-audio-video">Test audio & video</div>}
        </div>
    </div>
);

MyClassesCommon.propTypes = {
    date: string.isRequired,
    time: string.isRequired,
    topic: string.isRequired,
    startin: string.isRequired,
    join: object.isRequired,
    test_audio_video: object.isRequired,
};

export default MyClassesCommon;
