import { bool, string } from 'prop-types';
import React from 'react';
import Image from '../../../assets/images/Group 20.png';
import Button from '../home/Button';

const SectionLeftRight = ({ className, fromLeft }) => (
    <>
        <div className={className}>
            {
                fromLeft ? (
                    <div className="row">
                        <div className="col-7">
                            <div className="section-left">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <h2>Traditional to transformational education</h2>
                                <p>
                                    The rote learning culture is ineffective for the 21st century.
                                    Your kid needs progressive education. TautMore harnesses
                                    cutting-edge transformational technologies to facilitate the
                                    right learning
                                    environment for your kid by gamifying education.
                                </p>
                                <Button content="Shit Bro" link="/" />
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="section-right">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <img src={Image} alt="" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-5">
                            <div className="section-left-1">
                                <img src={Image} alt="" />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="section-right-1">
                                <h2>Traditional to transformational education</h2>
                                <p>
                                    The rote learning culture is ineffective for the 21st century.
                                    Your kid needs progressive education. TautMore harnesses
                                    cutting-edge transformational technologies to
                                    facilitate the right learning
                                    environment for your kid by gamifying education.
                                </p>
                                <Button content="Shit Bro" link="/" />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
);
SectionLeftRight.propTypes = {
    className: string,
    fromLeft: bool.isRequired,
};

SectionLeftRight.defaultProps = {
    className: 'section-main',
};
export default SectionLeftRight;
