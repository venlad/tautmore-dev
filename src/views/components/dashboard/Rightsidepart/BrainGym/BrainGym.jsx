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
import {
    completeChestAction, getAllShell, getChestInfo, getIncorrectAns,
} from '../../../../../stores/BrainGym/BrainGymAction';
import TruserePopup from './CompletedPopup/TrusereCompPopup';
import BeltPopup from './CompletedPopup/BeltPopup';
import IncorrectAns from './IncorrectAns/IncorrectAns';
// import BrainGymResult from './BrainGymResult/BrainGymResult';
import Report from './Report/Report';

const BrainGym = ({
    setShowShell, showShell, chests, questionInChest, chestInfodata,
    completeChest, subjectList, completeChestData, chestInfo, allShell, Login,
    allShellData, inccorectAns, incorrecrAnsData,
}) => {
    const [viewBrain, setViewBrain] = useState('home');
    const [selectedSubject, setSelectedSubject] = useState({});
    const [select, setSelect] = useState([]);
    const [time, setTime] = useState(180000);
    const [currenttime, setCurrenttime] = useState();
    const [eachtime, setEachtime] = useState(0);
    const [eachtimeOn, setEachTimeOn] = useState(true);
    const [eachcurrenttime, setEachcurrenttime] = useState();
    const [currentChest, setCurrentChest] = useState({});

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
                chesttId: currentChest?._id,
            });
        }
    }, [questionInChest, time]);

    useEffect(() => {
        if (currentChest?._id) {
            chestInfo({
                chestId: currentChest?._id,
            });
        }
    },
    [currentChest]);
    useEffect(() => {
        if (allShellData?.data?.masterChest?._id) {
            inccorectAns({
                studentId: Login?._id,
                brainGymId: allShellData?.data?.masterChest?._id,
            });
        }
    },
    [allShellData]);
    useEffect(() => {
        if (completeChestData?.data?.allChestCompleted) {
            allShell({
                studentId: Login?._id,
                masterId: chestInfodata?.data?.masterId,
            });
        }
    },
    [completeChestData]);

    useEffect(() => {
        if (chests?.chests?.length > 0) {
            const chest = chests?.chests.find((data) => data.status !== 'COMPLETED');
            setCurrentChest(chest);
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
                            setSelectedSubject={setSelectedSubject}
                            selectedSubject={selectedSubject}
                        />
                        <BrainGymStartToday
                            currentChest={currentChest}
                            setViewBrain={setViewBrain}
                            selectedSubject={selectedSubject}
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
                        chests={chests}
                        currentChest={currentChest}
                        selectedSubject={selectedSubject}
                        setSubjectId={selectedSubject}
                        chestInfodata={chestInfodata}
                    />
                )}
            { viewBrain === 'question'
                && (
                    <QueAns
                        currentChest={currentChest}
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
                        chestId={currentChest}
                    />
                )}

            { viewBrain === 'completed_chest'
                && (
                    <Popup
                        currentChest={currentChest}
                        completeChestData={completeChestData?.data}
                        setViewBrain={setViewBrain}
                    />
                )}

            { viewBrain === 'get_belt'
                && (
                    <BeltPopup
                        currentChest={currentChest}
                        completeChestData={completeChestData?.data}
                        setViewBrain={setViewBrain}
                    />
                )}
            { viewBrain === 'report'
            && (
                <Report
                    setViewBrain={setViewBrain}
                    currentChest={currentChest}
                    completeChestData={completeChestData?.data}
                    allShellData={allShellData}
                />
            )}

            { completeChestData?.data?.allChestCompleted
                && viewBrain === 'completed_chest' && (
                <TruserePopup
                    currentChest={currentChest}
                    completeChestData={completeChestData?.data}
                    setViewBrain={setViewBrain}
                />
            )}
            { viewBrain === 'incorrectAns'
                && (
                    <IncorrectAns
                        setViewBrain={setViewBrain}
                        incorrecrAnsData={incorrecrAnsData}
                    />
                )}

            {/* <Report /> */}
            {/* <IncorrectAns /> */}
            {/* <ShellPoupup /> */}
            {/* <BrainGymResult /> */}
            {/* <QueAns /> */}
            {/* <BeltPopup /> */}
            {/* <TruserePopup /> */}
            { viewBrain === 'true_false'
            && <AnswerPopup setViewBrain={setViewBrain} chestId={currentChest} />}
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
    subjectList: array.isRequired,
    completeChestData: array.isRequired,
    chestInfo: func.isRequired,
    chestInfodata: array.isRequired,
    allShell: func.isRequired,
    Login: object.isRequired,
    allShellData: object.isRequired,
    inccorectAns: func.isRequired,
    incorrecrAnsData: object.isRequired,

};

const mapStateToProps = (state) => ({
    subjectList: state.Auth.Login?.data?.subjectsEnrolled,
    questionInChest: state.BrainGym.questionInChest,
    attemptQuestion: state.BrainGym.attemptQuestion,
    chests: state.BrainGym.chests,
    completeChestData: state.BrainGym.completeChest,
    chestInfodata: state.BrainGym.chestInfo,
    Login: state.Auth.Login?.data,
    allShellData: state.BrainGym.allShell,
    incorrecrAnsData: state.BrainGym.incorrectAnswer,

});

const mapDispatchToProps = (dispatch) => ({
    completeChest: (data) => dispatch(completeChestAction(data)),
    chestInfo: (data) => dispatch(getChestInfo(data)),
    allShell: (data) => dispatch(getAllShell(data)),
    inccorectAns: (data) => dispatch(getIncorrectAns(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrainGym);
