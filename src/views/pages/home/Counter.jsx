import { array } from 'prop-types';
import React from 'react';
import CounterBlock from './CounterBlock';

function Counter({ count }) {
    return (
        <div>
            <div className="counter-main">
                <div className="row">
                    {
                        count?.map((item) => (
                            <CounterBlock title={item?.heading} desc={item?.description} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

Counter.propTypes = {
    count: array,
};

Counter.defaultProps = {
    count: [],
};

export default Counter;
