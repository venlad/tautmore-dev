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
import FAQ from './FAQ';
import Subjectlist from '../home/Subjectlist';

const About = () => {
    const [subjects, setSubjects] = useState([]);
    const [homeData, setHomeData] = useState([]);

    const fetchSubjects = async () => {
        const activityRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*`,
        );
        const res = await fetch(
            `${STRAPI_URL}/api/home?populate=*`,
        );
        const activityData = await activityRes.json();
        // eslint-disable-next-line max-len
        setSubjects(activityData?.data?.filter((item) => item?.attributes?.popularSubject === true));
        const data = await res.json();
        setHomeData(data?.data);
    };
    const giveGift = homeData?.attributes?.sections[7];

    useEffect(() => {
        fetchSubjects();
    }, []);
    return (
        <Layout>
            <Subjectlist subjects={subjects} />
            <Banner />
            <WhyTautmore />
            <Features />
            <Givegift data={giveGift} />
            <Resources />
            <FAQ />
        </Layout>
    );
};

export default About;
