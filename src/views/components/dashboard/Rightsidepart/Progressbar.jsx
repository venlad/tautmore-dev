import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import {  string, number, bool } from 'prop-types';

const Progressbar = ({
    className, perone, title, pertwo, peronevalue, pertwovalue,
}) => (

    <div className={className}>
        <div className="label-main">
            <div className="label-left">{title}</div>
            {
                perone && <div className="label-right">{peronevalue}%</div>
            }

            {
                pertwo && <div className="label-right">{pertwovalue} remaining</div>
            }

        </div>
        {
            perone
        && <ProgressBar now={peronevalue} />
        }
        {
            pertwo
        && <ProgressBar now={pertwovalue} />
        }
    </div>
);

Progressbar.propTypes = {
    className: string.isRequired,
    title: string.isRequired,
    perone: bool,
    pertwo: bool,
    peronevalue: number,
    pertwovalue: number,

};

Progressbar.defaultProps = {
    pertwovalue: 0,
    peronevalue: 0,
    perone: false,
    pertwo: false,
};
export default Progressbar;
