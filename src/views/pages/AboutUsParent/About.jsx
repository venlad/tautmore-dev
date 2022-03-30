/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../../Layout/Layout';
import STRAPI_URL from '../../../constants/strapi';
import Subjectlist from '../home/Subjectlist';
import Banner from '../AboutUsTeacher/Banner';
import './about.scss';
import SectionLeftRight from './SectionLeft-Right';
import TabGroup from './TabGroup';
import ParentTestimonials from './ParentTestimonials';
import Resources from '../AboutUsTeacher/Resources';
import FAQ from '../AboutUsTeacher/FAQ';

const About = () => {
    const fetchAll = useSelector((state) => state.fetchAll);

    const [subjects, setSubjects] = useState(fetchAll.subjects);
    const [aboutData, setAboutData] = useState(fetchAll.parent?.attributes);

    const fetchSubjects = async () => {
        const activityRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*`,
        );
        const res = await fetch(
            `${STRAPI_URL}/api/about-parent?populate=*`,
        );
        const activityData = await activityRes.json();
        // eslint-disable-next-line max-len
        setSubjects(activityData?.data);
        const data = await res.json();
        setAboutData(data?.data?.attributes);
    };

    useEffect(() => {
        if (fetchAll.parent === null && fetchAll.subjects === null) {
            fetchSubjects();
        }
    }, []);
    return (
        <Layout>
            <Subjectlist subjects={subjects} />
            <Banner banner={aboutData?.banner} />
            <h2 className="why-h2 text-center">{aboutData?.sectionHeading1}</h2>
            {
                aboutData?.sections?.slice(0, 6)?.map((item, i) => (
                    <SectionLeftRight className="section-main" fromLeft={i % 2 === 0} data={item} />
                ))
            }
            <h2 className="why2-h2">{aboutData?.sectionHeading2}</h2>
            <div className="section-wrap-bg">
                {
                    aboutData?.sections?.slice(6)?.map((item, i) => (
                        <SectionLeftRight className="section-main" fromLeft={i % 2 === 0} data={item} />
                    ))
                }
                <TabGroup data={aboutData?.benefitsSection} />
            </div>
            <ParentTestimonials data={aboutData?.testimonials} />
            <Resources data={aboutData?.carousel} showButton={false} />
            <div className="mt--110">
                <FAQ faq={aboutData?.FAQ} />
            </div>
        </Layout>
    );
};

export default About;
