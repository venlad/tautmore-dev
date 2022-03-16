/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { array, string } from 'prop-types';
import Slider from 'react-slick';
import { errowRight } from '../../../assets/icons/IconList';
import STRAPI_URL from '../../../constants/strapi';

const Subjectlist = ({ subdata, subjects }) => {
    const slider = useRef(null);
    const [slide, setSlide] = useState(0);

    const divClass = (data) => (subdata === data?.attributes?.slug ? 'pill active' : 'pill');
    const link = (data) => `/chapters/${data}`;
    const settings = {
        focusOnSelect: true,
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        initialSlide: 0,
        beforeChange: (_current, next) => setSlide(next),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <>
            <div className="subject-list-wrap">

                {
                    slide > 0 && (
                        <div className="d-none d-sm-block col-1">
                            <span className="sub-prev" onClick={() => slider?.current?.slickPrev()} onKeyPress={() => slider?.current?.slickPrev()} role="button" tabIndex={0}>{errowRight} Prev</span>
                        </div>
                    )
                }
                <Slider ref={slider} {...settings} className="col-12 col-md-10">
                    {subjects?.map((data) => (
                        <div
                            className={divClass(data)}
                            key={data.id}
                        >
                            <Link to={link(data?.attributes?.slug)}>
                                <div className="pill-content">
                                    <img
                                        src={
                                            STRAPI_URL + data?.attributes?.icon?.data?.attributes?.url
                                        }
                                        alt="webbsite_log"
                                    />
                                    <h5>{data?.attributes?.title}</h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
                {
                    slide < subjects?.length - 5 && (
                        <div className="d-none d-sm-block col-1">
                            <span className="sub-next" onClick={() => slider?.current?.slickNext()} onKeyPress={() => slider?.current?.slickNext()} role="button" tabIndex={0}>Next {errowRight}</span>
                        </div>
                    )
                }

            </div>
        </>
    );
};
Subjectlist.propTypes = {
    subdata: string,
    subjects: array,
};

Subjectlist.defaultProps = {
    subdata: '',
    subjects: [],
};
export default Subjectlist;
