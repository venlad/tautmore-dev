import { object } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import STRAPI_URL from '../../../constants/strapi';

const ResourceCard = ({ data }) => (

    <div className="card-wrap">
        <div className="resource-card">
            <img src={STRAPI_URL + data?.image?.data?.attributes?.url} alt="" />
            <h4>{data?.heading}</h4>
            <Link to={data?.link}>
                <p>Read more</p>
            </Link>
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
