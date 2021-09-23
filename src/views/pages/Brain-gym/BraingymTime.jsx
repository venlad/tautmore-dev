import React from 'react';
import {
    string, object,
} from 'prop-types';
import { connect } from 'react-redux';
import clock from '../../../assets/images/clock.svg';
import chestopen from '../../../assets/images/Chestopen.svg';

const BraingymTime = ({
    chestData, timeminutesecond,
}) => {
    const { scoreObtained, multiplier, chestLevel } = chestData;
    return (
        <div className="row brain-margin-row">
            <div className="col-md-12 timer-top">
                <div className="row">
                    <div className="col-md-5 col-12 timer-left">
                        <div className="">
                            <div className="timer-sub-left">
                                <img src={clock} alt="clock" />
                            </div>
                            <div className="timer-sub-right">
                                <p>Time elapsed</p>
                                <h5>
                                    <span>{timeminutesecond}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-12 timer-right">
                        <div className="">
                            <div className="timer-sub-left">
                                <img src={chestopen} alt="clock" />
                            </div>
                            <div className="timer-sub-right">
                                <p>Chest {chestLevel} / 5</p>
                                <h5 className="coin">{scoreObtained && scoreObtained} coins <span>{multiplier && `x${multiplier}`}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => ({
    chestData: state.BrainGym.chestData,
});

BraingymTime.propTypes = {
    chestData: object.isRequired,
    timeminutesecond: string.isRequired,
};
export default connect(mapStateToProps)(BraingymTime);
