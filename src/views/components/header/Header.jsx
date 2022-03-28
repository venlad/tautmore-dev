import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import STRAPI_URL from '../../../constants/strapi';
import './header.scss';

function Header() {
    const [navData, setNavData] = useState([]);

    const fetchNavData = async () => {
        const res = await fetch(
            `${STRAPI_URL}/api/navbar?populate=*`,
        );
        const data = await res.json();
        setNavData(data?.data?.attributes);
    };

    useEffect(() => {
        fetchNavData();
    }, []);
    return (
        <div>
            <div className="Header">
                <div className="row">
                    <div className="col-sm-2 header-left">
                        <Link to="/">
                            <img src={navData?.logo?.data?.attributes?.url} alt="website_log" />
                        </Link>
                    </div>
                    <div className="col-sm-10 header-right">
                        <ul>
                            {
                                navData?.navItems?.slice(0, -1)?.map((item) => (
                                    <li><Link to={item?.link}>{item?.label}</Link></li>
                                ))
                            }
                            <Link to={navData?.navItems?.slice(-1)[0]?.link}><button type="button" className="login-signin">{navData?.navItems?.slice(-1)[0]?.label}</button></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
