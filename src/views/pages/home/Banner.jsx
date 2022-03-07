/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-danger */
import { object } from 'prop-types';
import React from 'react';
import STRAPI_URL from '../../../constants/strapi';
import Buttoncommon from './Button';

function Banner({ banner }) {
    return (
        <div className="banner-main">
            <div className="row">
                <div className="col-md-6 col-sm-12 banner-left">
                    <h4 dangerouslySetInnerHTML={{ __html: banner?.heading }} />
                    <p>
                        {banner?.description}
                    </p>
                    <Buttoncommon content={banner?.buttonText} />

                    <div className="banner-left-bottom-icon" />
                </div>
                <div className="col-md-6 col-sm-12 banner-right">
                    <img src={STRAPI_URL +  banner?.heroImage?.data?.attributes?.url} alt="banner_img" />
                </div>
            </div>
        </div>
    );
}

Banner.propTypes = {
    banner: object,
};

Banner.defaultProps = {
    banner: {},
};

export default Banner;
