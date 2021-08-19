import React from 'react';
import { display } from '../../../../assets/icons/IconList';

const ReportChild = ({ title, desc }) => (
    <div className="row">
        <div className="col-md-12">
            <div className="report-child">
                <div className="icon">
                    {display}
                </div>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    </div>
);

export default ReportChild;
