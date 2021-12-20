import React from 'react';
// import dancing from '../../../../assets/images/dancing.png';
// import singing from '../../../../assets/images/singing.png';
// import craft from '../../../../assets/images/crafts.png';

const Activity = () => (
    <div className="">
        <div className="activity-main">
            <div className="act-left">
                <h3>Co - curricular activities</h3>

                <p>Take part in these co - curricular activities and</p>
                <p>nourish your desired talents now! </p>

                <li>View all activities</li>
            </div>

            <div className="act-right">
                <div className="row">
                    <div className="col-md-4">
                        <div className="act-right-common">
                            <h5>Dancing</h5>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="act-right-common">
                            <h5>SINGING</h5>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="act-right-common">
                            <h5>CRAFTS</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default Activity;
