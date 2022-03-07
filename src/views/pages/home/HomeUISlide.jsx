/* eslint-disable react/no-danger */
import React from 'react';
import {
    array, bool, object, string,
} from 'prop-types';
import Button from './Button';

const HomeUISlide = ({
    Circle,
    img,
    title,
    span,
    desc,
    leftImg,
    rightImg,
    title2,
    classmain,
    classleft,
    classright,
    buttoncontent,
    points,
}) => (
    <div>
        {leftImg && (
            <div className={`${classmain}`}>
                <div className="row">
                    <div className={`col-md-6 ${classleft}`}>
                        <img src={img} alt="Classroom_img" />
                    </div>
                    <div className={`col-md-6 ${classright}`}>
                        <div>
                            <h4>
                                {title}
                                <span />
                            </h4>

                            <p>{desc}</p>

                            {Circle && (
                                <ul>
                                    {
                                        points?.map((item) => (
                                            <li key={item?.id}>
                                                {Circle} {item?.text}
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}

                            <Button content={buttoncontent} />
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
                                {title}
                                {span}
                                {title2}
                                <span />
                            </h4>
                            <p>{desc}</p>

                            <Button content={buttoncontent} />
                        </div>
                    </div>

                    <div className={`${classright}`}>
                        <img src={img} alt="Classroom_img" />
                    </div>
                </div>
            </div>
        )}
    </div>
);

HomeUISlide.propTypes = {
    Circle: object,
    img: string.isRequired,
    title: string.isRequired,
    span: string,
    desc: string.isRequired,
    leftImg: bool,
    rightImg: bool,
    title2: string,
    classmain: string.isRequired,
    classleft: string.isRequired,
    classright: string,
    buttoncontent: string.isRequired,
    points: array,

};
HomeUISlide.defaultProps = {
    title2: '',
    leftImg: false,
    rightImg: false,
    Circle: '',
    classright: '',
    span: '',
    points: [],
};

export default HomeUISlide;
