import React from 'react';
import { Link } from 'react-router-dom';

import { rightpartData } from './mockData/Data';

function Rightpart() {
    return (
        <div className="rectangle grade-right-part">
            <div className="pre-kindergarten-center">
                <h1>Pre-kindergarten</h1>
            </div>

            <div className="classroom-subject main-common">
                {rightpartData.map((data) => (
                    <div key={data.key} className="subject-list-main">
                        <div className="classroom head-common">
                            <p>{data.title}</p>
                        </div>
                        <div className="subjects">
                            <ul className="row">
                                {data?.data?.map((item) => (
                                    <li key={item.title} className="col-md-4 math">
                                        <Link to="test">
                                            <img
                                                className="myexams-icon"
                                                src={item.image}
                                                alt="logo"
                                            />
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rightpart;
