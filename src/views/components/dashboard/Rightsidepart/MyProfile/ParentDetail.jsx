import React from 'react';
import { Row } from 'react-bootstrap';

const ParentDetail = () => (
    <div className="parent-details">
        <h4 className="parent-details-name">PARENT DETAILS</h4>
        <Row>
            <div className="col-md-6">
                <p>Parent/guardian name</p>
                <h5>Jonathan Richards</h5>
            </div>
            <div className="col-md-6">
                <p>Email ID</p>
                <h5>jonathan@gmail.com</h5>
            </div>
        </Row>

        <Row>
            <div className="col-md-6">
                <p>Phone number</p>
                <h5>+1 - 8973-213-2129</h5>
            </div>
            <div className="col-md-6">
                <p>Country</p>
                <h5>United States of America</h5>
            </div>
        </Row>
        <Row>
            <div className="col-md-6">
                <p>State</p>
                <h5>Colorado</h5>
            </div>
        </Row>
    </div>
);

export default ParentDetail;
