/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { array } from 'prop-types';
import { chevLeft, chevRight } from '../../../assets/icons/IconList';
import STRAPI_URL from '../../../constants/strapi';

const ParentTestimonials = ({ data }) => {
    const slider = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'button__bar',
    };

    return (
        <div className="testimonial-main">
            <h2>Parents Testimonals</h2>
            <div className="testimonial-slider">
                <div className="outer-wrap">
                    <div className="slide-prev" onClick={() => slider?.current?.slickPrev()} onKeyPress={() => slider?.current?.slickPrev()} role="button" tabIndex={0}>{chevLeft}</div>
                    <Slider ref={slider} {...settings}>
                        {
                            data?.map((item) => (
                                <div className="wrap testimonial-card d-flex" key={item?.id}>
                                    <div className="testimonial-image">
                                        <img src={STRAPI_URL + item?.image?.data?.attributes?.url} alt="" />
                                    </div>
                                    <div className="testimonial-info">
                                        <p>
                                            {item?.info}
                                        </p>
                                        <span>
                                            <h5>{item?.name}</h5>
                                            <p>{item?.profession}</p>
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                    <div className="slide-next" onClick={() => slider?.current?.slickNext()} onKeyPress={() => slider?.current?.slickNext()} role="button" tabIndex={0}>{chevRight}</div>
                </div>

            </div>
        </div>
    );
};
ParentTestimonials.propTypes = {
    data: array,
};

ParentTestimonials.defaultProps = {
    data: [],
};
export default ParentTestimonials;
