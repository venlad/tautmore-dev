import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import { errowRight } from '../../../assets/icons/IconList';
import  SubjectData  from './mockData/SubjectlistData';

const Subjectlist = ({ subdata }) => {
    const divClass = (data) => (subdata === data.title ? 'col-md-2 active' : 'col-md-2');
    const link = (data) => `/chapters/${data.title}`;

    return (
        <div>
            <div className={`sub-list-main ${subdata && 'mainactive'}`}>
                {SubjectData?.map((data) => (
                    <div
                        className={divClass(data)}
                        key={data.key}
                    >
                        <Link to={link(data)}>
                            <img src={data.image} alt="webbsite_log" />
                            <h5>{data.title}</h5>
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
};

Subjectlist.defaultProps = {
    subdata: '',
};
export default Subjectlist;
