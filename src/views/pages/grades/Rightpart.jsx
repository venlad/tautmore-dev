import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import STRAPI_URL from '../../../constants/strapi';

function Rightpart({ selectGrade, activities }) {
    const linkUrl = (val) => `/chapters/${val}`;

    return (
        <div className="rectangle grade-right-part">
            <div className="pre-kindergarten-center">
                <h1>{selectGrade}</h1>
            </div>

            <div className="classroom-subject main-common">
                {activities?.map((data) => (
                    <div key={data?.id} className="subject-list-main">
                        <div className="classroom head-common">
                            <p>{data?.attributes?.title}</p>
                        </div>
                        <div className="subjects">
                            <ul className="row">
                                {data?.attributes?.subjects?.data?.map((item) => (
                                    <li key={item?.id} className="col-md-4 math">
                                        <Link to={linkUrl(item?.attributes?.slug)}>
                                            <img
                                                className="myexams-icon"
                                                // eslint-disable-next-line max-len
                                                src={STRAPI_URL + item?.attributes?.icon?.data?.attributes?.url}
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
    selectGrade: PropTypes.string.isRequired,
    activities: PropTypes.array.isRequired,
};

export default Rightpart;
