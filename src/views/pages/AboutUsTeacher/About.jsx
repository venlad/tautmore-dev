/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import './about.scss';
import Layout from '../../../Layout/Layout';
import WhyTautmore from './WhyTautmore';
import Features from './Features';
import STRAPI_URL from '../../../constants/strapi';
// import Givegift from './Works';
import Resources from './Resources';
import FAQ from './FAQ';
import Subjectlist from '../home/Subjectlist';
import Givegift from './Works';

const About = () => {
    const [subjects, setSubjects] = useState([]);
    const [aboutData, setAboutData] = useState([]);

    const fetchSubjects = async () => {
        const activityRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*`,
        );
        const res = await fetch(
            `${STRAPI_URL}/api/about?populate=*`,
        );
        const activityData = await activityRes.json();
        // eslint-disable-next-line max-len
        setSubjects(activityData?.data);
        const data = await res.json();
        setAboutData(data?.data?.attributes);
    };

    useEffect(() => {
        fetchSubjects();
    }, []);
    return (
        <Layout>
            <Subjectlist subjects={subjects} />
            <Banner banner={aboutData?.banner} />
            <WhyTautmore cardData={aboutData?.whyCards} btnText={aboutData?.whyTautmoreButtonText} title={aboutData?.whyTautmoreHeading} />
            <Features features={aboutData?.tautMoreFeatures} />
            <Givegift data={aboutData?.works} />
            <Resources data={aboutData?.carousel} />
            <FAQ faq={aboutData?.FAQ} />
        </Layout>
    );
};

export default About;
