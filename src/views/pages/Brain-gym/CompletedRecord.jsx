import React from 'react';
import { string } from 'prop-types';

const CompletedRecord = ({ title, desc, image }) => (
    <div className="row">
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-3">
                    <img src={image} alt={title} />
                </div>
                <div className="col-md-9">
                    <p>{title}</p>
                    <h5>{desc}</h5>
                </div>
            </div>
        </div>
    </div>
);

CompletedRecord.propTypes = {
    title: string.isRequired,
    desc: string.isRequired,
    image: string.isRequired,
};
export default CompletedRecord;
