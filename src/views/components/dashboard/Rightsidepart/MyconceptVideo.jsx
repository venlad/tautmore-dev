/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import { object } from 'prop-types';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import play from '../../../../assets/images/play.png';
import STRAPI_URL from '../../../../constants/strapi';

const MyconceptVideo = ({ topic }) => {
    const [currVideo, setCurrVideo] = useState(null);

    const openCurrentVideo = (id) => {
        if (currVideo !== id) {
            setCurrVideo(id);
        } else {
            setCurrVideo(null);
        }
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0px',
            overflow: 'hidden',
            backgroundColor: '#000000bf',
        },
        overlay: {
            backgroundColor: '#000000bf',
            zIndex: 999,
        },
    };

    return (
        <div className="video">
            <div>
                <div className="video-top">
                    <h5>VIDEOS</h5>
                    <p>{topic?.topicNumber} {topic?.topicName}</p>
                </div>
                <div className="video-bottom">
                    {topic?.topicVideo?.map((value) => (
                        <div className="row" key={value?.id}>
                            <div className="col-md-5 col-sm-3 col-4 video-bottom-left">
                                <Modal
                                    isOpen={currVideo === value?.id}
                                    onRequestClose={() => setCurrVideo(null)}
                                    contentLabel="My dialog"
                                    style={customStyles}
                                >
                                    <div>
                                        <ReactPlayer
                                            url={value?.videoUrl}
                                            width="75vw"
                                            height="75vh"
                                        />
                                    </div>
                                </Modal>
                                <span className="play-img">
                                    <img
                                        src={play}
                                        onClick={() => openCurrentVideo(value?.id)}
                                        onKeyPress={() => {}}
                                        role="button"
                                        tabIndex={0}
                                        alt="play"
                                    />

                                </span>
                                <img src={STRAPI_URL + value?.videoThumbnail?.data?.attributes?.url} alt="video" />
                            </div>
                            <div className="col-md-7 col-sm-9 col-8">
                                <h5>{value?.videoTitle}</h5>
                                <p>{value?.videoDuration} mins</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};
MyconceptVideo.propTypes = {
    topic: object,
};

MyconceptVideo.defaultProps = {
    topic: {},
};
export default MyconceptVideo;
