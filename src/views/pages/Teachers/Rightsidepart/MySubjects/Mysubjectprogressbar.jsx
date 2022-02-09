import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import {  string, number } from 'prop-types';

const Mysubjectprogressbar = ({ percentage, color }) => (
    <div>
        <ProgressBar now={percentage} className={`${color}`} />
    </div>
);

Mysubjectprogressbar.propTypes = {
    percentage: number.isRequired,
    color: string.isRequired,
};

export default Mysubjectprogressbar;
