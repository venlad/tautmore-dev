import React from 'react';
import { object } from 'prop-types';
import PhysicalclassroomBlock from './PhysicalclassroomBlock';
import STRAPI_URL from '../../../constants/strapi';

function Physicalclassroom({ data }) {
    return (
        <div>
            <div className="physical-classroom-main">
                <h4>
                    {data?.heading}<span />
                </h4>

                <p className="main-p">
                    {data?.description}
                </p>

                <div className="row">
                    {
                        data?.activities?.map((item, i) => (
                            <PhysicalclassroomBlock
                                key={item?.id}
                                title={item?.heading}
                                desc={item?.description}
                                image={STRAPI_URL +  item?.image?.data?.attributes?.url}
                                index={i}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
Physicalclassroom.propTypes = {
    data: object,
};

Physicalclassroom.defaultProps = {
    data: {},
};

export default Physicalclassroom;
