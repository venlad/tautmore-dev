import React from 'react';
import OlympiadSidebar from './OlympiadSidebar';
import OlympiadRIghtsidepart from './OlympiadRIghtsidepart';

const OlympiadPart = () => {
    return (
        <div className="row olympiad-bottom">
            <div className="col-md-3 col-12">
               <OlympiadSidebar />
            </div>
            <div className="col-md-9 col-12">
                <OlympiadRIghtsidepart />
            </div>
        </div>
    )
}

export default OlympiadPart
