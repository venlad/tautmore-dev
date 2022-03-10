/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import ResourceCard from './ResourceCard';
import { chevRight } from '../../../assets/icons/IconList';

const Resources = () => {
    const [slide, setSlide] = useState(0);
    const slider = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_current, next) => setSlide(next),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (

        <div className="resources-main">
            <h2>Resources for better pedagogy</h2>

            <div className="carousel-wrap">
                {slide > 0 && <div className="prev-btn" onClick={() => slider?.current?.slickPrev()} onKeyPress={() => slider?.current?.slickPrev()} role="button" tabIndex={0}>{' < '}</div>}
                <Slider ref={slider} {...settings}>
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                </Slider>
                {slide < 4 - 2 && <div className="next-btn" onClick={() => slider?.current?.slickNext()} onKeyPress={() => slider?.current?.slickNext()} role="button" tabIndex={0}>{' > '}</div>}
            </div>
            <div className="col-12 d-flex justify-content-center btn-div">
                <button type="button" className="button-common-abt">
                    Take smart kids to brilliance, teach with TautMore
                    <span>{chevRight}</span>
                </button>
            </div>
        </div>

    );
};

export default Resources;
