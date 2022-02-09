import React from 'react';
import {  func } from 'prop-types';
import Mysubjectcountcommon from './Mysubjectcountcommon';

const Mysubjectcount = ({
    setConcept,
}) => (
    <div className="mysubject-count">
        <Mysubjectcountcommon
            setConcept={setConcept}
        />
    </div>
);

Mysubjectcount.propTypes = {

    setConcept: func.isRequired,
};

export default Mysubjectcount;
