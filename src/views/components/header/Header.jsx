import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png';
import './header.scss';

function Header() {
    return (
        <div>
            <div className="Header">
                <div className="row">
                    <div className="col-sm-2 header-left">
                        <Link to="/">
                            <img src={Logo} alt="website_log" />
                        </Link>
                    </div>
                    <div className="col-sm-10 header-right">
                        <ul>

                            <li><Link to="/grades">Grades</Link></li>

                            <li>About us</li>
                            <button type="button" className="login-signin">Login/Signup</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
