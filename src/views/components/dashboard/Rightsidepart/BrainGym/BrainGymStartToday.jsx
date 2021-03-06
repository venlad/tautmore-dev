import React from 'react';
import {  func, object } from 'prop-types';
import Line1 from '../../../../../assets/images/Line1.png';
import Line2 from '../../../../../assets/images/Line2.png';
import Line3 from '../../../../../assets/images/Line 3.png';
import Line4 from '../../../../../assets/images/Line 4.png';
import Shell from '../../../../../assets/images/shell.png';
import Edit from '../../../../../assets/images/edit.png';

// import Edit from '../../../../src/views/pages/BrainGym';

function BrainGymStartToday({ setViewBrain, selectedSubject, currentChest }) {
    return (
        <div className="braingym-starttoday">
            <div className="row">
                <div className="col-md-5 col-sm-12 col-12 braingym-starttoday-left">
                    <div className="line1">
                        <img src={Line1} alt="" />
                    </div>
                    <h3>
                        Start today’s Brain gym
                    </h3>

                    <div className="starttoday-div">
                        Continue the workout, earn points and make sure you maintain your streak
                    </div>
                    <span>{currentChest?.chestIndex}/5 shells opened</span>
                </div>
                <div className="col-md-7 col-sm-12 col-12 braingym-starttoday-right">
                    <div className="row">
                        {currentChest?._id
                            ? (
                                <div className="col-md-3 col-sm-5 col-12 shell">
                                    <img src={Shell} alt="" />
                                    <span onClick={() => setViewBrain('shell')} aria-hidden="true">Shell{currentChest?.chestIndex}</span>
                                </div>
                            )
                            : (
                                <div className="col-md-3 col-sm-5 col-12 shell">
                                    <span aria-hidden="true">Select Subject{currentChest?.chestIndex}</span>
                                </div>
                            )}

                        <div className="col-md-1 col-sm-1 col-12 line2">
                            <img src={Line2} alt="" />
                        </div>
                        <div className="col-md-1 col-sm-1 col-12 line3">
                            <img src={Line3} alt="" />
                        </div>
                        <div className="col-md-1 col-sm-1 col-12 line4">
                            <img src={Line4} alt="" />
                        </div>

                        <div className="col-md-5 col-sm-5 col-12 button">
                            <div>
                                <button type="button" className="btn" onClick={() => setViewBrain('workout')} disabled={!selectedSubject?._id}><span className="btn-span">Begin workout</span>
                                </button>
                                <div>
                                    <img className="img" src={Edit} alt="" /><span className="img-span">Set brain gym time </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

BrainGymStartToday.propTypes = {
    currentChest: object.isRequired,
    setViewBrain: func.isRequired,
    selectedSubject: object.isRequired,
};

export default BrainGymStartToday;
