import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {  string, number } from 'prop-types';

const MysubProgressbar = ({
    title, percentage, maxval, value, color,
}) => (
    <div className="mysub-progressbar-round col-md-4 col-sm-4 col-12">
        <div className="row">
            <div className="col-md-5 col-sm-12 col-12">
                <div className="mysub-progressbar-round-left">
                    <div>
                        <CircularProgressbar
                            value={percentage || (value)}
                            text={percentage ? (`${percentage}%`) : (`${value}/${maxval}`)}
                            maxValue={maxval}
                            styles={{

                                path: {
                                    stroke: `${color}`,
                                    transform: 'rotate(100turn)',
                                    transformOrigin: 'center center',
                                },
                                text: {
                                    fill: `${color}`,
                                    fontSize: '20px',
                                    fontFamily: 'proxima_nova_rgbold',
                                },
                            }}

                        />
                    </div>
                </div>
            </div>
            <div className="col-md-7 col-sm-12  col-12 mysub-progressbar-round-right">
                <h5 style={{ color: `${color}` }}>{title}</h5>
            </div>
        </div>

    </div>
);

MysubProgressbar.propTypes = {
    title: string.isRequired,
    percentage: number,
    maxval: number.isRequired,
    value: number,
    color: string.isRequired,
};

MysubProgressbar.defaultProps = {
    percentage: 0,
    value: 0,
};

export default MysubProgressbar;
