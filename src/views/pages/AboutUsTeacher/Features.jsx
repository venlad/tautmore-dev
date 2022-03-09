import React from 'react';
import BannerImg from '../../../assets/images/Group 27.png';
import { Circle } from '../../../assets/icons/IconList';
import Buttoncommon from '../home/Button';

const Features = () => (
    <div className="features-wrap">
        <h2>TautMore’s features for teachers</h2>
        <div className="row">
            <div className="col-12 col-md-6 features-left">
                <div className="d-flex">
                    <div className="mr-point">{Circle}</div>
                    <p>Engage your students with Co-curricular activities for their wholesome
                        personality development
                    </p>
                </div>
                <div className="d-flex">
                    <div className="mr-point">{Circle}</div>
                    <p>Engage your students with Co-curricular activities for their wholesome
                        personality development
                    </p>
                </div>
                <div className="d-flex">
                    <div className="mr-point">{Circle}</div>
                    <p>Engage your students with Co-curricular activities for their wholesome
                        personality development
                    </p>
                </div>
                <div className="d-flex">
                    <div className="mr-point">{Circle}</div>
                    <p>Engage your students with Co-curricular activities for their wholesome
                        personality development
                    </p>
                </div>
                <div className="d-flex">
                    <div className="mr-point">{Circle}</div>
                    <p>Engage your students with Co-curricular activities for their wholesome
                        personality development
                    </p>
                </div>
                <Buttoncommon content="Start nurturing leaders" />
            </div>
            <div className="col-12 col-md-6 features-right">
                <img src={BannerImg} alt="banner_img" />
            </div>
        </div>
    </div>
);

export default Features;
