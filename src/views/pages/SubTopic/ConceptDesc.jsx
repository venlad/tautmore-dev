import { object } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { chevRight } from '../../../assets/icons/IconList';
import VideoMap from './VideoMap';
import PlaySmall from '../../../assets/icons/play-sm.svg';

const Myconceptdesc = ({ subTopic }) => {
    const [currVideo, setCurrVideo] = useState(null);

    const openCurrentVideo = (id) => {
        if (currVideo !== id) {
            setCurrVideo(id);
        }
    };

    useEffect(() => {
        setCurrVideo(subTopic?.section[0]?.id);
    }, [subTopic]);
    return (
        <div className="myconcept-desc">
            <div className="row desc-top">
                <div className="col-md-7">
                    <h5>{subTopic?.subTopicNumber} {subTopic?.subTopicName}</h5>
                    <li>
                        <img width="24px" height="24px" className="span-icon" src={PlaySmall} alt="" />
                        <a href="useful">{subTopic?.section[0]?.title}</a>
                    </li>
                </div>
                <div className="col-md-5">
                    <button type="button">Take practice test <span>{chevRight}</span></button>
                </div>
            </div>
            <div className="sub-title">
                <h6>1.1.1 What makes us live?</h6>
                <span>Total : 8</span>
            </div>
            <span type="button" className="nxt-video">
                What is counting and why it’s useful
            </span>
            <VideoMap
                subTopic={subTopic}
                openCurrentVideo={openCurrentVideo}
                currVideo={currVideo}
            />
        </div>
    );
};
Myconceptdesc.propTypes = {
    subTopic: object,
};

Myconceptdesc.defaultProps = {
    subTopic: {},
};
export default Myconceptdesc;
