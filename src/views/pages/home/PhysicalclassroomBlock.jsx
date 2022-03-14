import React from 'react';
import { string } from 'prop-types';

const PhysicalclassroomBlock = ({
    title, desc, image, index,
}) => (
    <div className="col-md-3">
        <div
            className={`col-md-12 common-div common-div-${index + 1}`}
        >
            <img src={image} alt="user_image" />
            <h5>{title}</h5>
            <p>{desc}</p>
            <span className="layer-1" />
            <span className="layer-2" />
        </div>
    </div>
);

PhysicalclassroomBlock.propTypes = {
    title: string.isRequired,
    desc: string.isRequired,
    image: string.isRequired,
    index: string,
};

PhysicalclassroomBlock.defaultProps = { index: '' };

export default PhysicalclassroomBlock;
