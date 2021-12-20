import React from 'react';
import RenewsubHead from './RenewsubHead';
import RenewsubLeftpart from './RenewsubLeftpart';
import RenewsubRightpart from './RenewsubRightpart';

const Renewsub = () => (
    <div className="renewsub-main">
        <RenewsubHead />
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <RenewsubLeftpart />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <RenewsubRightpart />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Renewsub;
