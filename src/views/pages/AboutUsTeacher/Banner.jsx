/* eslint-disable react/no-danger */
import { object } from 'prop-types';
import React from 'react';
import STRAPI_URL from '../../../constants/strapi';
import Buttoncommon from '../home/Button';

const Banner = ({ banner }) => (
    <div className="banner-about">
        <div className="row">
            <div className="col-md-7 col-sm-12 banner-left">
                <div className="span-grp">
                    <span className="span-1" />
                    <span className="span-2" />
                    <span className="span-3" />
                    <span className="span-4" />
                </div>
                <h4 dangerouslySetInnerHTML={{ __html: banner?.heading }} />
                <p>
                    {banner?.description}.
                </p>
                <Buttoncommon content={banner?.buttonText} />

                <div className="banner-left-bottom-icon" />
            </div>
            <div className="col-md-5 col-sm-12 banner-right">
                <img src={STRAPI_URL + banner?.heroImage?.data?.attributes?.url} alt="banner_img" />
            </div>
        </div>
    </div>
);
Banner.propTypes = {
    banner: object,
};

Banner.defaultProps = {
    banner: {},
};
export default Banner;
