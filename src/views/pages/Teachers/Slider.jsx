/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './slider.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../components/dashboard/dashboard.scss';
import { Button } from 'react-bootstrap';
import { func } from 'prop-types';
// import ArrowRight from  '../../../assets/images/sliderlefticon.svg';

const SimpleSlider = ({ handleSubjectModel }) =>  {
    const  settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // prevArrow: <ArrowRight />,
    };
    return (

        <Slider {...settings}>
            <div className="col-sm-6 col-md-6 sliderBox">
                <div className="">
                    <h3 className="subname">Mathematics</h3>
                    <p>Trigonometry - Topic 2</p>
                    <p><span>Tue 27th Jul </span>| <span> 10:30 AM - 11:30 AM</span></p>
                </div>
                <div className="row gradesection">
                    <div className="col-sm-4 floatleft">
                        <p>Grade 4</p>
                    </div>
                    <div className="col-sm-4 floatleft">
                        <p>27 students</p>
                    </div>
                    <div className="col-sm-4 floatleft">
                        <p>45 minutes class</p>
                    </div>
                </div>
                <div className="buttondiv">
                    <Button className="viewdetailsbutton" onClick={() => handleSubjectModel(true)}>VIEW DETAILS</Button>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 sliderBox">
                <div className="row">
                    <h3 className="subname">Mathematics</h3>
                    <p>Trigonometry - Topic 2</p>
                    <p><span>Tue 27th Jul </span>| <span> 10:30 AM - 11:30 AM</span></p>
                </div>
                <div className="row gradesection">
                    <div className="col-sm-4 floatleft">
                        <p>Grade 4</p>
                    </div>
                    <div className="col-sm-4 floatleft">
                        <p>27 students</p>
                    </div>
                    <div className="col-sm-4 floatleft">
                        <p>45 minutes class</p>
                    </div>
                </div>
                <div className="buttondiv">
                    <Button className="viewdetailsbutton"><a href="/" className="">VIEW DETAILS</a></Button>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 sliderBox">
                <div className="">
                    <h3 className="subname">Mathematics</h3>
                    <p>Trigonometry - Topic 2</p>
                    <p><span>Tue 27th Jul </span>| <span> 10:30 AM - 11:30 AM</span></p>
                </div>
                <div className="row gradesection">
                    <div className="col-sm-4 floatleft">
                        <p>Grade 4</p>
                    </div>
                    <div className="col-sm-4 floatleft">
                        <p>27 students</p>
                    </div>
                    <div className="col-sm-4 floatleft">
                        <p>45 minutes class</p>
                    </div>
                </div>
                <div className="buttondiv">
                    <Button className="viewdetailsbutton"><a href="/" className="">VIEW DETAILS</a></Button>
                </div>
            </div>

        </Slider>

    );
};
SimpleSlider.propTypes = {
    handleSubjectModel: func.isRequired,
};
export default SimpleSlider;
