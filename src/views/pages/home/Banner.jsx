/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-danger */
import { object } from 'prop-types';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import Buttoncommon from './Button';

function Banner({ banner }) {
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
        <div className="banner-main">
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
                <div className="col-md-6 col-sm-12 banner-left banner-text-div">
                    <h4 className="banner-text-bg">
                        { banner?.heading }
                    </h4>
                    <p>
                        {banner?.description}
                    </p>
                    <Buttoncommon content={banner?.buttonText} link={banner?.buttonUrl} />

                    <div className="banner-left-bottom-icon" />
                </div>
                <div className="col-md-6 col-sm-12 banner-right">
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
}

Banner.propTypes = {
    banner: object,
};

Banner.defaultProps = {
    banner: {},
};

export default Banner;
