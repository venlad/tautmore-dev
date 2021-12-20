import React from 'react';
import { string } from 'prop-types';
import physicalImg from '../../../assets/images/phyback.png';

const PhysicalclassroomBlock = ({ title, desc, image }) => (
    <div className="col-md-3">
        <div
            className="col-md-12 common-div common-div-1"
            style={{
                backgroundImage: `url(${physicalImg})`,
            }}
        >
            <img src={image} alt="user_image" />
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    </div>
);

PhysicalclassroomBlock.propTypes = {
    title: string.isRequired,
    desc: string.isRequired,
    image: string.isRequired,

};

export default PhysicalclassroomBlock;
