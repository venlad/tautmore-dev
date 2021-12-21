import React from 'react';
import { string } from 'prop-types';

const IndividualCommon = ({ image, title, desc }) => (
    <div className="stats-individual">
        <img src={image} alt="No Imag" />
        <div className="stat-name-and-values">
            <p className="stat-name">{title}</p>
            <p className="bold">{desc}</p>
        </div>
    </div>
);

IndividualCommon.propTypes = {
    image: string.isRequired,
    title: string.isRequired,
    desc: string.isRequired,
};

export default IndividualCommon;
