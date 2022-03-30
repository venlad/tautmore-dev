/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import { object } from 'prop-types';
import Buttoncommon from '../home/Button';

const Features = ({ features }) => {
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
        <div className="features-wrap">
            {features?.videoPopup && (
                <Modal
                    isOpen={open}
                    onRequestClose={() => setOpen(false)}
                    contentLabel="My dialog"
                    style={customStyles}
                >
                    <div>
                        <ReactPlayer
                            url={features?.videoUrl}
                            width="75vw"
                            height="75vh"
                        />

                    </div>
                </Modal>
            )}
            <h2>{features?.heading}</h2>
            <div className="row">
                <div className="col-12 col-md-6 features-left">
                    {
                        features?.listItems?.map((item) => (
                            <div className="d-flex" key={item?.id}>
                                <div className="point">
                                    <span />
                                </div>
                                <p>{item?.text}
                                </p>
                            </div>
                        ))
                    }
                    <Buttoncommon content={features?.buttonText} />
                </div>
                <div className="col-12 col-md-6 features-right">
                    <img
                        onClick={() => setOpen(true)}
                        onKeyPress={() => {}}
                        role="button"
                        tabIndex={0}
                        src={features?.heroImage?.data?.attributes?.url}
                        alt="banner_img"
                    />
                </div>
            </div>
        </div>
    );
};
Features.propTypes = {
    features: object,
};

Features.defaultProps = {
    features: {},
};
export default Features;
