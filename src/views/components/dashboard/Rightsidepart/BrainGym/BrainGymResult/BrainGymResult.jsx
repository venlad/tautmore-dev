import React from 'react';
import './style/brainGymResult.scss';
import BrainGymResultScore from './BrainGymResultScore';
import BrainGymResultSublist from './BrainGymResultSublist';
import BrainGymResultDaily from './BrainGymResultDaily';

const BrainGymResult = () => (
    <div>
        <div className="braingymresult-main">
            <div className="braingymresult-head">
                <h5>Brain gym results </h5>
                <p>Last 5 attempts</p>
            </div>
            <BrainGymResultSublist />
            <BrainGymResultScore />
            <BrainGymResultDaily />

        </div>
    </div>
);

export default BrainGymResult;
