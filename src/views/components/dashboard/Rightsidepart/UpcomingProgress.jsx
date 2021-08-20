import React from 'react';
import {  string } from 'prop-types';

const UpcomingProgress = ({
    noteorange, displaygreen, title, desc, color,
}) => (
    <div className="row upcoming-progress">
        <div className="col-md-4 col-sm-4 col-12">
            <div className="icon">
                {
                    displaygreen && <img src={displaygreen} alt="display" />
                }

                {
                    noteorange && <img src={noteorange} alt="display" />
                }
            </div>
        </div>
        <div className="col-md-8 col-sm-8 col-12">
            <h5 style={{ color }}>{title}</h5>
            <p>{desc}</p>
        </div>
    </div>
);

UpcomingProgress.propTypes = {
    title: string.isRequired,
    desc: string.isRequired,
    noteorange: string,
    displaygreen: string,
    color: string.isRequired,
};
UpcomingProgress.defaultProps = {
    displaygreen: '',
    noteorange: '',
};

export default UpcomingProgress;
