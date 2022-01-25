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
    const [viewBrain, setViewBrain] = useState('home');
    return (
        <div>
            { viewBrain === 'home'
            && (
                <div className="braingym-main">
                    <BrainGymHead />
                    <BrainGymSublist />
                    <BrainGymStartToday setViewBrain={setViewBrain} />
                    <BrainGymScore />
                </div>
            )}
            { viewBrain === 'workout'
                && <Shell setViewBrain={setViewBrain} />}
            { viewBrain === 'shell'
                && <ShellPoupup setViewBrain={setViewBrain} />}
            {/* <Report /> */}
            {/* <IncorrectAns /> */}
            {/* <ShellPoupup /> */}
            {/* <BrainGymResult /> */}
            {/* <Popup /> */}
        </div>
    );
};

export default BrainGym;
