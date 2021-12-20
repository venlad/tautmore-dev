import React from 'react';
import Bannerimg from '../../../assets/images/Banner 5.png';
import Buttoncommon from './Button';

function Banner() {
    return (
        <div className="banner-main">
            <div className="row">
                <div className="col-md-6 col-sm-12 banner-left">
                    <h4>
                        Better <span>Learning.</span>
                    </h4>
                    <h4>Better Results.</h4>

                    <p>
                        Tautmore is a holistic platform with focus on both classroom &
                        co-curricular learning. Give your child the gift of wholesome
                        development & prepare for the future.
                    </p>

                    <Buttoncommon content="Let’s try brain - gym" />

                    <div className="banner-left-bottom-icon" />
                </div>
                <div className="col-md-6 col-sm-12 banner-right">
                    <img src={Bannerimg} alt="banner_img" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
