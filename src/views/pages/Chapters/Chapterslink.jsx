import React, { useState } from 'react';
import { gradeLinks } from './data';

const Chapterslink = () => {
    const [selectedLink, setSelectedLink] = useState(0);
    return (
        <div className="chapters-links">
            <h1>Grade</h1>
            <ul className="links-list">
                {gradeLinks.map((link, linkIdx) => (
                    <li
                        key={link}
                        className={linkIdx === selectedLink ? 'active' : ''}
                    >
                        <button type="button" onClick={() => setSelectedLink(linkIdx)}>{link}</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Chapterslink;
