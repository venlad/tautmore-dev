import React from 'react';
import { connect } from 'react-redux';
import { array, func, string } from 'prop-types';
import Head from './Head';
import '../../../../../pages/Brain-gym/style/braingym.scss';
import './style.scss';
import QueAns from './QueAns';
import Time from './Time';

const index = ({
    questionInChest,
    chestId,
    setViewBrain,
    select,
    setSelect,
    currenttime,
    setEachTimeOn,
    eachcurrenttime,
    setEachtime,
}) => (
    <div className="brain-que-ans-main">
        <div className="brain-gym-main braingym-page">
            <Head />
            <div className="brain-gym-bottom">
                <Time totalTime={currenttime} />
                {questionInChest?.data?.map((data) => (
                    <QueAns
                        data={data}
                        setEachTimeOn={setEachTimeOn}
                        eachcurrenttime={eachcurrenttime}
                        select={select}
                        setSelect={setSelect}
                        chestId={chestId}
                        setViewBrain={setViewBrain}
                        setEachtime={setEachtime}
                    />
                ))}
            </div>
        </div>
    </div>
);
index.propTypes = {
    questionInChest: array.isRequired,
    chestId: string.isRequired,
    setViewBrain: func.isRequired,
    select: string.isRequired,
    setSelect: func.isRequired,
    currenttime: string.isRequired,
    setEachTimeOn: func.isRequired,
    eachcurrenttime: string.isRequired,
};

const mapStateToProps = (state) => ({
    questionInChest: state.BrainGym.questionInChest,
});

export default connect(mapStateToProps, null)(index);
