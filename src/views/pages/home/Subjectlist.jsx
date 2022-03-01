import React from 'react';
import { Link } from 'react-router-dom';
import { array, string } from 'prop-types';
import { errowRight } from '../../../assets/icons/IconList';
import STRAPI_URL from '../../../constants/strapi';

const Subjectlist = ({ subdata, subjects }) => {
    // eslint-disable-next-line max-len
    const divClass = (data) => (subdata === data?.attributes?.slug ? 'col-md-2 active' : 'col-md-2');
    const link = (data) => `/chapters/${data}`;

    return (
        <div>
            <div className={`sub-list-main ${subdata && 'mainactive'}`}>
                {subjects?.map((data) => (
                    <div
                        className={divClass(data)}
                        key={data.id}
                    >
                        <Link to={link(data?.attributes?.slug)}>
                            <img
                                src={STRAPI_URL + data?.attributes?.icon?.data?.attributes?.url}
                                alt="webbsite_log"
                            />
                            <h5>{data?.attributes?.title}</h5>
                        </Link>
                    </div>
                ))}
                <div className="col-md-2 ">
                    <span className="sub-next">Next {errowRight}</span>
                </div>
            </div>
        </div>
    );
};
Subjectlist.propTypes = {
    subdata: string,
    subjects: array,
};

Subjectlist.defaultProps = {
    subdata: '',
    subjects: [],
};
export default Subjectlist;
