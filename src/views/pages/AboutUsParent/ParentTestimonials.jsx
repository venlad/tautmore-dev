/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from '../../../assets/images/testi.jpg';
import { chevLeft, chevRight } from '../../../assets/icons/IconList';

const ParentTestimonials = () => {
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
                <div className="wrap">
                    <div className="slide-prev" onClick={() => slider?.current?.slickPrev()} onKeyPress={() => slider?.current?.slickPrev()} role="button" tabIndex={0}>{chevLeft}</div>
                    <Slider ref={slider} {...settings}>
                        <div className="testimonial-card d-flex">
                            <div className="testimonial-image">
                                <img src={Image} alt="" />
                            </div>
                            <div className="testimonial-info">
                                <p>
                                    Exploring, playing, curiosity, and creativity are the
                                    characteristic nature of a child. TautMore overcomes
                                    the limitations of traditional platforms and harnesses
                                    smart technologies to bring out the best in every child,
                                    to make learning a joyful experience.
                                </p>
                                <span>
                                    <h5>Satish Kumar</h5>
                                    <p>Senior Manager, Paypal</p>
                                </span>
                            </div>
                        </div>
                        <div className="testimonial-card d-flex">
                            <div className="testimonial-image">
                                <img src={Image} alt="" />
                            </div>
                            <div className="testimonial-info">
                                <p>
                                    Exploring, playing, curiosity, and creativity are the
                                    characteristic nature of a child. TautMore overcomes
                                    the limitations of traditional platforms and harnesses
                                    smart technologies to bring out the best in every child,
                                    to make learning a joyful experience.
                                </p>
                                <span>
                                    <h5>Satish Kumar</h5>
                                    <p>Senior Manager, Paypal</p>
                                </span>
                            </div>
                        </div>
                        <div className="testimonial-card d-flex">
                            <div className="testimonial-image">
                                <img src={Image} alt="" />
                            </div>
                            <div className="testimonial-info">
                                <p>
                                    Exploring, playing, curiosity, and creativity are the
                                    characteristic nature of a child. TautMore overcomes
                                    the limitations of traditional platforms and harnesses
                                    smart technologies to bring out the best in every child,
                                    to make learning a joyful experience.
                                </p>
                                <span>
                                    <h5>Satish Kumar</h5>
                                    <p>Senior Manager, Paypal</p>
                                </span>
                            </div>
                        </div>
                    </Slider>
                    <div className="slide-next" onClick={() => slider?.current?.slickNext()} onKeyPress={() => slider?.current?.slickNext()} role="button" tabIndex={0}>{chevRight}</div>
                </div>

            </div>
        </div>
    );
};

export default ParentTestimonials;
