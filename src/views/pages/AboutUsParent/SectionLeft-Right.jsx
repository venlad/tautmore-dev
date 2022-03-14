import React from 'react';
import Image from '../../../assets/images/Group 20.png';

const SectionLeftRight = () => (
    <div className="section-main">
        <div className="row">
            <div className="col-7">
                <div className="section-left">
                    <h2>Traditional to transformational education</h2>
                </div>
            </div>
            <div className="col-5">
                <div className="section-left">
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    </div>
);

export default SectionLeftRight;
