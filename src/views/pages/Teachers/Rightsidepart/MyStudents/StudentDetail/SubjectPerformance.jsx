import React from 'react';
import SubjectPerformanceScore from './SubjectPerformanceScore';

const SubjectPerformance = () => (
    <div className="sub-performance">
        <div className="sub-performance-head">
            <h3>Subject Performance</h3>
            <p>mathematics</p>
        </div>
        <div className="row">
            <div className="col-md-4">
                <SubjectPerformanceScore
                    heading="1.4 Count to 20"
                    score="78"
                    desc="You need to focus more on this topic. You’ll get there!"
                    className="error"
                />
                <SubjectPerformanceScore
                    heading="1.2 Count to 10"
                    score="187"
                    desc="You have improved in this topic! Good work!"
                    className="success"
                />
            </div>
            <div className="col-md-4" />
            <div className="col-md-4">
                <SubjectPerformanceScore
                    heading="1.4 Count to 20"
                    score="89"
                    desc="You need to focus more on this topic. You’ll get there!"
                    className="error"
                />
                <SubjectPerformanceScore
                    heading="1.2 Count to 10"
                    score="187"
                    desc="You have improved in this topic! Good work!"
                    className="success"
                />
            </div>
        </div>
    </div>
);

export default SubjectPerformance;
