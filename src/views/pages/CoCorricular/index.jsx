import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import STRAPI_URL from '../../../constants/strapi';
import Layout from '../../../Layout/Layout';

const CoCorricular = () => {
    const [coCorricular, setCoCorricular] = useState([]);

    const fetchCoCorriculars = async () => {
        const res = await fetch(`${STRAPI_URL}/api/co-corriculars?populate=*&sort=id:asc`);
        const data = await res.json();
        setCoCorricular(data?.data);
    };

    useEffect(() => {
        fetchCoCorriculars();
    }, []);
    return (
        <Layout>
            <div className="rectangle grade-right-part">
                <div className="pre-kindergarten-center mx-4">
                    <h1>CO CORRICULAR</h1>
                </div>

                <div className="classroom-subject main-common">
                    <div className="subject-list-main">
                        <div className="classroom head-common">
                            <p>CO CORRICULAR</p>
                        </div>
                        <div className="subjects">
                            <ul className="row">
                                {
                                    coCorricular
                                        ?.sort(
                                            (a, b) => (a.id > b.id ? 1 : -1),
                                        )
                                        ?.map(
                                            (item) => (
                                                <li key={item?.id} className="col-md-4 math">
                                                    <Link to={'/co-corricular/'.concat(item?.attributes?.slug)}>
                                                        <img
                                                            className="myexams-icon"
                                                            // eslint-disable-next-line max-len
                                                            src={item?.attributes?.icon?.data?.attributes?.url}
                                                            alt="logo"
                                                        />
                                                        {item?.attributes?.title}
                                                    </Link>
                                                </li>
                                            ),
                                        )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CoCorricular;
