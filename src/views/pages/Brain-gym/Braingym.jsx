import React, { useState, useEffect } from 'react';
import './style/braingym.scss';
import { connect } from 'react-redux';
import { array, func, object } from 'prop-types';
import BraingymHead from './BraingymHead';
import Braingymstepperpart from './Braingymstepperpart';
import QuestionAns from './QuestionAns';
import BraingymUnlock from './BraingymUnlock';
import {
    masterBraingymidAction,
} from '../../../stores/BrainGym/BrainGymAction';

const Braingym = ({
    getMasterBrainGym,
    questionByTag,
    masterBrainGym,
}) => {
    const [select, setSelect] = useState('');
    const [time, setTime] = useState(0);
    const [eachtime, setEachtime] = useState(0);
    const [eachtimeOn, setEachTimeOn] = useState(true);

    const [local, setLocal] = useState(true);
    const question = questionByTag?.[0];

    useEffect(() => {
        if (!masterBrainGym?._id) {
            getMasterBrainGym();
        }
    });

    useEffect(() => {
        let interval = null;

        if (question) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [question]);

    const [currenttime, setCurrenttime] = useState();

    useEffect(() => {
        setCurrenttime(`${(`0${Math.floor((time / 60000) % 60)}`).slice(-2)
        }:${
            (`0${Math.floor((time / 1000) % 60)}`).slice(-2)}`);
        const localdata = localStorage.getItem('brain-gym-data');
        const localvalue = JSON.parse(localdata);
        const localBraingymid = localvalue?.braingym_id;
        if (masterBrainGym?._id) {
            if (localBraingymid === masterBrainGym._id) {
                const localtime = localvalue?.timeminutesecond;
                if (localtime && local) {
                    setTime(localtime);
                    setLocal(false);
                }
            } else {
                localStorage.removeItem('brain-gym-data');
            }
        }
    });

    useEffect(() => {
        let intervalEach = null;
        setEachTimeOn(true);
        if (question && eachtimeOn) {
            intervalEach = setInterval(() => {
                setEachtime((prevTimeEach) => prevTimeEach + 1000);
            }, 1000);
        } else {
            clearInterval(intervalEach);
        }
        return () => clearInterval(intervalEach);
    }, [eachtimeOn, question]);

    const [eachcurrenttime, setEachcurrenttime] = useState();

    useEffect(() => {
        setEachcurrenttime(eachtime / 1000);
    });

    return (
        <div className="brain-gym-main braingym-page">
            <BraingymHead />
            <div className="brain-gym-bottom">
                <Braingymstepperpart
                    timeminutesecond={currenttime}
                />
                <QuestionAns
                    select={select}
                    setSelect={setSelect}
                    timeminutesecond={time}
                    setEachTimeOn={setEachTimeOn}
                    eachcurrenttime={eachcurrenttime}
                    setEachtime={setEachtime}
                />
                <BraingymUnlock timeminutesecond={currenttime} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    masterBrainGym: state.BrainGym.masterBrainGym,
    questionByTag: state.BrainGym.questionByTag,
});

const mapDispatchToProps = (dispatch) => ({
    getMasterBrainGym: () => dispatch(masterBraingymidAction()),
});

Braingym.propTypes = {
    getMasterBrainGym: func.isRequired,
    questionByTag: array.isRequired,
    masterBrainGym: object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Braingym);
