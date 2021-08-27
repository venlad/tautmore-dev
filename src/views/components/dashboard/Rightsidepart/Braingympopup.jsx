import React from 'react';
import { bool, func } from 'prop-types';
import { chevRight, close } from '../../../../assets/icons/IconList';

const Braingympopup = ({ showpopup, setShowpopup }) => (
    <div className={`brain-gym-popup ${showpopup}`}>
        <div className="row">
            <div className="col-md-3 col-12" />
            <div className="col-md-9 col-12">
                <h3>Brain gym</h3>
                <p>Set your preferred time to take this daily test and earn coins</p>
            </div>
        </div>
        <div className="text-center">
            <h4>11 : 30 AM</h4>
            <button type="button" className="button-common">Set time <span>{chevRight}</span></button>
            <span>You can change the time later if required in the settings page</span>
        </div>

        <button type="button" className="btn-close" onClick={() => setShowpopup(!showpopup)}>{close}</button>

    </div>
);

Braingympopup.propTypes = {
    showpopup: bool.isRequired,
    setShowpopup: func.isRequired,
};

export default Braingympopup;
