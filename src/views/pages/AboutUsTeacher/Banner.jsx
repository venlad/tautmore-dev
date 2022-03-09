import React from 'react';
import BannerImg from '../../../assets/images/Group 27.png';
import Buttoncommon from '../home/Button';

const Banner = () => (
    <div className="banner-about">
        <div className="row">
            <div className="col-md-6 col-sm-12 banner-left">
                <div className="span-grp">
                    <span className="span-1" />
                    <span className="span-2" />
                    <span className="span-3" />
                    <span className="span-4" />
                </div>
                <h4>
                    Leaders learn, Leaders teach, All the time!
                </h4>
                <p>
                    Take your passion global with TautMore. Teach students all around the world,
                    prepare them for the global competition, help them unlock the joy of learning.
                </p>
                <Buttoncommon content="Start nurturing leaders" />

                <div className="banner-left-bottom-icon" />
            </div>
            <div className="col-md-6 col-sm-12 banner-right">
                <img src={BannerImg} alt="banner_img" />
            </div>
        </div>
    </div>
);

export default Banner;
