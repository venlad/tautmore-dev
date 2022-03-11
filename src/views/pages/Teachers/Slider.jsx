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
import { array } from 'yup/lib/locale';
// import ArrowRight from  '../../../assets/images/sliderlefticon.svg';

const SimpleSlider = ({
    myClassesList, handleSubjectModel, handleModel, setScheduleId,
}) =>  {
    const  settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // prevArrow: <ArrowRight />,
    };
    const openReschedule = (item) => {
        handleModel(true);
        setScheduleId(item?.id);
    };
    console.log(myClassesList, 'myClassesList from slider');
    return (

        <Slider {...settings}>

            {myClassesList?.map((item) => (
                <div key={item.id} className=" sliderBox">
                    <div className="sub-box-main row">
                        <div className="sub-box-left col-sm-8">
                            <h3 className="subname">{item.subject}</h3>
                            {/*
                            <p>Trigonometry - Topic 2</p> */}

                            <p><span>{item.date} </span>| <span> {item.timeslot}</span></p>
                        </div>
                        <div className="sub-box-right col-sm-4">
                            <button onClick={() => openReschedule(item)} type="button">reschedule</button>
                        </div>
                    </div>
                    <div className="row gradesection">
                        <div className="col-sm-4 floatleft">
                            <p>Grade {item.grade}</p>
                        </div>
                        <div className="col-sm-4 floatleft">
                            <p>{item.numberOfStudent} students</p>
                        </div>
                        <div className="col-sm-4 floatleft">
                            <p>45 minutes class</p>
                        </div>
                    </div>
                    <div className="buttondiv">
                        <Button className="viewdetailsbutton" onClick={() => handleSubjectModel(true)}>VIEW DETAILS</Button>
                    </div>
                </div>
            ))}
            {/* <div className=" sliderBox">
                <div className="sub-box-main row">
                    <div className="sub-box-left col-sm-8">
                        <h3 className="subname">Mathematics</h3>
                        <p>Trigonometry - Topic 2</p>
                        <p><span>Tue 27th Jul </span>| <span> 10:30 AM - 11:30 AM</span></p>
                    </div>
                    <div className="sub-box-right col-sm-4">
                        <button onClick={openReschedule} type="button">reschedule</button>
                    </div>
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
                    <Button className="viewdetailsbutton" onClick={()
                        => handleSubjectModel(true)}>VIEW DETAILS</Button>
                </div>
            </div>
            <div className=" sliderBox">
                <div className="sub-box-main row">
                    <div className="sub-box-left col-sm-8">
                        <h3 className="subname">Mathematics</h3>
                        <p>Trigonometry - Topic 2</p>
                        <p><span>Tue 27th Jul </span>| <span> 10:30 AM - 11:30 AM</span></p>
                    </div>
                    <div className="sub-box-right col-sm-4">
                        <button onClick={openReschedule} type="button">reschedule</button>
                    </div>
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
                    <Button className="viewdetailsbutton">
                    <a href="/" className="">VIEW DETAILS</a></Button>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 sliderBox">
                <div className="sub-box-main row">
                    <div className="sub-box-left col-sm-8">
                        <h3 className="subname">Mathematics</h3>
                        <p>Trigonometry - Topic 2</p>
                        <p><span>Tue 27th Jul </span>| <span> 10:30 AM - 11:30 AM</span></p>
                    </div>
                    <div className="sub-box-right col-sm-4">
                        <button onClick={openReschedule} type="button">reschedule</button>
                    </div>
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
                    <Button className="viewdetailsbutton">
                    a href="/" className="">VIEW DETAILS</a></Button>
                </div>
            </div> */}

        </Slider>

    );
};
SimpleSlider.propTypes = {
    handleSubjectModel: func.isRequired,
    handleModel: func.isRequired,
    myClassesList: array.isRequired,
    setScheduleId: func.isRequired,
};
export default SimpleSlider;
