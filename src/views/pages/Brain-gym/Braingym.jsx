import React from 'react';
import './style/braingym.scss';
import BraingymHead from './BraingymHead';
import Braingymstepperpart from './Braingymstepperpart';
import Question from './Question';
import Answer from './Answer';

const Braingym = () => (
    <div className="brain-gym-main">
        <BraingymHead />
        <div className="brain-gym-bottom">
            <Braingymstepperpart />
            <Question />
            <Answer />
        </div>
    </div>
);

export default Braingym;
