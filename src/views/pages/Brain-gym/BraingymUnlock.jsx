import React from 'react';
import { chevRight } from '../../../assets/icons/IconList';
import close from '../../../assets/images/close.png';
import stopwatch from '../../../assets/images/stopwatch.png';
import { func, number, bool } from 'prop-types';
import CompletedRecord from './CompletedRecord';


const BraingymUnlock = ({open, setOpen, message, step, setStep, select,  setSelect, counter, setCounter}) => {

    const removePopup = () => {
        setOpen(false);
        setStep((cur) => cur + 1);
        setCounter(counter + 1);
    }
    
    const closePopup = () => {
        setOpen(false);
        // setSelect(select);
        console.log(select , 'select from popup');
    }

    return (
        <div>
        {
            step < 4 ? 
            (<div className={`braingym-unlock-main ${open === true && 'active'}`}>
            <div className="close-top">
                <button type="button" className="close-btn" onClick={closePopup}><img src={close} alt="close" /></button>
            </div>
                <div className="unlock-common">
                            <h2>{message[step].title}</h2>
                            <p className="coin-p"><span /> {message[step].coin}</p>
                            <button type="button" onClick={removePopup}>{message[step].level} <span>{chevRight}</span></button>
                </div>
            </div>)
            :
            ( <div className={`braingym-unlock-main ${open === true && 'active'}`}>
            <div className="close-top">
                <button type="button" className="close-btn" onClick={() => setOpen(false)}><img src={close} alt="close" /></button>
            </div>
                <div className="unlock-common">
                            <h2>Treasure hunt completed !</h2>
                            <p className="coin-p"><span /> 1980 coins totally earned</p>
                            <div className="row unlock-data-part">
                                <div className="col-md-6">
                                    <CompletedRecord title="Time taken" desc="00:12:56" image={stopwatch} />
                                </div>
                                <div className="col-md-6">
                                    <CompletedRecord title="Correct answers" desc="34 out of 50" image={stopwatch} />
                                </div>
                            </div>
                            <div className="row unlock-last-part">
                                <div className="col-md-6 last-part-half">
                                    <a href="view">View answers</a>
                                </div>
                                <div className="col-md-6 last-part-half">
                                    <button type="button">Finish <span>{chevRight}</span></button>
                                </div>
                            </div>
                </div>
            </div>)
        }

       
        </div>
    );
};

BraingymUnlock.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
    step: number.isRequired,
    setStep: func.isRequired,
};

export default BraingymUnlock;
