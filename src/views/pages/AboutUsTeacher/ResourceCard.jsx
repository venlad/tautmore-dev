import { object } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const ResourceCard = ({ data }) => (

    <div className="card-wrap">
        <div className="resource-card">
            <img src={data?.image?.data?.attributes?.url} alt="" />
            <div className="d-flex flex-column justify-content-between">
                <h4>{data?.heading}</h4>
                <Link to={data?.link}>
                    <p>Read more</p>
                </Link>
            </div>
        </div>

    </div>

);
ResourceCard.propTypes = {
    data: object,
};

ResourceCard.defaultProps = {
    data: {},
};
export default ResourceCard;
