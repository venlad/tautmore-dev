import React from 'react';
import { object, string } from 'prop-types';
import { errowRight } from '../../../assets/icons/IconList';

function LearningprogramBlock({
    data, className, second,
}) {
    return (
        <div className={`col-md-6 col-sm-6 ${second}`}>
            <div className={`col-md-12 learning-block-main ${className}`}>
                <div className="row">
                    <div className="col-md-3 learning-block-left d-flex align-items-center">
                        <div className="icon">
                            <img src={data?.image?.data?.attributes?.url} alt="" width="100%" height="100%" />
                        </div>
                    </div>
                    <div className="col-md-7 learning-block-right">
                        <h5>{data?.heading}</h5>
                        <p>{data?.description}</p>
                    </div>

                    <div className="col-md-2 learning-right-icon">{errowRight}</div>
                </div>
            </div>
        </div>
    );
}
LearningprogramBlock.propTypes = {
    className: string.isRequired,
    second: string,
    data: object,

};
LearningprogramBlock.defaultProps = {
    second: '',
    data: {},
};

export default LearningprogramBlock;
