import React, { useState } from 'react';
import { chevRight, clock } from '../../../../assets/icons/IconList';
import Braingympopup from './Braingympopup';
import dashboardmap from '../../../../assets/images/dashboardmap.png';

const Braingym = () => {
    const [showpopup, setShowpopup] = useState(false);
    return (
        <div>
            <div className="brain-gym-main">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Brain gym <span>set time</span></h3>
                        <p>Unlock these chests everyday to earn points and redeem exciting prize</p>
                        <li className="li-one">Level 1 completed</li>
                        <li className="li-two"><span />300 XP earned</li>
                        <button type="button" className="button-common" onClick={() => setShowpopup(!showpopup)}>Start now <span>{chevRight}</span></button>
                        <span className="span-last">{clock} Time remaining: 18:14:08</span>
                        <span className="span-background" />
                    </div>
                    <div className="col-md-8">
                        <img src={dashboardmap} alt="map" />
                    </div>
                </div>
                <Braingympopup showpopup={showpopup} setShowpopup={setShowpopup} />
                <div className={`overlay ${showpopup}`} />
            </div>

        </div>
    );
};

export default Braingym;
