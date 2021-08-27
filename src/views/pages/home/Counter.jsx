import React from 'react';
import CounterBlock from './CounterBlock';

function Counter() {
    return (
        <div>
            <div className="counter-main">
                <div className="row">
                    <CounterBlock title="500,000 +" desc="Questions for a quiz" />

                    <CounterBlock title="50 +" desc="Extra curricular activities" />

                    <CounterBlock title="5000 +" desc="Minutes of Brain-gym activity" />

                    <CounterBlock title="500 +" desc="Hours of Olympiad training" />
                </div>
            </div>
        </div>
    );
}

export default Counter;
