/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import {
    bool, object, string,
} from 'prop-types';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import Button from './Button';
import { Circle } from '../../../assets/icons/IconList';

const HomeUISlide = ({
    leftImg,
    rightImg,
    classmain,
    classleft,
    classright,
    data,
}) => {
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
        <div>
            {leftImg && (
                <div className={`${classmain}`}>
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
                    <div className="row">
                        <div className={`col-md-6 ${classleft}`}>
                            <img
                                onClick={() => setOpen(true)}
                                onKeyPress={() => {}}
                                role="button"
                                tabIndex={0}
                                src={data?.heroImage?.data?.attributes?.url}
                                alt="Classroom_img"
                            />
                        </div>
                        <div className={`col-md-6 ${classright}`}>
                            <div>
                                <h4>
                                    {data?.heading}
                                    <span />
                                </h4>

                                <p>{data?.description}</p>

                                <ul>
                                    {
                                        data?.listItems?.map((item) => (
                                            <li key={item?.id}>
                                                {Circle} {item?.text}
                                            </li>
                                        ))
                                    }
                                </ul>

                                <Button content={data?.buttonText} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {rightImg && (
                <div className={`${classmain}`}>
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
                    <div className="row">
                        <div className={`${classleft}`}>
                            <div>
                                <h4>
                                    {data?.heading}
                                    <span />
                                </h4>
                                <p>{data?.description}</p>
                                <ul>
                                    {
                                        data?.listItems?.map((item) => (
                                            <li key={item?.id}>
                                                {Circle} {item?.text}
                                            </li>
                                        ))
                                    }
                                </ul>

                                <Button content={data?.buttonText} link={data?.buttonUrl} />
                            </div>
                        </div>

                        <div className={`${classright}`}>
                            <img
                                onClick={() => setOpen(true)}
                                onKeyPress={() => {}}
                                role="button"
                                tabIndex={0}
                                src={data?.heroImage?.data?.attributes?.url}
                                alt="Classroom_img"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

HomeUISlide.propTypes = {
    leftImg: bool,
    rightImg: bool,
    classmain: string.isRequired,
    classleft: string.isRequired,
    classright: string,
    data: object,
};
HomeUISlide.defaultProps = {
    leftImg: false,
    rightImg: false,
    classright: '',
    data: {},
};

export default HomeUISlide;
