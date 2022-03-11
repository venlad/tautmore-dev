import React from 'react';
import { object } from 'prop-types';
import Buttoncommon from '../home/Button';
import STRAPI_URL from '../../../constants/strapi';

const Features = ({ features }) => (
    <div className="features-wrap">
        <h2>{features?.heading}</h2>
        <div className="row">
            <div className="col-12 col-md-6 features-left">
                {
                    features?.listItems?.map((item) => (
                        <div className="d-flex" key={item?.id}>
                            <div className="point">
                                <span />
                            </div>
                            <p>{item?.text}
                            </p>
                        </div>
                    ))
                }
                <Buttoncommon content={features?.buttonText} />
            </div>
            <div className="col-12 col-md-6 features-right">
                <img src={STRAPI_URL + features?.heroImage?.data?.attributes?.url} alt="banner_img" />
            </div>
        </div>
    </div>
);
Features.propTypes = {
    features: object,
};

Features.defaultProps = {
    features: {},
};
export default Features;
