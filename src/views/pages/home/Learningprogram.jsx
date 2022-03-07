import { object } from 'prop-types';
import React from 'react';
import LearningprogramBlock from './LearningprogramBlock';

function Learningprogram({ learning }) {
    return (
        <div className="learningprogram-main">
            <div className="row">
                <div className="col-md-3 col-sm-12 learning-progress-left">
                    <h4>
                        {learning?.heading}
                    </h4>

                    <p>
                        {learning?.description}
                    </p>
                </div>
                <div className="col-md-9 col-sm-12 learning-progress-right">
                    <div className="row">
                        {
                            learning?.activities?.slice(0, 2)?.map((item) => (
                                <LearningprogramBlock
                                    title={item?.heading}
                                    desc={item?.description}
                                />
                            ))
                        }
                    </div>

                    <div className="row">
                        {
                            learning?.activities?.slice(2)?.map((item) => (
                                <LearningprogramBlock
                                    title={item?.heading}
                                    desc={item?.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

Learningprogram.propTypes = {
    learning: object,
};

Learningprogram.defaultProps = {
    learning: {},
};

export default Learningprogram;
