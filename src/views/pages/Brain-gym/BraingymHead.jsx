import React from 'react';
import logo from '../../../assets/images/Logo.png';
import close from '../../../assets/images/close.png';

const BraingymHead = () => (
    <div className="row brain-gym-head-main">
        <div className="col-sm-3">
            <img src={logo} alt="logo" />
        </div>
        <div className="col-sm-6 text-center">
            <h1>Brain - Gym</h1>
        </div>
        <div className="col-sm-3 head-right">
            <button type="button"><img src={close} alt="close" /></button>
        </div>
    </div>
);

export default BraingymHead;
