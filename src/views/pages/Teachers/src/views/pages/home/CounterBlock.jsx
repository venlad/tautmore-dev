import React from 'react';
import { string } from 'prop-types';

const CounterBlock = ({ title, desc }) => (
    <div className="col-md-3">
        <div className="col-md-12 counter-common">
            <div className="row">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    </div>
);
CounterBlock.propTypes = {
    title: string.isRequired,
    desc: string.isRequired,

};
export default CounterBlock;
