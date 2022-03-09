/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import ResourceCard from './ResourceCard';
import { chevRight } from '../../../assets/icons/IconList';

const Resources = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
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
    console.log(settings);
    return (

        <div className="resources-main">
            <h2>Resources for better pedagogy</h2>

            <div className="carousel-wrap">
                <Slider {...settings}>
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                </Slider>
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
