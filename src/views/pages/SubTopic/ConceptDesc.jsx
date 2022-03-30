/* eslint-disable jsx-a11y/anchor-is-valid */
import { object } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { chevRight } from '../../../assets/icons/IconList';
import VideoMap from './VideoMap';
import PlaySmall from '../../../assets/icons/play-sm.svg';

const Myconceptdesc = ({ subTopic }) => {
    const [currVideo, setCurrVideo] = useState(null);
    const [playVideo, setPlayVideo] = useState(null);
    const [showModal, setShowModal] = useState(false);

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

    const openCurrentVideo = (id) => {
        if (currVideo !== id) {
            setCurrVideo(id);
        }
    };

    const playCurrentVideo = (id) => {
        if (playVideo !== id) {
            setPlayVideo(id);
        } else {
            setPlayVideo(null);
        }
    };

    useEffect(() => {
        setCurrVideo(subTopic?.videoAndMedia[0]?.id);
    }, [subTopic]);

    const currVideoTitle = subTopic?.videoAndMedia?.filter((item) => item.id === currVideo)[0];
    return (
        <div className="myconcept-desc">
            <div className="row desc-top">
                <div className="col-md-7">
                    <h5>{subTopic?.subTopicNumber} {subTopic?.subTopicName}</h5>
                    <li>
                        <img width="24px" height="24px" className="span-icon" src={PlaySmall} alt="" />
                        <a href="#" onClick={() => setShowModal(!showModal)}>
                            {currVideoTitle?.videoTitle}
                            <Modal
                                isOpen={showModal}
                                onRequestClose={() => setShowModal(false)}
                                contentLabel="My dialog"
                                style={customStyles}
                            >
                                <div>
                                    {
                                        currVideoTitle?.type === 'Video' ? (
                                            <ReactPlayer
                                                url={currVideoTitle?.videoUrl}
                                                width="75vw"
                                                height="75vh"
                                            />
                                        ) : (
                                            <ReactMarkdown>
                                                {currVideoTitle?.forMedia}
                                            </ReactMarkdown>
                                        )
                                    }

                                </div>
                            </Modal>
                        </a>
                    </li>
                </div>
                <div className="col-md-5">
                    <Link to={subTopic?.takeTestButton1link}>
                        <button type="button">{subTopic?.takeTestButton1} <span>{chevRight}</span></button>
                    </Link>
                </div>
            </div>
            <div className="sub-title">
                <h6>1.1.1 What makes us live?</h6>
                <span>Total : {subTopic?.videoAndMedia?.length}</span>
            </div>
            <span type="button" className="nxt-video">
                What is counting and why it’s useful
            </span>
            {subTopic?.videoAndMedia?.length > 0 && (
                <VideoMap
                    subTopic={subTopic}
                    openCurrentVideo={openCurrentVideo}
                    currVideo={currVideo}
                    playCurrentVideo={playCurrentVideo}
                    playVideo={playVideo}
                />
            )}

            <div className="topic-wrap">
                {
                    subTopic?.section?.map((item) => (
                        <div className="single-topic" id={item?.serialNumber}>
                            <h4>{item?.serialNumber}. {item?.title}</h4>
                            <p>{item?.description}</p>
                            <div className="markdown">
                                <ReactMarkdown>{item?.content}</ReactMarkdown>
                            </div>
                        </div>
                    ))
                }
            </div>
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
