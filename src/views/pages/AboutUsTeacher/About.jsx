/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import './about.scss';
import Layout from '../../../Layout/Layout';
import WhyTautmore from './WhyTautmore';
import Features from './Features';
import STRAPI_URL from '../../../constants/strapi';
import Givegift from './Works';
import Resources from './Resources';

const About = () => {
    const [homeData, setHomeData] = useState([]);

    const fetchSubjects = async () => {
        const res = await fetch(
            `${STRAPI_URL}/api/home?populate=*`,
        );
        const data = await res.json();
        setHomeData(data?.data);
    };
    const giveGift = homeData?.attributes?.sections[7];

    useEffect(() => {
        fetchSubjects();
    }, []);
    return (
        <Layout>
            <Banner />
            <WhyTautmore />
            <Features />
            <Givegift data={giveGift} />
            <Resources />
        </Layout>
    );
};

export default About;
