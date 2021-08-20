import React from 'react';
import dancing from '../../../../assets/images/dancing.png';
import singing from '../../../../assets/images/singing.png';
import craft from '../../../../assets/images/crafts.png';

const Activity = () => (
    <div className="">
        <div className="row activity-main">
            <div className="col-md-6 act-left">
                <h3>Co - curricular activities</h3>

                <p>Take part in these co - curricular activities and</p>
                <p>nourish your desired talents now! </p>

                <li>View all activities</li>
            </div>

            <div className="col-md-2 act-right">
                <div style={{ backgroundImage: `url(${dancing})` }} className="dancing">
                    <h5>Dancing</h5>
                </div>

            </div>
            <div className="col-md-2 act-right">
                <div style={{ backgroundImage: `url(${singing})` }} className="singing">
                    <h5>SINGING</h5>
                </div>

            </div>
            <div className="col-md-2 act-right">
                <div style={{ backgroundImage: `url(${craft})` }} className="craft">
                    <h5>CRAFTS</h5>
                </div>
            </div>

        </div>
    </div>
);

export default Activity;
