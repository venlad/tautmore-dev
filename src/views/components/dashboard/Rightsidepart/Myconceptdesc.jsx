import React from 'react';
import { chevRight } from '../../../../assets/icons/IconList';

const Myconceptdesc = () => (
    <div className="myconcept-desc">
        <div className="row desc-top">
            <div className="col-md-7">
                <h5>1.1.1 Learn to count</h5>
                <li>What is counting and why its useful</li>
            </div>
            <div className="col-md-5">
                <button type="button">Take practice test <span>{chevRight}</span></button>
            </div>
        </div>
    </div>
);

export default Myconceptdesc;
