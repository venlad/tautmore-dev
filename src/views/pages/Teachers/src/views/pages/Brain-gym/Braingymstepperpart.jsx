import React from 'react';
import {
    string, array,
} from 'prop-types';
import { connect } from 'react-redux';
import Stepper from './Stepper';
import BraingymTime from './BraingymTime';
import TimeSkeleton from '../../components/skeleton/TimeSkeleton';
import SteperSkeleton from '../../components/skeleton/SteperSkeleton';

const Braingymstepperpart = ({
    allChest, timeminutesecond, question,
}) => (
    <div className="row stepperpart-top">
        <div className="col-md-7 stepperpart-left">
            <div className="col-md-12">
                {!question ? (
                    <>
                        <SteperSkeleton />
                    </>
                ) : (<Stepper allChest={allChest} />)}
            </div>
        </div>
        <div className="col-md-5 stepperpart-right">
            <div className="col-md-12">
                {!question ? (
                    <TimeSkeleton />
                ) : (
                    <BraingymTime
                        timeminutesecond={timeminutesecond}
                    />
                )}
            </div>
        </div>
    </div>
);

Braingymstepperpart.propTypes = {
    allChest: array.isRequired,
    timeminutesecond: string.isRequired,
    question: array.isRequired,
};

const mapStateToProps = (state) => ({
    allChest: state.BrainGym.masterBrainGym?.chest,
});

export default connect(mapStateToProps)(Braingymstepperpart);
