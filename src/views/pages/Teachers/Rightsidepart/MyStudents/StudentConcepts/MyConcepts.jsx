import React from 'react';
import MyconceptHead from './MyConceptHead';
import Myconceptdesc from './MyConceptDesc';
import MyconceptVideo from './MyConceptVideo';

const Myconcept = () => (
    <div className="myconcept-main row">
        <div className="col-md-8">
            <div className="myconcept-left">
                <MyconceptHead />
                <Myconceptdesc />
            </div>
        </div>
        <div className="col-md-4">
            <div className="myconcept-right">
                <MyconceptVideo />
            </div>
        </div>
    </div>
);

export default Myconcept;
