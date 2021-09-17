import React, { useState, useEffect } from 'react';
import './style/braingym.scss';
import { connect } from 'react-redux';
import { array, string, func } from 'prop-types';
import BraingymHead from './BraingymHead';
import Braingymstepperpart from './Braingymstepperpart';
import QuestionAns from './QuestionAns';
import BraingymUnlock from './BraingymUnlock';
import chestMessage from './mockData/chestData';
import {
    getAllgymAction,
    masterBraingymidAction,
    getQuestionbytagAction,
} from '../../../stores/BrainGym/BrainGymAction';

const Braingym = ({
    allgym,
    Masterbraingym,
    getAllgym,
    masterBraingymid,
    getQuestionbytag,
    Questionbytag,
    BrainGym,
}) => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [select, setSelect] = useState('');
    const [complete, setComplete] = useState(true);
    const [completetwo, setCompletetwo] = useState(true);
    const [completethree, setCompletethree] = useState(true);
    const [counter, setCounter] = useState(1);
    const [time, setTime] = useState(0);
    const [timeOn, setTimeOn] = useState(true);
    const [chestonecoin, setchestoneCoin] = useState(0);
    const [chesttwocoin, setchesttwoCoin] = useState(0);
    const [chestthreecoin, setchestthreeCoin] = useState(0);
    const [chestfourcoin, setchestfourCoin] = useState(0);
    const [chestfivecoin, setchestfiveCoin] = useState(0);

    const totalcoin = chestonecoin + chesttwocoin + chestthreecoin + chestfourcoin + chestfivecoin;

    const ques = Questionbytag?.[0];

    const loading = BrainGym.loading;

    const timeminutesecond =    `${(`0${Math.floor((time / 60000) % 60)}`).slice(-2)
    }:${
        (`0${Math.floor((time / 1000) % 60)}`).slice(-2)}`;

    useEffect(() => {
        if (getAllgym && completetwo) {
            getAllgym();
            setCompletetwo(false);
        }
        if (allgym && complete) {
            masterBraingymid();
            setComplete(false);
        }
        if (allgym && Masterbraingym && completethree) {
            setCompletethree(false);
        }
    }, [Masterbraingym, masterBraingymid, complete, completetwo, completethree, getAllgym, allgym]);

    useEffect(() => {
        if (Masterbraingym?.difficulty) {
            getQuestionbytag({ difficulty: Masterbraingym?.difficulty });
        }
    }, [Masterbraingym, getQuestionbytag]);

    return (
        <div className="brain-gym-main braingym-page">
            <BraingymHead />
            <div className="brain-gym-bottom">
                <Braingymstepperpart
                    step={step}
                    time={time}
                    setTime={setTime}
                    timeOn={timeOn}
                    setTimeOn={setTimeOn}
                    ques={ques}
                    totalcoin={totalcoin}
                />
                <QuestionAns
                    setOpen={setOpen}
                    step={step}
                    select={select}
                    setSelect={setSelect}
                    Questionbytag={Questionbytag}
                    counter={counter}
                    setCounter={setCounter}
                    time={time}
                    timeminutesecond={timeminutesecond}
                    ques={ques}
                    loading={loading}
                    setTimeOn={setTimeOn}
                    chestonecoin={chestonecoin}
                    setchestoneCoin={setchestoneCoin}
                    chesttwocoin={chesttwocoin}
                    setchesttwoCoin={setchesttwoCoin}
                    chestthreecoin={chestthreecoin}
                    setchestthreeCoin={setchestthreeCoin}
                    chestfourcoin={chestfourcoin}
                    setchestfourCoin={setchestfourCoin}
                    chestfivecoin={chestfivecoin}
                    setchestfiveCoin={setchestfiveCoin}
                />
                <BraingymUnlock
                    open={open}
                    setOpen={setOpen}
                    message={chestMessage}
                    step={step}
                    setStep={setStep}
                    select={select}
                    setSelect={setSelect}
                    counter={counter}
                    setCounter={setCounter}
                    timeminutesecond={timeminutesecond}
                    chestonecoin={chestonecoin}
                    chesttwocoin={chesttwocoin}
                    chestthreecoin={chestthreecoin}
                    chestfourcoin={chestfourcoin}
                    chestfivecoin={chestfivecoin}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    BrainGym: state.BrainGym,
    allgym: state.BrainGym.Allgym?.gyms,
    Masterbraingym: state.BrainGym.Masterbraingymid?.gym,
    Questionbytag: state.BrainGym.Questionbytag?.questions,
});

const mapDispatchToProps = (dispatch) => ({
    getAllgym: () => dispatch(getAllgymAction()),
    masterBraingymid: () => dispatch(masterBraingymidAction()),
    getQuestionbytag: (data) => dispatch(getQuestionbytagAction(data)),
});

Braingym.propTypes = {
    allgym: array.isRequired,
    Masterbraingym: array.isRequired,
    getAllgym: array.isRequired,
    masterBraingymid: string.isRequired,
    getQuestionbytag: func.isRequired,
    Questionbytag: array.isRequired,
    BrainGym: string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Braingym);
