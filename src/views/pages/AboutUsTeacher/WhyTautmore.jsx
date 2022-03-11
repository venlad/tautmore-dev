/* eslint-disable react/no-danger */
import { string } from 'prop-types';
import React from 'react';
import { array } from 'yup';
import Buttoncommon from '../home/Button';

const WhyTautmore = ({ cardData, btnText, title }) => (
    <div className="why-wrap">
        <h1>{title}</h1>
        <div className="why-points-wrapper">
            <span className="sw-ab-1" />
            <span className="sw-ab-2" />
            <span className="sw-ab-3" />
            <div className="row">
                {
                    cardData?.map((item) => (
                        <div className="col-12 col-md-6" key={item?.id}>
                            <div className="why-card">
                                <h2>{item?.heading}</h2>
                                <div dangerouslySetInnerHTML={{ __html: item?.description }} />
                                {
                                    item?.listItems?.map((sub) => (
                                        <div className="d-flex align-items-center">
                                            <div className="size-sm" />
                                            <small key={sub?.id}>
                                                {sub?.text}
                                            </small>
                                            <br />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                <div className="col-12 d-flex justify-content-center">
                    <Buttoncommon content={btnText} />
                </div>
            </div>
        </div>
    </div>
);
WhyTautmore.propTypes = {
    cardData: array,
    btnText: string,
    title: string,
};

WhyTautmore.defaultProps = {
    cardData: [],
    btnText: '',
    title: '',
};
export default WhyTautmore;
