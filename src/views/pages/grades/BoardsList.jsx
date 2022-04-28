/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import { array, func, string } from 'prop-types';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
import Arr from '../../../assets/icons/arr.svg';
import { selectBoardAction } from '../../../stores/Grades/GradesAction';

const Boardslist = ({
    boards, currentBoard, setCurrentBoard,
}) => {
    const slider = useRef(null);
    const [slide, setSlide] = useState(0);
    const dispatch = useDispatch();

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
                            <span className="sub-prev" onClick={() => slider?.current?.slickPrev()} onKeyPress={() => slider?.current?.slickPrev()} role="button" tabIndex={0}>
                                <img src={Arr} alt="" />    Prev
                            </span>
                        </div>
                    )
                }
                <Slider ref={slider} {...settings} className="col-12 col-md-10">
                    {boards?.map((data) => (
                        <div
                            className={currentBoard === data?.attributes?.slug ? 'pill active' : 'pill'}
                            key={data.id}
                        >

                            <div
                                className="pill-content"
                                onClick={() => {
                                    setCurrentBoard(data?.attributes?.slug);
                                    dispatch(selectBoardAction(data?.attributes?.slug));
                                }}
                                role="button"
                            >
                                <img
                                    src={
                                        data?.attributes?.icon?.data?.attributes?.url
                                    }
                                    alt="webbsite_log"
                                />
                                <h5>{data?.attributes?.title}</h5>
                            </div>
                        </div>
                    ))}
                </Slider>
                {
                    slide < boards?.length - 5 && (
                        <div className="d-none d-sm-block col-1">
                            <span className="sub-next" onClick={() => slider?.current?.slickNext()} onKeyPress={() => slider?.current?.slickNext()} role="button" tabIndex={0}>
                                Next <img src={Arr} alt="" />
                            </span>
                        </div>
                    )
                }

            </div>
        </>
    );
};
Boardslist.propTypes = {
    boards: array,
    setCurrentBoard: func,
    currentBoard: string,
};

Boardslist.defaultProps = {
    boards: [],
    setCurrentBoard: () => {},
    currentBoard: '',
};
export default Boardslist;
