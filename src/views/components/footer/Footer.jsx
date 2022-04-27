/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import STRAPI_URL from '../../../constants/strapi';
import selectFooterLinkAction from '../../../stores/Grades/GradesAction';

function Footer() {
    const fetchAll = useSelector((state) => state.fetchAll);

    const [footer, setFooter] = useState(fetchAll.footer);
    const [grades, setGrades] = useState(fetchAll.grades);

    const dispatch = useDispatch();

    const fetchData = async () => {
        const res = await fetch(`${STRAPI_URL}/api/footer?populate=*`);
        const gradesRes = await fetch(
            `${STRAPI_URL}/api/grades?populate=*&sort=id:asc`,
        );
        const data = await res.json();
        const gradesData = await gradesRes.json();
        setFooter(data?.data?.attributes);
        setGrades(gradesData?.data);
    };

    useEffect(() => {
        if (fetchAll.footer === null && fetchAll.grades === null) {
            fetchData();
        }
    }, []);
    const splitCols = Math.round(grades?.length / 3);
    return (
        <div>
            <div className="footer-main">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 footer-top-left">
                            <div className="row">
                                <div className="col-sm-12 col-md-8">
                                    <Link to="/">
                                        <img
                                            src={footer?.logo?.data?.attributes?.url}
                                            alt="website_logo"
                                        />
                                    </Link>
                                    <p>{footer?.info}</p>
                                    <ul>
                                        {footer?.socialLinks?.map((item) => (
                                            <li>
                                                <Link to={item?.link}>
                                                    <img
                                                        src={item?.icon?.data?.attributes?.url}
                                                        alt="website_logo"
                                                    />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-sm-12 col-md-4" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7 footer-top-right">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-6">
                                    <h4>Grades</h4>
                                    <ul>
                                        {grades?.slice(0, splitCols)?.map((item) => (
                                            <li
                                                key={item?.attributes?.id}
                                                onClick={() => dispatch(
                                                    selectFooterLinkAction(item?.attributes?.title),
                                                )}
                                            >
                                                <Link to="/grades">{item?.attributes?.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-sm-3 col-md-3 col-6 mt-4 pt-2">
                                    <ul>
                                        {grades?.slice(splitCols, splitCols + splitCols)?.map((item) => (
                                            <li
                                                key={item?.attributes?.id}
                                                onClick={() => dispatch(
                                                    selectFooterLinkAction(item?.attributes?.title),
                                                )}
                                            >
                                                <Link to="/grades">{item?.attributes?.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-sm-3 col-md-3 col-6 mt-4 pt-2">
                                    <ul>
                                        {grades?.slice(splitCols + splitCols)?.map((item) => (
                                            <li
                                                key={item?.attributes?.id}
                                                onClick={() => dispatch(
                                                    selectFooterLinkAction(item?.attributes?.title),
                                                )}
                                            >
                                                <Link to="/grades">{item?.attributes?.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-sm-3 col-md-3 col-6">
                                    <h4>Company</h4>
                                    <ul>
                                        {footer?.navItems?.slice(0, -2)?.map((item) => (
                                            <li>
                                                <Link to={item?.link}>{item?.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-sm-7 col-12 text-left">
                            <p>{footer?.copyRight}</p>
                        </div>
                        <div className="col-sm-5 col-12 text-right">
                            <p>
                                <Link to={footer?.navItems?.slice(-2, -1)[0]?.link}>
                                    {footer?.navItems?.slice(-2, -1)[0]?.label}
                                </Link>{' '}
                                |
                                <Link to={footer?.navItems?.slice(-1)[0]?.link}>
                                    {footer?.navItems?.slice(-1)[0]?.label}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
