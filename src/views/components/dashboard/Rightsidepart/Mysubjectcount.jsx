import React from 'react';
import {  bool, func } from 'prop-types';
import Mysubjectcountcommon from './Mysubjectcountcommon';

const Mysubjectcount = ({
    show, setShow, hide, setHide,
}) => (
    <div className="mysubject-count">
        <Mysubjectcountcommon
            show={show}
            setShow={setShow}
            hide={hide}
            setHide={setHide}
        />
    </div>
);

Mysubjectcount.propTypes = {
    show: bool.isRequired,
    setShow: func.isRequired,
    hide: bool.isRequired,
    setHide: func.isRequired,
};

export default Mysubjectcount;
