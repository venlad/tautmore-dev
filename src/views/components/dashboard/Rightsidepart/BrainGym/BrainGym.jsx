import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    func, bool, array, object,
} from 'prop-types';
import './style/brainGym.scss';
import BrainGymHead from './BrainGymHead';
import BrainGymSubjectlist from './BrainGymSubjectlist';
import BrainGymStartToday from './BrainGymStartToday';
import BrainGymScore from './BrainGymScore';
import Shell from './Shell/Shell';
import QueAns from './QueAnswer';
import AnswerPopup from './Shell/AnswerPopup';
import Popup from './CompletedPopup/Popup';
import { completeChestAction } from '../../../../../stores/BrainGym/BrainGymAction';
// import IncorrectAns from './IncorrectAns/IncorrectAns';
// import BrainGymResult from './BrainGymResult/BrainGymResult';
// import Report from './Report/Report';

const BrainGym = ({
    setShowShell, showShell, chests, questionInChest, completeChest, subjectList,
}) => {
    const [viewBrain, setViewBrain] = useState('home');
    const [chestId, setChestId] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [select, setSelect] = useState('');
    const [time, setTime] = useState(180000);
    const [currenttime, setCurrenttime] = useState();
    const [eachtime, setEachtime] = useState(0);
    const [eachtimeOn, setEachTimeOn] = useState(true);
    const [eachcurrenttime, setEachcurrenttime] = useState();

    useEffect(() => {
        let interval = null;

        if (questionInChest?.data?.length > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1000);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [questionInChest]);

    useEffect(() => {
        setCurrenttime(`${(`0${Math.floor((time / 60000) % 60)}`).slice(-2)
        }:${
            (`0${Math.floor((time / 1000) % 60)}`).slice(-2)}`);
    });

    useEffect(() => {
        let intervalEach = null;
        setEachTimeOn(true);
        if (questionInChest?.data?.length > 0 && eachtimeOn) {
            intervalEach = setInterval(() => {
                setEachtime((prevTimeEach) => prevTimeEach + 1000);
            }, 1000);
        } else {
            clearInterval(intervalEach);
        }
        return () => clearInterval(intervalEach);
    }, [eachtimeOn, questionInChest]);

    useEffect(() => {
        setEachcurrenttime(eachtime / 1000);
    });

    useEffect(() => {
        if (questionInChest?.message === 'COMPLETED' || time === 0) {
            setViewBrain('completed_chest');
            completeChest({
                chestId,
            });
        }
    }, [questionInChest, time]);

    useEffect(() => {
        if (chests?.chests?.length > 0) {
            let chest_id = [];
            chest_id = chests?.chests.filter((data) => data.status !== 'COMPLETED');
            chest_id = chest_id.map((data) => data?._id);
            chest_id = chest_id[0];
            setChestId(chest_id);
        }
    }, [chests]);

    return (
        <div>
            { viewBrain === 'home'
                && (
                    <div className="braingym-main">
                        <BrainGymHead />
                        <BrainGymSubjectlist
                            subjectList={subjectList}
                            setSubjectId={setSubjectId}
                        />
                        <BrainGymStartToday
                            setViewBrain={setViewBrain}
                            subjectId={subjectId}
                        />
                        <BrainGymScore />
                    </div>
                )}
            { viewBrain === 'workout'
                && (
                    <Shell
                        setViewBrain={setViewBrain}
                        setShowShell={setShowShell}
                        showShell={showShell}
                        chestId={chestId}
                        subjectId={subjectId}
                        setSubjectId={setSubjectId}
                    />
                )}
            { viewBrain === 'question'
                && (
                    <QueAns
                        chestId={chestId}
                        setViewBrain={setViewBrain}
                        select={select}
                        setSelect={setSelect}
                        time={time}
                        setTime={setTime}
                        currenttime={currenttime}
                        setCurrenttime={setCurrenttime}
                        eachtime={eachtime}
                        setEachtime={setEachtime}
                        eachtimeOn={eachtimeOn}
                        setEachTimeOn={setEachTimeOn}
                        eachcurrenttime={eachcurrenttime}
                        setEachcurrenttime={setEachcurrenttime}
                    />
                )}

            { viewBrain === 'completed_chest'
                && <Popup />}

            {/* <Report /> */}
            {/* <IncorrectAns /> */}
            {/* <ShellPoupup /> */}
            {/* <BrainGymResult /> */}
            {/* <QueAns /> */}
            { viewBrain === 'true_false'
            && <AnswerPopup setViewBrain={setViewBrain} chestId={chestId} />}
        </div>
    );
};

BrainGym.propTypes = {
    setShowShell: func.isRequired,
    showShell: bool.isRequired,
    questionInChest: array.isRequired,
    // attemptQuestion: array.isRequired,
    chests: array.isRequired,
    completeChest: func.isRequired,
    subjectList: object.isRequired,
};

const mapStateToProps = (state) => ({
    subjectList: state.Auth.Login?.data?.subjectsEnrolled,
    questionInChest: state.BrainGym.questionInChest,
    attemptQuestion: state.BrainGym.attemptQuestion,
    chests: state.BrainGym.chests,
});

const mapDispatchToProps = (dispatch) => ({
    completeChest: (data) => dispatch(completeChestAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrainGym);
