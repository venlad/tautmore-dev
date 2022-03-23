import React from 'react';
import '../../components/dashboard/dashboard.scss';
import Myconcept from './Concept';

const SubTopic = () => (
    <div className="dashboard-main open">
        <div className="row row-main dashboard-main-row">
            <div className="col-sm-12 dashboard-right">
                <Myconcept />
            </div>
        </div>
    </div>
);

export default SubTopic;
