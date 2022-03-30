/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-danger */
import { bool, object, string } from 'prop-types';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import Button from '../home/Button';

const SectionLeftRight = ({ className, fromLeft, data }) => {
    const [open, setOpen] = useState(false);

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
        <>
            <div className={className}>
                {fromLeft ? (
                    <div className="row">
                        {data?.videoPopup && (
                            <Modal
                                isOpen={open}
                                onRequestClose={() => setOpen(false)}
                                contentLabel="My dialog"
                                style={customStyles}
                            >
                                <div>
                                    <ReactPlayer
                                        url={data?.videoUrl}
                                        width="75vw"
                                        height="75vh"
                                    />

                                </div>
                            </Modal>
                        )}
                        <div className="col-12 col-md-7">
                            <div className="section-left">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <h2>{data?.heading}</h2>
                                <div dangerouslySetInnerHTML={{ __html: data?.description }} />
                                <Button content={data?.buttonText} link={data?.buttonUrl} />
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="section-right">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <img
                                    onClick={() => setOpen(true)}
                                    onKeyPress={() => {}}
                                    role="button"
                                    tabIndex={0}
                                    src={data?.image?.data?.attributes?.url}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {data?.videoPopup && (
                            <Modal
                                isOpen={open}
                                onRequestClose={() => setOpen(false)}
                                contentLabel="My dialog"
                                style={customStyles}
                            >
                                <div>
                                    <ReactPlayer
                                        url={data?.videoUrl}
                                        width="75vw"
                                        height="75vh"
                                    />

                                </div>
                            </Modal>
                        )}
                        <div className="col-12 col-md-5">
                            <div className="section-left-1">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <img
                                    onClick={() => setOpen(true)}
                                    onKeyPress={() => {}}
                                    role="button"
                                    tabIndex={0}
                                    src={data?.image?.data?.attributes?.url}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="section-right-1">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <h2>{data?.heading}</h2>
                                <div dangerouslySetInnerHTML={{ __html: data?.description }} />
                                <Button content={data?.buttonText} link={data?.buttonUrl} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
SectionLeftRight.propTypes = {
    className: string,
    fromLeft: bool.isRequired,
    data: object,
};

SectionLeftRight.defaultProps = {
    className: 'section-main',
    data: {},
};
export default SectionLeftRight;
