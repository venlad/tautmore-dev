import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const RenewsubHead = () => (
    <div className="renewsub-head">
        <h2>Renew subscription</h2>
        <Breadcrumb>
            <Breadcrumb.Item>My subscriptions</Breadcrumb.Item>
            <Breadcrumb.Item active>Renew subscription</Breadcrumb.Item>
        </Breadcrumb>
    </div>
);

export default RenewsubHead;
