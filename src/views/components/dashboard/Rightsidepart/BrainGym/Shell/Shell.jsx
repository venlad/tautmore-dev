import React, { useEffect } from 'react';
import {
    func, array, bool, string,
} from 'prop-types';
import { connect } from 'react-redux';
import Banner from './Banner';
import ShellList from './ShellList';
import PointsIcon from '../../../../../../assets/images/Points.svg';
import Close from '../../../../../../assets/images/Close-shell.svg';
import Calender from '../../../../../../assets/images/Calender-shell.svg';
import './style/shell.scss';
import ShellPoupup from './ShellPoupup';

const Shell = ({
    setViewBrain, chests, setShowShell, showShell, chestId,
}) => {
    useEffect(() => {
        if (chests?.length > 0) {
            setShowShell(true);
        }
    }, [chests]);
    return (
        <div className={`shell-main-top ${showShell ? 'active' : ''}`}>
            <div className="shell-main">
                <div className="container-background">
                    <div className="image-background">
                        <div className="total-points">
                            <div className="total-points-and-icon">
                                <img id="icon-small" src={PointsIcon} alt="No Imag" />
                                <p>112 Total Points</p>
                            </div>
                            <button type="button" className="close-btn" onClick={() => setViewBrain('home')}>
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
                                        <p className="subject-name">Mathematics</p>
                                    </div>
                                    <div className="col-12 col-sm-3">
                                        <div className="flex-items-calender-date">
                                            <img className="Calender" src={Calender} alt="No Imag" />
                                            <div className="title-and-date">
                                                <p id="date-title">Date</p>
                                                <p id="date">16th Aug</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <ShellList setViewBrain={setViewBrain} />
                    </div>
                </div>
            </div>

            <ShellPoupup
                setShowShell={setShowShell}
                chestId={chestId}
                setViewBrain={setViewBrain}
            />
        </div>
    );
};

Shell.propTypes = {
    setViewBrain: func.isRequired,
    chests: array.isRequired,
    setShowShell: func.isRequired,
    showShell: bool.isRequired,
    chestId: string.isRequired,
};

const mapStateToProps = (state) => ({
    chests: state.BrainGym.chests.chests,
});

export default connect(mapStateToProps, null)(Shell);
