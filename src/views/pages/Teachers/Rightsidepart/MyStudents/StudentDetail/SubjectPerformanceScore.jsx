import React from 'react';
import { string } from 'prop-types';
import hand from '../../../../../../assets/images/examlisthover1.png';

const SubjectPerformanceScore = ({
    heading, score, desc, className,
}) => (
    <div className={`count-block ${className}`}>
        <h4>{heading}</h4>
        <div className="count-block-desc">
            <p className="score"><img src={hand} alt="hand" />
                <span>{score}</span> HIGHEST SCORE
            </p>
            <p className="desc">{desc}</p>
        </div>
    </div>
);

SubjectPerformanceScore.propTypes = {
    heading: string.isRequired,
    score: string.isRequired,
    desc: string.isRequired,
    className: string.isRequired,
};

export default SubjectPerformanceScore;
