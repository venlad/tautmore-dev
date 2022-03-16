/* eslint-disable react/no-danger */
import { bool, object, string } from 'prop-types';
import React from 'react';
import STRAPI_URL from '../../../constants/strapi';
import Button from '../home/Button';

const SectionLeftRight = ({ className, fromLeft, data }) => (
    <>
        <div className={className}>
            {
                fromLeft ? (
                    <div className="row">
                        <div className="col-7">
                            <div className="section-left">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <h2>{data?.heading}</h2>
                                <div dangerouslySetInnerHTML={{ __html: data?.description }} />
                                <Button content={data?.buttonText} link={data?.buttonUrl} />
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="section-right">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <img src={STRAPI_URL + data?.image?.data?.attributes?.url} alt="" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-5">
                            <div className="section-left-1">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <img src={STRAPI_URL + data?.image?.data?.attributes?.url} alt="" />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="section-right-1">
                                <span className="shade-1" />
                                <span className="shade-2" />
                                <span className="shade-3" />
                                <span className="shade-4" />
                                <h2>{data?.heading}</h2>
                                <div dangerouslySetInnerHTML={{ __html: data?.description }} />
                                <Button content={data?.buttonText} link={data?.buttonUrl} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
);
SectionLeftRight.propTypes = {
    className: string,
    fromLeft: bool.isRequired,
    data: object,
};

SectionLeftRight.defaultProps = {
    className: 'section-main',
    data: {},
};
export default SectionLeftRight;
