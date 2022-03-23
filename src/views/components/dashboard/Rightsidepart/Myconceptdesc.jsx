import { object } from 'prop-types';
import React from 'react';
import { chevRight, play } from '../../../../assets/icons/IconList';

const Myconceptdesc = ({ subTopic }) => (
    <div className="myconcept-desc">
        <div className="row desc-top">
            <div className="col-md-7">
                <h5>{subTopic?.subTopicNumber} {subTopic?.subTopicName}</h5>
                <li><span className="span-icon">{play}</span> <a href="useful">What is counting and why its useful</a></li>
            </div>
            <div className="col-md-5">
                <button type="button">Take practice test <span>{chevRight}</span></button>
            </div>
            <div className="col-md-12">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.<br />
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium,
                </p>
            </div>
        </div>
    </div>
);
Myconceptdesc.propTypes = {
    subTopic: object,
};

Myconceptdesc.defaultProps = {
    subTopic: {},
};
export default Myconceptdesc;
