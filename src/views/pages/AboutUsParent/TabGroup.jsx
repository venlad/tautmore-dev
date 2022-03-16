import { object } from 'prop-types';
import React from 'react';
import STRAPI_URL from '../../../constants/strapi';
import Button from '../home/Button';

const TabGroup = ({ data }) => (
    <div>
        <div>
            <div className="physical-classroom-main">
                <h4>
                    {data?.heading}
                </h4>

                <p className="main-p">
                    {data?.description}
                </p>

                <div className="row">
                    {
                        data?.activities?.map((item) => (
                            <div className="col-md-3" key={item?.id}>
                                <div
                                    className="common-tab-div-1"
                                >
                                    <img src={STRAPI_URL + item?.image?.data?.attributes?.url} alt="user_image" />
                                    <h5>{item?.heading}</h5>
                                    <span className="layer-1" />
                                    <span className="layer-2" />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center">
                    <Button content={data?.buttonText} link={data?.buttonUrl} />
                </div>
            </div>
        </div>
    </div>
);
TabGroup.propTypes = {
    data: object,
};

TabGroup.defaultProps = {
    data: {},
};
export default TabGroup;
