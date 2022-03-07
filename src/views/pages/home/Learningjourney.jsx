import { object } from 'prop-types';
import React from 'react';
import STRAPI_URL from '../../../constants/strapi';
import Buttoncommon from './Button';

function Learningjourney({ data }) {
    return (
        <div>
            <div className="learning-journey-main">
                <div className="row">
                    <div className="col-md-5 learning-journey-left">
                        <div>
                            <h4>
                                <span /> {data?.heading}
                            </h4>

                            <Buttoncommon content={data?.buttonText} />
                        </div>
                    </div>
                    <div className="col-md-7 learning-journey-right">
                        <img src={STRAPI_URL +  data?.heroImage?.data?.attributes?.url} alt="Journey_img" />
                    </div>
                </div>
            </div>
        </div>
    );
}
Learningjourney.propTypes = {
    data: object,
};

Learningjourney.defaultProps = {
    data: {},
};
export default Learningjourney;
