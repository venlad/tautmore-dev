import React from 'react';
import { array, string } from 'prop-types';
import { Link } from 'react-router-dom';

function Rightpart({ selectGrade, subjects }) {
    const linkUrl = (val) => `/chapters/${val}`;

    return (
        <div className="rectangle grade-right-part">
            <div className="pre-kindergarten-center">
                <h1>{selectGrade}</h1>
            </div>

            <div className="classroom-subject main-common">
                <div className="subject-list-main">
                    <div className="classroom head-common">
                        <p>CLASS ROOM</p>
                    </div>
                    <div className="subjects">
                        <ul className="row">
                            {subjects?.sort((a, b) => (a.id > b.id ? 1 : -1))?.map((item) => (
                                <li key={item?.id} className="col-md-4 math">
                                    <Link to={linkUrl(item?.attributes?.slug)}>
                                        <img
                                            className="myexams-icon"
                                            // eslint-disable-next-line max-len
                                            src={item?.attributes?.icon?.data?.attributes?.url}
                                            alt="logo"
                                        />
                                        {item?.attributes?.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

Rightpart.propTypes = {
    selectGrade: string,
    subjects: array,
};

Rightpart.defaultProps = {
    selectGrade: '',
    subjects: [],
};

export default Rightpart;
