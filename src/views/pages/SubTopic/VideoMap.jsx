/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { func, number, object } from 'prop-types';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Vimeo from '@u-wave/react-vimeo';
import PlaySmall from '../../../assets/icons/play-sm.svg';
import Tick from '../../../assets/icons/tick.svg';

const VideoMap = ({
    subTopic, openCurrentVideo, currVideo, playCurrentVideo, playVideo,
}) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0px',
            border: 0,
            backgroundColor: 'transparent',
        },
        overlay: {
            backgroundColor: '#000000bf',
            zIndex: 999,
        },
    };

    const [openView, setOpenView] = useState(false);

    return (
        <div>
            <div className="tree">
                <div className="videos-tree">
                    <div className="side-line" />
                    {
                        subTopic?.videoAndMedia?.map((item, i) => (
                            <div
                                className="branch"
                                key={item?.id}

                            >

                                <div className="branch-line" style={{ paddingLeft: 29 * (i + 1) }}>{' '}</div>
                                <div
                                    className="type"
                                    onClick={() => {
                                        playCurrentVideo(item?.id);
                                        openCurrentVideo(item?.id);
                                    }}
                                    onKeyPress={() => {}}
                                    role="button"
                                    tabIndex={0}
                                    aria-label="Play"
                                >
                                    <img src={PlaySmall} alt="" /> <p>{item?.type}</p>
                                    <Modal
                                        isOpen={playVideo === item?.id}
                                        onRequestClose={() => playCurrentVideo(null)}
                                        contentLabel="My dialog"
                                        style={customStyles}
                                    >
                                        <div>
                                            {
                                                item?.type === 'Video' ? (
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <Vimeo video={item?.videoUrl} autoplay width="720px" height="480px" />
                                                    </div>
                                                ) : (
                                                    <img src={item?.videoUrl} alt="" />
                                                )
                                            }

                                        </div>
                                    </Modal>
                                </div>

                                <a href="#">
                                    <h4>{item?.videoTitle}
                                    </h4>
                                </a>
                                {currVideo === item?.id && (<img src={Tick} alt="" />)}

                            </div>
                        ))
                    }
                </div>
                {subTopic?.videoAndMedia?.length > 5 && (
                    <div className="view" onKeyPress={() => {}} tabIndex={0} onClick={() => setOpenView(true)}>
                        View all
                    </div>
                )}

            </div>
            <Modal
                isOpen={openView}
                onRequestClose={() => setOpenView(false)}
                contentLabel="My dialog"
                style={customStyles}
            >
                <div className="full-tree">
                    <div className="videos-tree">
                        <div className="side-line" />
                        {
                            subTopic?.videoAndMedia?.map((item, i) => (
                                <div
                                    className="branch"
                                    key={item?.id}

                                >

                                    <div className="branch-line" style={{ paddingLeft: 29 * (i + 1) }}>{' '}</div>
                                    <div
                                        className="type"
                                        onClick={() => {
                                            playCurrentVideo(item?.id);
                                            openCurrentVideo(item?.id);
                                        }}
                                        onKeyPress={() => {}}
                                        role="button"
                                        tabIndex={0}
                                        aria-label="Play"
                                    >
                                        <img src={PlaySmall} alt="" /> <p>{item?.type}</p>
                                        <Modal
                                            isOpen={playVideo === item?.id}
                                            onRequestClose={() => playCurrentVideo(null)}
                                            contentLabel="My dialog"
                                            style={customStyles}
                                        >
                                            <div>
                                                {
                                                    item?.type === 'Video' ? (
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <Vimeo video={item?.videoUrl} autoplay width="720px" height="480px" />
                                                        </div>
                                                    ) : (
                                                        <img src={item?.videoUrl} alt="" />
                                                    )
                                                }

                                            </div>
                                        </Modal>
                                    </div>

                                    <a href="#">
                                        <h4>{item?.videoTitle}
                                        </h4>
                                    </a>
                                    {currVideo === item?.id && (<img src={Tick} alt="" />)}

                                </div>
                            ))
                        }
                    </div>
                </div>
            </Modal>
        </div>
    );
};
VideoMap.propTypes = {
    subTopic: object,
    openCurrentVideo: func.isRequired,
    playCurrentVideo: func,
    currVideo: number,
    playVideo: number,
};

VideoMap.defaultProps = {
    subTopic: {},
    currVideo: 0,
    playCurrentVideo: () => false,
    playVideo: 0,
};
export default VideoMap;
