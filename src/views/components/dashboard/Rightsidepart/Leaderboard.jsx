import React, { useState } from 'react';
import {  string } from 'prop-types';
import leaderboard from '../mockData/leaderboarddata';

const Leaderboard = ({ title }) => {
    const [activebtn, setActivebtn] = useState('maths');
    const handleMathsColor = () => setActivebtn('maths');
    const handleSciencecolor = () => {
        setActivebtn('science');
    };
    return (
        <div className="dashtable-main">

            <div className="dashtable-heading">
                <h3>{title}</h3>
                <span>
                    <select className="dtable-select" name="dtableselect" id="days">
                        <option value="lastweek">Last Week</option>
                        <option value="lastmonth">Last Month</option>
                        <option value="lastquarter ">Last Quarter</option>
                    </select>
                </span>
            </div>
            <div className="dtoggle-bar">
                <div className="toggle-maths-div">
                    <button
                        className={`toggle-maths-btn ${
                            activebtn === 'maths' ? 'mathbtn-act' : 'mathbtn-un'
                        }`}
                        type="button"
                        onClick={() => handleMathsColor()}
                    >
                        Mathematics
                    </button>
                </div>
                <div className="toggle-science-div">
                    <button
                        className={`toggle-science-btn ${
                            activebtn === 'science' ? 'sciencebtn-act' : 'sciencebtn-un'
                        }`}
                        type="button"
                        onClick={() => handleSciencecolor()}
                    >
                        Science
                    </button>
                </div>
            </div>
            <div className="dtable">

                <table>
                    <thead>
                        <tr>

                            {leaderboard?.heading?.map((item) => <th key={item}>{item}</th>)}
                        </tr>

                    </thead>

                    <tbody>

                        {leaderboard?.data?.map((data) => (
                            <tr key={data.key}>
                                <td className="rank"><div>{data.rank}</div></td>
                                <td className="name">
                                    <div className="name-main">
                                        <div className="name-image-div">
                                            <img className="name-image" src={data.imageURL} alt={data.name} />
                                        </div>
                                        <div className="name-text">{data.name}</div>
                                    </div>
                                </td>
                                <td className="accuracy">
                                    <div>{data.accuracy}</div>
                                </td>
                                <td className="overalltime">
                                    <div>{data.overalltime}</div>
                                </td>
                                <td className="answer">
                                    <div>{data.answer}</div>
                                </td>
                                <td className="coins">
                                    <div className="coins-main">
                                        <div className="coins-medal" />
                                        <div className="coins-text">{data.coins}</div>
                                    </div>
                                </td>
                                <td className="smartscore">
                                    <div>{data.smartscore}</div>
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
};

Leaderboard.propTypes = {
    title: string.isRequired,
};

export default Leaderboard;
