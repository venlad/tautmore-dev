import React, { useState } from 'react';
import './style/braingym.scss';
import BraingymHead from './BraingymHead';
import Braingymstepperpart from './Braingymstepperpart';
import QuestionAns from './QuestionAns';
import BraingymUnlock from './BraingymUnlock';

const Braingym = () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [select, setSelect] = useState('');
    const message = [
            {
                title: 'Chest 1 Unlocked !',
                coin: '300 coins earned',
                level: 'Level 2',
            },
            {
                title: 'Chest 2 Unlocked !',
                coin: '300 coins earned',
                level: 'Level 3',
            },
            {
                title: 'Chest 3 Unlocked !',
                coin: '300 coins earned',
                level: 'Level 4',
            },
            {
                title: 'Chest 4 Unlocked !',
                coin: '300 coins earned',
                level: 'Level 5',
            },
        ];
       
    return (
        <div className="brain-gym-main">
            <BraingymHead />
            <div className="brain-gym-bottom">
                <Braingymstepperpart step={step} />
                <QuestionAns setOpen={setOpen} step={step} select={select} setSelect={setSelect}  />
                <BraingymUnlock open={open} setOpen={setOpen} message={message}  step={step} setStep={setStep} setSelect={setSelect}/>
            </div>
        </div>
    );
};

export default Braingym;
