import React from 'react';
import { video } from '../mockData/Myconceptdata';
import play from '../../../../assets/images/play.png';

const MyconceptVideo = () => (
    <div className="video">
        {video.map((data) => (
            <div key={data.title}>
                <div className="video-top">
                    <h5>{data.title}</h5>
                    <p>{data.desc}</p>
                </div>
                <div className="video-bottom">
                    {data?.data?.map((value) => (
                        <div className="row" key={value.title}>
                            <div className="col-md-5 col-sm-3 col-4 video-bottom-left">
                                <span className="play-img"><img src={play} alt="play" /></span>
                                <img src={value.image} alt="video" />
                            </div>
                            <div className="col-md-7 col-sm-9 col-8">
                                <h5>{value.title}</h5>
                                <p>{value.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export default MyconceptVideo;
