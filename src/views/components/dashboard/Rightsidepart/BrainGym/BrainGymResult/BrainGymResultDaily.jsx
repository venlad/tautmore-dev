import React from 'react';
import BrainGymResultDay from './BrainGymResultDay';
import ResultData from './mockData/BrainGymResultDaily';

const BrainGymResultDaily = () => (
    <div>
        <div className="braingymresult-daily-main">
            <div className="braingymresult-daily-head">
                <h4>Brain gym results</h4>
            </div>

            {ResultData.map((days) => (
                <div style={{ marginTop: '30px' }}>
                    <BrainGymResultDay
                        date={days.date}
                        totalScore={days.totalScore}
                        avgSpeed={days.avgSpeed}
                    />

                </div>
            ))}

        </div>

    </div>
);

export default BrainGymResultDaily;
