import React from 'react';
import {  string } from 'prop-types';
import { pen } from '../../../../assets/icons/IconList';

const Iconpart = ({ title, desc, className }) => (
    <div className={`icon-part ${className}`}>

        <div className="row">
            <div className="col-sm-2 col-md-4 col-3 col-4 left">
                <div className="icon">
                    {pen}
                </div>
            </div>
            <div className="col-sm-10 col-md-8 col-8 right">
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>

        </div>
    </div>
);

Iconpart.propTypes = {
    className: string,
    title: string.isRequired,
    desc: string.isRequired,
};

Iconpart.defaultProps = {
    className: '',
};

export default Iconpart;
