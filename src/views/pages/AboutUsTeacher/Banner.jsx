/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/no-danger */
import { object } from 'prop-types';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import Buttoncommon from '../home/Button';

const Banner = ({ banner }) => {
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
        <div className="banner-about">
            {banner?.videoPopup && (
                <Modal
                    isOpen={open}
                    onRequestClose={() => setOpen(false)}
                    contentLabel="My dialog"
                    style={customStyles}
                >
                    <div>
                        <ReactPlayer
                            url={banner?.videoUrl}
                            width="75vw"
                            height="75vh"
                        />

                    </div>
                </Modal>
            )}
            <div className="row">
                <div className="col-md-7 col-sm-12 banner-left">
                    <div className="span-grp">
                        <span className="span-1" />
                        <span className="span-2" />
                        <span className="span-3" />
                        <span className="span-4" />
                    </div>
                    <h4 dangerouslySetInnerHTML={{ __html: banner?.heading }} />
                    <p>
                        {banner?.description}.
                    </p>
                    <Buttoncommon content={banner?.buttonText} />

                    <div className="banner-left-bottom-icon" />
                </div>
                <div className="col-md-5 col-sm-12 banner-right">
                    <img
                        onClick={() => setOpen(true)}
                        onKeyPress={() => {}}
                        role="button"
                        tabIndex={0}
                        src={banner?.heroImage?.data?.attributes?.url}
                        alt="banner_img"
                    />
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    banner: object,
};

Banner.defaultProps = {
    banner: {},
};
export default Banner;
