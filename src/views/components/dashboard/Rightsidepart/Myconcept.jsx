import React from 'react';
import MyconceptHead from './MyconceptHead';
import Myconceptdesc from './Myconceptdesc';
import MyconceptVideo from './MyconceptVideo';

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
