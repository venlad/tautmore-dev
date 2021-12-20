import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import {  string } from 'prop-types';
import dashtablehead from '../../../../assets/images/dashtablehead.png';
import { time } from '../mockData/reportData';
import { leaderboard, leaderboard2 } from '../mockData/leaderboarddata';

const Leaderboard = ({ title }) => {
    const [activebtn, setActivebtn] = useState('maths');
    const [sub, setSub] = useState(leaderboard);
    const handleMathsColor = () => {
        setActivebtn('maths');
        setSub(leaderboard);
    };
    const handleSciencecolor = () => {
        setActivebtn('science');
        setSub(leaderboard2);
    };

    const generateLink = (idx) => `/assets/images/m_${idx}.png`;
    const [timedata, setTimedata] = useState(time[0]);
    const changeTime = (val) => {
        setTimedata(val);
    };

    return (
        <div className="dashtable-main">

            <div className="dashtable-heading">
                <h3>{title}</h3>
                <span>
                    <Dropdown>

                        <Dropdown.Toggle>
                            {timedata}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {time.map((data) => (
                                <Dropdown.Item key={data} onClick={() => changeTime(data)}>
                                    {data}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>

                    </Dropdown>
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

                        {sub?.data?.sort((a, b) => b.coins - a.coins)?.map((data, ind) => (
                            <tr key={data.key}>
                                <td className="rank"><div>{ind + 1}</div></td>
                                <td className="name">
                                    <div className="name-main">
                                        <div className="name-image-div">
                                            { ind === 0 && <img src={dashtablehead} alt="top_img" className="top-img" />}
                                            <img className="name-image" src={data.imageURL} alt={data.name} />
                                        </div>
                                        <div className="name-text">{data.name}</div>
                                        {ind < 3 && (
                                            <img
                                                src={generateLink(ind)}
                                                alt="medal"
                                                className="medal"
                                            />
                                        )}
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
