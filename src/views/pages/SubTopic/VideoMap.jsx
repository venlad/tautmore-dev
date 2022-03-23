import { func, object, string } from 'prop-types';
import React from 'react';
import PlaySmall from '../../../assets/icons/play-sm.svg';
import Tick from '../../../assets/icons/tick.svg';

const VideoMap = ({ subTopic, openCurrentVideo, currVideo }) => (
    <div>
        <div className="tree">
            <div className="videos-tree">
                {
                    subTopic?.section?.map((item, i) => (
                        <div
                            className="branch"
                            key={item?.id}
                            onClick={() => openCurrentVideo(item?.id)}
                            onKeyPress={() => {}}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="branch-line" style={{ paddingLeft: 29 * (i + 1) }}>{' '}</div>
                            <div className="type">
                                <img src={PlaySmall} alt="" /> <p>{item?.type}</p>
                            </div>
                            <h4>{item?.serialNumber}. {item?.title}</h4>
                            {currVideo === item?.id && (<img src={Tick} alt="" />)}
                        </div>
                    ))
                }
            </div>
            <div className="view">
                View all
            </div>
        </div>
        <div className="btn-wrap">
            <button className="btn-normal" type="button">Take test</button>
        </div>
    </div>
);
VideoMap.propTypes = {
    subTopic: object,
    openCurrentVideo: func.isRequired,
    currVideo: string,
};

VideoMap.defaultProps = {
    subTopic: {},
    currVideo: '',
};
export default VideoMap;
