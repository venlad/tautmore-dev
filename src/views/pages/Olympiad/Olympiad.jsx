import React from 'react';
import OlympiadHead from './OlympiadHead';
import './style/olympiad.scss';
import OlympiadPart from './OlympiadPart';
import CongratsPopup from './CongratsPopup';

const Olympiad = () => (
    <div className="Olympiad-main">
        <CongratsPopup />
        <OlympiadHead />
        <OlympiadPart />
    </div>
);

export default Olympiad;
