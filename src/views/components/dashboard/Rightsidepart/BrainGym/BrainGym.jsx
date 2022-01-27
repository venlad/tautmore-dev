import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {  func, bool, array } from 'prop-types';
import './style/brainGym.scss';
import BrainGymHead from './BrainGymHead';
import BrainGymSublist from './BrainGymSublist';
import BrainGymStartToday from './BrainGymStartToday';
import BrainGymScore from './BrainGymScore';
import Shell from './Shell/Shell';
import QueAns from './QueAnswer';
import AnswerPopup from './Shell/AnswerPopup';
// import IncorrectAns from './IncorrectAns/IncorrectAns';
// import BrainGymResult from './BrainGymResult/BrainGymResult';
// import Popup from './CompletedPopup/Popup';
// import Report from './Report/Report';

const BrainGym = ({
    setShowShell, showShell, chests,
}) => {
    const [viewBrain, setViewBrain] = useState('home');
    const [chestId, setChestId] = useState('');

    // useEffect(() => {
    //     if (questionInChest.length > 0) {
    //         setViewBrain('question');
    //     }
    // }, [questionInChest]);

    // useEffect(() => {
    //     if (attemptQuestion?.status === 'success') {
    //         setViewBrain('true_false');
    //     }
    // }, [questionInChest]);

    useEffect(() => {
        if (chests?.chests?.length > 0) {
            let chest_id = [];
            chest_id = chests?.chests.filter((data) => data.status !== 'STARTED');
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
                        <BrainGymSublist />
                        <BrainGymStartToday setViewBrain={setViewBrain} />
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
                    />
                )}
            { viewBrain === 'question'
                && <QueAns chestId={chestId} setViewBrain={setViewBrain} />}

            {/* <Report /> */}
            {/* <IncorrectAns /> */}
            {/* <ShellPoupup /> */}
            {/* <BrainGymResult /> */}
            {/* <Popup /> */}
            {/* <QueAns /> */}
            { viewBrain === 'true_false'
            && <AnswerPopup setViewBrain={setViewBrain} chestId={chestId} />}
        </div>
    );
};

BrainGym.propTypes = {
    setShowShell: func.isRequired,
    showShell: bool.isRequired,
    // questionInChest: array.isRequired,
    // attemptQuestion: array.isRequired,
    chests: array.isRequired,
};

const mapStateToProps = (state) => ({
    questionInChest: state.BrainGym.questionInChest,
    attemptQuestion: state.BrainGym.attemptQuestion,
    chests: state.BrainGym.chests,
});

export default connect(mapStateToProps, null)(BrainGym);
