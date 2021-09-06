import React, { useState, useEffect } from 'react';
import './style/braingym.scss';
import BraingymHead from './BraingymHead';
import Braingymstepperpart from './Braingymstepperpart';
import QuestionAns from './QuestionAns';
import BraingymUnlock from './BraingymUnlock';
import { connect } from 'react-redux';
import { getAllgym, masterBraingymid, getQuestionbytag } from '../../../stores/BrainGym/BrainGymAction';
import loader from '../../../assets/images/Logo.png';

const Braingym = ({allgym, Masterbraingym, getAllgym, masterBraingymid, getQuestionbytag, Questionbytag }) => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [select, setSelect] = useState('');
    const [complete, setComplete] = useState(true);
    const [completetwo, setCompletetwo] = useState(true);
    const [completethree, setCompletethree] = useState(true);
    const [counter, setCounter] = useState(1);
    
    const [ time, setTime ] = useState(0);
    const [timeOn, setTimeOn ] =  useState(true);

    const ques = Questionbytag?.[0];

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
        const timeminutesecond = ("0" + Math.floor((time / 60000) % 60)).slice(-2) + ':' + ("0" + Math.floor((time / 1000) % 60)).slice(-2);
        
        useEffect(() => {
                if (getAllgym && completetwo){
                    getAllgym();
                    setCompletetwo(false);
                }
                if (allgym && complete){
                    masterBraingymid();
                    setComplete(false);
                }
                if (allgym && Masterbraingym && completethree) {

                    setCompletethree(false);
                }
        },[allgym]);

        useEffect(() => {
            console.log(Masterbraingym?.difficulty, 'dd')
            if(Masterbraingym?.difficulty){
                getQuestionbytag({difficulty: Masterbraingym?.difficulty });
            }
        }, [Masterbraingym])

    return (
        <div className="brain-gym-main braingym-page">
            <BraingymHead />
            <div className="brain-gym-bottom">
                <Braingymstepperpart step={step} time={time} setTime={setTime} timeOn={timeOn} setTimeOn={setTimeOn} Questionbytag={Questionbytag} />
                <QuestionAns setOpen={setOpen} step={step} select={select} setSelect={setSelect} Questionbytag={Questionbytag} counter={counter} setCounter={setCounter} time={time} timeminutesecond={timeminutesecond} ques={ques}/>
                <BraingymUnlock open={open} setOpen={setOpen} message={message}  step={step} setStep={setStep} select={select} setSelect={setSelect} counter={counter} setCounter={setCounter}/>
            </div>
            {
                !Questionbytag &&
            <div className="loader-part">

                <img src={loader} alt="loader" />
      
            </div>
            }
        </div>
    );
};

const mapStateToProps =(state)=> ({
        allgym: state.BrainGym.Allgym.gyms,
        Masterbraingym: state.BrainGym.Masterbraingymid.gym,
        Questionbytag: state.BrainGym.Questionbytag.questions
})

const mapDispatchToProps = (dispatch) => ({
        getAllgym: () =>  dispatch(getAllgym()),
        masterBraingymid: () => dispatch(masterBraingymid()),
        getQuestionbytag: (data) => dispatch(getQuestionbytag(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Braingym);
