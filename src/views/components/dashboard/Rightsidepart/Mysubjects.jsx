import React from 'react';
import {  func } from 'prop-types';
import Mysubjectstop from './Mysubjectstop';
import Mysubjectlist from './Mysubjectlist';

const Mysubjects = ({ setConcept }) => (
    <div>
        <Mysubjectstop />
        <Mysubjectlist setConcept={setConcept} />
    </div>
);

Mysubjects.propTypes = {
    setConcept: func.isRequired,
};

export default Mysubjects;
