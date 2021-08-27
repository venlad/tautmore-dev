import React from 'react';

const TestHeader = () => (
    <div className="row">
        <div className="col-12 col-sm-12 col-md-6 mt-4 mb-4 test-header-left">
            <h3 className="test-header">Practice test</h3>
            <span className="sub-links-normal">
                Pre - kindergarten / Mathematics / Chapter 1 /
            </span>
            <span className="sub-links-active"> Topic A.1</span>
        </div>

        <div className="col-12 col-sm-12 col-md-6 mt-4 mb-4 test-header-right">
            <div className="row ">
                <div className="col-12 col-sm-4 mt-4 mb-4">
                    <span className="sub-links-normal bold">Time</span>
                    <h4 className="font-weight-bold sub-links-bold"> 00:02:56</h4>
                </div>
                <div className="col-12 col-sm-4 mt-4 mb-4">
                    <span className="sub-links-normal bold">Questions answered</span>
                    <h4 className="font-weight-bold sub-links-bold"> 4 out of 10</h4>
                </div>
                <div className="col-12 col-sm-4 mt-4 mb-4">
                    <span className="sub-links-normal bold">Smart score</span>
                    <h4 className="font-weight-bold sub-links-bold success-pallete"> 50 out of 100</h4>
                </div>
            </div>
        </div>
    </div>
);

export default TestHeader;
