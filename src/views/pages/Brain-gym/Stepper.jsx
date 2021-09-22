import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

const Stepper = ({ allChest }) => (
    <div className="row brain-margin-row">
        <div className="col-md-12 stepper-top text-center">
            {allChest && allChest.map((chest, i) => (
                <div
                    key={chest.id}
                    className={`stepper-above ${chest.status === 'started' || allChest[i - 1]?.status === 'finished' ? 'active' : ''} ${
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
    allChest: object.isRequired,
};

const mapStateToProps = (state) => ({
    allChest: state.BrainGym.masterBrainGym?.chest,
});

export default connect(mapStateToProps)(Stepper);
