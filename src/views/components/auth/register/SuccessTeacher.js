import React from 'react';

import SuccessIcon from '../../../../assets/images/success.svg';

const Success = () => (
    <div className="text-center success-part">
        <div>
            <img className="success-icon" src={SuccessIcon} alt="SuccessIcon" />

        </div>
        <h1>SUCCESS!</h1>
        <p>
            Your application has been submitted!
            Our team will reach out to you once it has been processed!
        </p>
    </div>
);

export default Success;
