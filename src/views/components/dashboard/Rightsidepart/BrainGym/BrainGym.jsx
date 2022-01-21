import React, { useState } from 'react';
import './style/brainGym.scss';
import BrainGymHead from './BrainGymHead';
import BrainGymSublist from './BrainGymSublist';
import BrainGymStartToday from './BrainGymStartToday';
import BrainGymScore from './BrainGymScore';
import Shell from './Shell/Shell';
import ShellPoupup from './Shell/ShellPoupup';
// import IncorrectAns from './IncorrectAns/IncorrectAns';
// import BrainGymResult from './BrainGymResult/BrainGymResult';
// import Popup from './CompletedPopup/Popup';
// import Report from './Report/Report';

const BrainGym = () => {
    const [view, setView] = useState('home');
    return (
        <div>
            { view === 'home'
            && (
                <div className="braingym-main">
                    <BrainGymHead />
                    <BrainGymSublist />
                    <BrainGymStartToday setView={setView} />
                    <BrainGymScore />
                </div>
            )}
            { view === 'workout'
                && <Shell setView={setView} />}
            { view === 'shell'
                && <ShellPoupup setView={setView} />}
            {/* <Report /> */}
            {/* <IncorrectAns /> */}
            {/* <ShellPoupup /> */}
            {/* <BrainGymResult /> */}
            {/* <Popup /> */}
        </div>
    );
};

export default BrainGym;
