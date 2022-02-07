import React from 'react';
import { chevRight, chevLeft } from '../../../../../assets/icons/IconList';

const Mysubjectcounttop = () => (
    <div className="row mysubject-count-top">
        <div className="col-md-2 col-sm-2 col-2">
            <div className="icon">
                {chevLeft}
            </div>
        </div>
        <div className="col-md-8 col-sm-8 col-8 text-center">
            <span>chapters</span>
            <select>
                <option>1. Count to 10</option>
                <option>2. Count to 9</option>
                <option>3. Count to 8</option>
            </select>
        </div>
        <div className="col-md-2 col-sm-2 col-2 right-part">
            <div className="icon">
                {chevRight}
            </div>
        </div>
    </div>
);

export default Mysubjectcounttop;
