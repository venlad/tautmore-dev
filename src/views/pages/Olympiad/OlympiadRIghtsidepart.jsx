import React, { useState } from 'react';
import { answerque, notanswerque } from './mockData/RightsidepartData';
import OlympiadQueanspart from './OlympiadQueanspart';

const OlympiadRIghtsidepart = () => {
    const [show, setShow] = useState(false);
    const [showtwo, setShowtwo] = useState(false);

    const dropDownone = () => {
        setShow(!show);
        setShowtwo(false);
    };

    const dropDowntwo = () => {
        setShowtwo(!showtwo);
        setShow(false);
    };
    return (
        <div className="olympiad-rightside-part">
            <div className="rightsidepart-top row">
                <div className="col-md-4 top-left">
                    <div className="current-que">
                        <h5>Current question : <span>1 / 30</span></h5>
                    </div>
                </div>
                <div className="col-md-8 top-right">
                    <div className="row">
                        <div className="col-md-6 top-right-common">
                            <div className="dropdown-main">
                                <div
                                    className={`select ${show ? 'active' : ''}`}
                                    onClick={dropDownone}
                                    aria-hidden="true"
                                >
                                    Answered Questions : <span className="number green">24</span> <span className="arrow-down" />
                                </div>
                                <div className={`dropdown ${show ? 'active' : ''}`}>
                                    {answerque.map((val) => (
                                        <div
                                            key={val}
                                            onClick={() => {
                                                // setSelect(val);
                                                setShow(false);
                                            }}
                                            aria-hidden="true"
                                        >
                                            Question {val}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 top-right-common">
                            <div className="dropdown-main">
                                <div
                                    className={`select ${showtwo ? 'active' : ''}`}
                                    onClick={dropDowntwo}
                                    aria-hidden="true"
                                >
                                    Answered Questions : <span className="number orange">6</span> <span className="arrow-down" />
                                </div>
                                <div className={`dropdown ${showtwo ? 'active' : ''}`}>
                                    {notanswerque.map((val) => (
                                        <div
                                            key={val}
                                            onClick={() => {
                                                // setSelecttwo(val);
                                                setShowtwo(false);
                                            }}
                                            aria-hidden="true"
                                        >
                                            Question {val}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="olympiad-practice-test">
                <OlympiadQueanspart />
            </div>

        </div>
    );
};

export default OlympiadRIghtsidepart;
