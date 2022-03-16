import React, { useState } from 'react';
import sidebar from './mockData/sidebarData';

const OlympiadSidebar = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="olympiad-sidebar">
            <ul>
                {sidebar.map((data, ind) => (
                    <li aria-hidden="true" key={Math.random()} onClick={() => setActive(ind)} className={`${active === ind ? 'active' : ''}`}>{data}</li>
                ))}
            </ul>
        </div>
    );
};

export default OlympiadSidebar;
