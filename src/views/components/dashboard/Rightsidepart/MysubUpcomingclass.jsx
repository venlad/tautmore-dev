import React, { useState } from 'react';
import error from '../../../../assets/images/error.png';
import errowright from '../../../../assets/images/errowright.png';
import clock from '../../../../assets/images/stopwatch.png';
import info from '../../../../assets/images/info.png';
import downArrow from '../../../../assets/images/downarrow.png';
import { chevRight } from '../../../../assets/icons/IconList';

const MysubUpcomingclass = () => {
    const [show, setShow] = useState(true);
    const [hide, setHide] = useState(false);
    const clickShow = () => {
        setShow(!show);
    };
    const clickHide = () => {
        setHide(!hide);
    };
    return (
        <div>
            <div className={`mysub-upcoming ${show}`}>
                <div className="mysub-upcoming-head" onClick={clickShow} aria-hidden="true">
                    <h4>UPCOMING CLASS <img src={error} alt="upcoming_class" /> <span>{ !show ? (<img src={errowright} alt="errow_right" />) : (<img src={downArrow} alt="errow_down" />)}</span></h4>
                </div>
                <div className="mysub-upcoming-sub text-center">
                    <h5>Mathematics</h5>
                    <p className="chapter-p">Chapter 8: Trignometry</p>
                    <p className="img-p"><img src={clock} alt="clock" />Starts in 00:23:24</p>
                    <button type="button">Join class now <span>{chevRight}</span></button>
                    <p className="img-p audio-video"><img src={info} alt="audio&video" />Test audio & video</p>
                </div>
            </div>

            <div className={`mysub-upcoming practice-test ${hide}`}>
                <div className="mysub-upcoming-head" onClick={clickHide} aria-hidden="true">
                    <h4>PRACTICE TEST <span>{ !hide ? (<img src={errowright} alt="errow_right" />) : (<img src={downArrow} alt="errow_down" />)}</span></h4>
                </div>
                <div className="mysub-upcoming-sub text-center">
                    <p>Select a chapter and do a revision on your skills with this practice test</p>
                    <select>
                        <option>Select a chapter</option>
                        <option>Chapter 1</option>
                        <option>Chapter 2</option>
                        <option>Chapter 3</option>
                    </select>
                    <button type="button">Take practice test <span>{chevRight}</span></button>
                </div>
            </div>

        </div>
    );
};

export default MysubUpcomingclass;
