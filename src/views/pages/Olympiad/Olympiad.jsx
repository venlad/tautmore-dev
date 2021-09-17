import React from 'react';
import OlympiadHead from './OlympiadHead';
import './style/olympiad.scss';
import OlympiadPart from './OlympiadPart';

const Olympiad = () => (
    <div className="Olympiad-main">
        <OlympiadHead />
        <OlympiadPart />
    </div>
);

export default Olympiad;
