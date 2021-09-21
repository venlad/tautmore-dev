import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { chevRight, close } from '../../../../assets/icons/IconList';

const Braingympopup = ({ showpopup, setShowpopup }) => (
    <div className={`brain-gym-popup ${showpopup}`}>
        <div className="row">
            <div className="col-md-3 col-12" />
            <div className="col-md-9 col-12">
                <h3>Brain gym</h3>
                <p>Are you sure want to continue?</p>
            </div>
        </div>
        <div className="text-center">
            <Link to="/brain-gym"><button type="button" className="button-common">Continue<span>{chevRight}</span></button></Link>
        </div>

        <button type="button" className="btn-close" onClick={() => setShowpopup(!showpopup)}>{close}</button>

    </div>
);

Braingympopup.propTypes = {
    showpopup: bool.isRequired,
    setShowpopup: func.isRequired,
};

export default Braingympopup;
