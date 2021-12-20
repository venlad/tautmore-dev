import React from 'react';
import { Row } from 'react-bootstrap';

const AccountDetail = () => (
    <div className="account-details">
        <h4 className="account-details-name">Account details</h4>
        <Row>
            <div className="col-md-6 details">
                <p className="tautid">Tautmorian ID (Login)</p>
                <div className="space">
                    <h5 className="name">susan.<span className="span-one">9871245551</span></h5>
                </div>
            </div>

            <div className="col-md-6">
                <Row>
                    <div className="col-md-6 cred pass-left">
                        <p>Password</p>
                        <h5>* * * * * * * * * *</h5>
                    </div>

                    <div className="col-md-6 text-right pass-right">
                        <div className="change-pass">
                            <button type="button" className="pass"><span>CHANGE PASSWORD</span></button>
                        </div>
                    </div>
                </Row>
            </div>

        </Row>

        <div />

    </div>
);

export default AccountDetail;
