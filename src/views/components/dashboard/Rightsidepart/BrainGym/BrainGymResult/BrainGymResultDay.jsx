import React from 'react';
import { number, string } from 'prop-types';
import calendar from '../../../../../../assets/images/calendarcopy3.png';
import handgesture from '../../../../../../assets/images/hand-gesturecopy 3.png';
import flash from '../../../../../../assets/images/flashcopy3.png';

const BrainGymResultDay = ({ date, totalScore, avgSpeed }) => (
    <div>

        <div className=" row braingymresult-daily-result">
            <div className="col-md-3 col-sm-6 col-12 result">
                <div className="result-img">

                    <img src={calendar} alt="calander" />
                </div>
                <div className="result-date">
                    <span> Date</span>
                    <h6>{date}</h6>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 result">
                <div className="result-img">

                    <img src={handgesture} alt="calander" />
                </div>
                <div className="result-date">
                    <span> Total score</span>
                    <h6>{totalScore} points</h6>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 result">
                <div className="result-img">

                    <img src={flash} alt="calander" />
                </div>
                <div className="result-date">
                    <span>Average speed</span>
                    <h6>{avgSpeed}</h6>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 view-details">

                <button type="button" className="btn"><span>View details</span></button>

            </div>

        </div>
    </div>

);
BrainGymResultDay.propTypes = {
    date: string.isRequired,
    totalScore: number.isRequired,
    avgSpeed: string.isRequired,

    // desc: string.isRequired,

};
export default BrainGymResultDay;
