import React from 'react';
import {
    func, bool, object, array,
} from 'prop-types';
import Banner from './Banner';
import ShellList from './ShellList';
import PointsIcon from '../../../../../../assets/images/Points.svg';
import Close from '../../../../../../assets/images/Close-shell.svg';
import Calender from '../../../../../../assets/images/Calender-shell.svg';
import './style/shell.scss';
import ShellPoupup from './ShellPoupup';
import { currentDate } from '../../../../../../helpers/utility';

const Shell = ({
    setViewBrain, setShowShell, showShell, currentChest,
    selectedSubject, setSubjectId, chests, chestInfodata,
}) => {
    const closePopup = () => {
        setViewBrain('home');
        setSubjectId('');
    };
    return (
        <div className={`shell-main-top ${showShell ? 'active' : ''}`}>
            <div className="shell-main">
                <div className="container-background">
                    <div className="image-background">
                        <div className="total-points">
                            <div className="total-points-and-icon">
                                <img id="icon-small" src={PointsIcon} alt="No Imag" />
                                <p>{chests?.scoreObtained} Total Points</p>
                            </div>
                            <button type="button" className="close-btn" onClick={closePopup}>
                                <img src={Close} alt="No Imag" />
                            </button>
                        </div>
                        <Banner />
                        <div className="heading-brain-gym">
                            <div className="heading-and-subject">
                                <div className="row">
                                    <div className="col-sm-3" />
                                    <div className="col-12 col-sm-6">
                                        <h2>Brain gym</h2>
                                        <p className="subject-name">{selectedSubject?.name}</p>
                                    </div>
                                    <div className="col-12 col-sm-3">
                                        <div className="flex-items-calender-date">
                                            <img className="Calender" src={Calender} alt="No Imag" />
                                            <div className="title-and-date">
                                                <p id="date-title">Date</p>
                                                {/* <p id="date">16th Aug</p> */}
                                                <p id="date">{currentDate()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <ShellList
                            chests={chests?.chests}
                            currentChest={currentChest}
                            setViewBrain={setViewBrain}
                            setShowShell={setShowShell}
                            selectedSubject={selectedSubject}
                        />
                    </div>
                </div>
            </div>

            <ShellPoupup
                setShowShell={setShowShell}
                currentChest={currentChest}
                setViewBrain={setViewBrain}
                chestInfodata={chestInfodata?.data}
            />
        </div>
    );
};

Shell.propTypes = {
    chests: array.isRequired,
    setViewBrain: func.isRequired,
    setShowShell: func.isRequired,
    showShell: bool.isRequired,
    currentChest: object.isRequired,
    selectedSubject: object.isRequired,
    setSubjectId: object.isRequired,
    chestInfodata: object.isRequired,
};

export default Shell;
