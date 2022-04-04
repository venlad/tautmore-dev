import React from 'react';
import { array, string } from 'prop-types';
import { Link } from 'react-router-dom';

function Rightpart({ selectGrade, activities }) {
    const linkUrl = (val) => `/chapters/${val}`;

    return (
        <div className="rectangle grade-right-part">
            <div className="pre-kindergarten-center">
                <h1>{selectGrade}</h1>
            </div>

            <div className="classroom-subject main-common">
                {activities?.sort((a, b) => (a.id > b.id ? 1 : -1))?.map((data) => (
                    <div key={data?.id} className="subject-list-main">
                        <div className="classroom head-common">
                            <p>{data?.attributes?.title}</p>
                        </div>
                        <div className="subjects">
                            <ul className="row">
                                {data?.attributes?.subjects?.data?.sort(
                                    (a, b) => (a.id > b.id ? 1 : -1),
                                )?.map((item) => (
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
                ))}
            </div>
        </div>
    );
}

Rightpart.propTypes = {
    selectGrade: string,
    activities: array,
};

Rightpart.defaultProps = {
    selectGrade: '',
    activities: [],
};

export default Rightpart;
