import React from 'react';
import { array, object } from 'prop-types';
import { connect } from 'react-redux';

const Stepper = ({ allChest, chestData }) => (
    <div className="row brain-margin-row">
        <div className="col-md-12 stepper-top text-center">
            {allChest && allChest.map((chest) => (
                <div
                    key={chest.id}
                    className={`stepper-above ${chest._id === chestData?._id && chest.status !== 'finished' ? 'active' : ''} ${
                        chest.status === 'finished' ? 'prev-step' : ''
                    }`}
                >
                    <button type="button">
                        <span className="round" />
                    </button>
                    <span className="name">{`Chest ${chest?.chestLevel}`}</span>
                </div>
            ))}
        </div>
    </div>
);

Stepper.propTypes = {
    allChest: array.isRequired,
    chestData: object.isRequired,
};

const mapStateToProps = (state) => ({
    chestData: state.BrainGym.chestData,
    allChest: state.BrainGym.masterBrainGym?.chest,
});

export default connect(mapStateToProps)(Stepper);
