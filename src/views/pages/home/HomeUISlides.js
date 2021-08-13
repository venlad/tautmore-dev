import React from 'react';
import { bool, object, string } from 'prop-types';
import Button from './Button';

const HomeUISlides = ({
    Circle,
    img,
    title,
    span,
    desc,
    // circcontentone,
    // circcontenttwo,
    // circcontentthree,
    leftImg,
    rightImg,
    title2,
    classmain,
    classleft,
    classright,
    buttoncontent,
}) => (
    <div>
        {leftImg && (
            <div className={`${classmain}`}>
                <div className="row">
                    <div className={`col-md-6 ${classleft}`}>
                        <img src={img} alt="Classroom_img" />
                    </div>
                    <div className={`col-md-4 ${classright}`}>
                        <h4>
                            {title}
                            <span>{span}</span>
                        </h4>
                        <p>{desc}</p>

                        {Circle && (
                            <ul>
                                {/* <li>
                                    {Circle} {circcontentone}
                                </li> */}
                                {/* <li>
                                    {Circle} {circcontenttwo}
                                </li>
                                <li>
                                    {Circle} {circcontentthree}
                                </li> */}
                            </ul>
                        )}

                        <Button content={buttoncontent} />
                    </div>
                </div>
            </div>
        )}

        {rightImg && (
            <div className={`${classmain}`}>
                <div className="row">
                    <div className={`${classleft}`}>
                        <h4>
                            {title}
                            <span>{span}</span>
                            {title2}
                        </h4>
                        <p>{desc}</p>

                        {Circle && (
                            <ul>
                                {/* <li>
                                    {Circle} {circcontentone}
                                </li> */}
                                {/* <li>
                                    {Circle} {circcontenttwo}
                                </li>
                                <li>
                                    {Circle} {circcontentthree}
                                </li> */}
                            </ul>
                        )}

                        <Button content={buttoncontent} />
                    </div>
                    <div className="col-md-1" />
                    <div className={`${classright}`}>
                        <img src={img} alt="Classroom_img" />
                    </div>
                </div>
            </div>
        )}
    </div>
);

HomeUISlides.propTypes = {
    Circle: object,
    img: string.isRequired,
    title: string.isRequired,
    span: string,
    desc: string.isRequired,
    // circcontentone: string,
    // circcontenttwo: string,
    // circcontentthree: string,
    leftImg: bool,
    rightImg: bool,
    title2: string,
    classmain: string.isRequired,
    classleft: string.isRequired,
    classright: string,
    buttoncontent: string.isRequired,

};
HomeUISlides.defaultProps = {
    title2: '',
    leftImg: false,
    rightImg: false,
    Circle: {},
    // circcontentone: '',
    // circcontenttwo: '',
    // circcontentthree: '',
    classright: '',
    span: '',
};

export default HomeUISlides;
