import React from 'react';
import BrainGymScoreChart from './BrainGymScoreChart';
import Score from '../../../../../assets/images/score.png';
import TotalScore from '../../../../../assets/images/totalScore.png';
import ScorePath from '../../../../../assets/images/scorePath.png';
import Star1 from '../../../../../assets/images/success1.png';
import Star2 from '../../../../../assets/images/success2.png';

function BrainGymScore() {
    return (
        <div className="braingym-score-main">
            <div className="braingym-score-head">
                <div className="braingym-score">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12 scoreimg ">
                            <div className="row">
                                <div className="col-md-5 scoreimg-left">
                                    <img src={Star1} alt="star" className="star-img" />
                                </div>
                                <div className="col-md-7 scoreimg-right">
                                    <img src={Score} alt="" className="score-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 score-avg ">
                            <p>Your average score in last 7 attempts in Mathematics is 92</p>
                        </div>

                        <div className="col-md-5 score-last">
                            <div className="row">
                                <div className="score-total col-md-4">
                                    <img src={TotalScore} alt="" />
                                    <div className="score-top">
                                        <span className="span1">Top score</span>
                                        <span>100/100</span>
                                    </div>
                                </div>
                                <div className="col-md-2 line-part">
                                    <div className="w-line" />
                                </div>
                                <div className="score-streak col-md-4">
                                    <img src={ScorePath} alt="" className="streak-img" />
                                    <div className="score-streak-div">
                                        <span className="span1">Longest streak</span>
                                        <span>4 days</span>
                                    </div>
                                </div>
                                <div className="col-md-2 last-star">
                                    <img src={Star2} alt="" className="star-2" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <BrainGymScoreChart />
                <div className="summery">

                    <button type="button" className="btn"><span className="btn-summery">View summary</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BrainGymScore;
