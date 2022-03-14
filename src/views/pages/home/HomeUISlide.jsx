/* eslint-disable react/no-danger */
import React from 'react';
import {
    bool, object, string,
} from 'prop-types';
import Button from './Button';
import { Circle } from '../../../assets/icons/IconList';
import STRAPI_URL from '../../../constants/strapi';

const HomeUISlide = ({
    leftImg,
    rightImg,
    classmain,
    classleft,
    classright,
    data,
}) => (
    <div>
        {leftImg && (
            <div className={`${classmain}`}>
                <div className="row">
                    <div className={`col-md-6 ${classleft}`}>
                        <img src={STRAPI_URL +  data?.heroImage?.data?.attributes?.url} alt="Classroom_img" />
                    </div>
                    <div className={`col-md-6 ${classright}`}>
                        <div>
                            <h4>
                                {data?.heading}
                                <span />
                            </h4>

                            <p>{data?.description}</p>

                            <ul>
                                {
                                    data?.listItems?.map((item) => (
                                        <li key={item?.id}>
                                            {Circle} {item?.text}
                                        </li>
                                    ))
                                }
                            </ul>

                            <Button content={data?.buttonText} />
                        </div>
                    </div>
                </div>
            </div>
        )}

        {rightImg && (
            <div className={`${classmain}`}>
                <div className="row">
                    <div className={`${classleft}`}>
                        <div>
                            <h4>
                                {data?.heading}
                                <span />
                            </h4>
                            <p>{data?.description}</p>
                            <ul>
                                {
                                    data?.listItems?.map((item) => (
                                        <li key={item?.id}>
                                            {Circle} {item?.text}
                                        </li>
                                    ))
                                }
                            </ul>

                            <Button content={data?.buttonText} link={data?.buttonUrl} />
                        </div>
                    </div>

                    <div className={`${classright}`}>
                        <img src={STRAPI_URL +  data?.heroImage?.data?.attributes?.url} alt="Classroom_img" />
                    </div>
                </div>
            </div>
        )}
    </div>
);

HomeUISlide.propTypes = {
    leftImg: bool,
    rightImg: bool,
    classmain: string.isRequired,
    classleft: string.isRequired,
    classright: string,
    data: object,
};
HomeUISlide.defaultProps = {
    leftImg: false,
    rightImg: false,
    classright: '',
    data: {},
};

export default HomeUISlide;
