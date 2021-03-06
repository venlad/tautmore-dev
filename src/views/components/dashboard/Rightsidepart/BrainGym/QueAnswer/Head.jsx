import React from 'react';
import logo from '../../../../../../assets/images/Logo.png';
import close from '../../../../../../assets/images/close.png';

const Head = () => (
    <div className="row brain-gym-head-main">
        <div className="col-sm-3 col-12 head-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="col-sm-6 text-center col-12 head-content">
            <h1>Brain - Gym</h1>
        </div>
        <div className="col-sm-3 head-right col-12">
            <button type="button"><img src={close} alt="close" /></button>
        </div>
    </div>
);

export default Head;
