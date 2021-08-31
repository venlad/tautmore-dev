import React from 'react';

const CompletedRecord = ({title, desc, image}) => {
    return (
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
    )
}

export default CompletedRecord
