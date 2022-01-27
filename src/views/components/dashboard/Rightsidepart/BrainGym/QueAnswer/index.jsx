import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { array, func, string } from 'prop-types';
import Head from './Head';
import '../../../../../pages/Brain-gym/style/braingym.scss';
import './style.scss';
import QueAns from './QueAns';
import Time from './Time';

const index = ({ questionInChest, chestId, setViewBrain }) => {
    const [select, setSelect] = useState([]);
    const [time, setTime] = useState(180000);
    const [currenttime, setCurrenttime] = useState();
    const [eachtime, setEachtime] = useState(0);
    const [eachtimeOn, setEachTimeOn] = useState(true);
    const [eachcurrenttime, setEachcurrenttime] = useState();

    useEffect(() => {
        let interval = null;

        if (questionInChest.length > 0) {
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
        if (questionInChest.length > 0 && eachtimeOn) {
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

    return (
        <div className="brain-que-ans-main">
            <div className="brain-gym-main braingym-page">
                <Head />
                <div className="brain-gym-bottom">
                    <Time totalTime={currenttime} />
                    {questionInChest.length > 0
                && questionInChest.map((data) => (
                    <QueAns
                        data={data}
                        setEachTimeOn={setEachTimeOn}
                        eachcurrenttime={eachcurrenttime}
                        select={select}
                        setSelect={setSelect}
                        chestId={chestId}
                        setViewBrain={setViewBrain}
                    />
                ))}
                </div>
            </div>
        </div>
    );
};
index.propTypes = {
    questionInChest: array.isRequired,
    chestId: string.isRequired,
    setViewBrain: func.isRequired,
};

const mapStateToProps = (state) => ({
    questionInChest: state.BrainGym.questionInChest,
});

export default connect(mapStateToProps, null)(index);
