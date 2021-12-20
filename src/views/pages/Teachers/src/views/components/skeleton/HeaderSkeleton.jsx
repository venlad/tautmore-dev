import React from 'react';
import { Row, Col } from 'react-bootstrap';
import  logo  from '../../../assets/images/Logo.png';

const HeaderSkeleton = () => (
    <div className="header-skeleton">
        <Row className="loading-skeleton">
            <Col sm={3} className="header-skeleton-left loading">
                <div className="logo-part">
                    <img src={logo} alt="logo" />
                </div>
            </Col>
            <Col sm={9} className="header-skeleton-right">
                <p />
            </Col>
        </Row>
    </div>
);

export default HeaderSkeleton;
