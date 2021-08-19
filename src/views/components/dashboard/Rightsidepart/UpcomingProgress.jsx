import React from 'react';
import { display } from '../../../../assets/icons/IconList';

const UpcomingProgress = ({
    color, bgcolor, title, desc,
}) => {
    const design = {
        color,
        backgroundColor: bgcolor,
    };
    return (
        <div className="row upcoming-progress">
            <div className="col-md-4">
                <div className="icon" style={design}>
                    {display}
                </div>
            </div>
            <div className="col-md-8">
                <h5 style={{ color }}>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default UpcomingProgress;
