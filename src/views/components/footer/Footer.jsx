import React from 'react';
import Logo from '../../../assets/images/Logo.png';
import './footer.scss';
import {
    twitterIcon,
    faceBook,
    instaGram,
    linkedIn,
} from '../../../assets/icons/IconList';

function Footer() {
    return (
        <div>
            <div className="footer-main">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-sm-5 footer-top-left">
                            <div className="row">
                                <div className="col-sm-8">
                                    <img src={Logo} alt="website_logo" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco
                                    </p>
                                    <ul>
                                        <li>{twitterIcon}</li>
                                        <li>{faceBook}</li>
                                        <li>{instaGram}</li>
                                        <li>{linkedIn}</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4" />
                            </div>
                        </div>
                        <div className="col-sm-7 footer-top-right">
                            <div className="row">
                                <div className="col-sm-3">
                                    <h4>Grades</h4>
                                    <ul>
                                        <li>Kindergarten</li>
                                        <li>L K G</li>
                                        <li>U K G</li>
                                        <li>Grade 1</li>
                                        <li>Grade 2</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3">
                                    <ul>
                                        <li>Grade 3</li>
                                        <li>Grade 4</li>
                                        <li>Grade 5</li>
                                        <li>Grade 6</li>
                                        <li>Grade 7</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3">
                                    <ul>
                                        <li>Grade 8</li>
                                        <li>Grade 9</li>
                                        <li>Grade 10</li>
                                        <li>Grade 11</li>
                                        <li>Grade 12</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3">
                                    <h4>Company</h4>
                                    <ul>
                                        <li>About us</li>
                                        <li>Contact</li>
                                        <li>FAQs</li>
                                        <li>For parents</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-sm-6 text-left">
                            <p>© 2021 Ultimate Learning Corp. All rights reserved.</p>
                        </div>
                        <div className="col-sm-6 text-right">
                            <p>Privacy policy | Terms & Condition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
