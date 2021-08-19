import React from 'react';

const Error = () => (
    <div className="row error-part">
        <div className="col-md-1 col-sm-1 col-3 text-right" />
        <div className="col-md-8 col-9  col-sm-7">
            <h4>Your subscription is about to expire!</h4>
            <p>
                These are <span>9</span> classes left. Renew your subscription to
                continue the fun way of learning
            </p>
        </div>
        <div className="col-md-3 col-12 col-sm-3">
            <button type="button">
                <a href="#renew">RENEW</a>
            </button>
        </div>
    </div>
);

export default Error;
