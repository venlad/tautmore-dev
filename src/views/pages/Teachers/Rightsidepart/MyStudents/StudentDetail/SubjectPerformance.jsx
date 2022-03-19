import React from 'react';
import SubjectPerformanceScore from './SubjectPerformanceScore';
import perform_green_one from '../../../../../../assets/images/performance-green1.svg';
import perform_yellow_one from '../../../../../../assets/images/performance-yellow1.svg';
import perform_yellow_two from '../../../../../../assets/images/performance-yellow2.svg';

const SubjectPerformance = () => (
    <div className="sub-performance">
        <div className="sub-performance-head">
            <h3>Subject Performance</h3>
            <p>mathematics</p>
        </div>
        <div>
            <div className="sub-performance-common sub-performance-left">
                <SubjectPerformanceScore
                    heading="1.4 Count to 20"
                    score="78"
                    desc="You need to focus more on this topic. You’ll get there!"
                    className="error error-left"
                />
                <SubjectPerformanceScore
                    heading="1.2 Count to 10"
                    score="187"
                    desc="You have improved in this topic! Good work!"
                    className="success"
                />
            </div>
            <div className="sub-performance-center">
                <div className="one-line common-line">
                    <img src={perform_green_one} alt="performance" />
                </div>
                <div className="two-line common-line">
                    <img src={perform_yellow_one} alt="performance" />
                </div>
                <div className="three-line common-line">
                    <img src={perform_yellow_two} alt="performance" />
                </div>
            </div>
            <div className="sub-performance-common sub-performance-right">
                <SubjectPerformanceScore
                    heading="1.4 Count to 20"
                    score="89"
                    desc="You need to focus more on this topic. You’ll get there!"
                    className="error error-right"
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
