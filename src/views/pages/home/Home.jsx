import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Subjectlist from './Subjectlist';
import Banner from './Banner';
import Learningprogram from './Learningprogram';
import Counter from './Counter';
import Physicalclassroom from './Physicalclassroom';
import Learningjourney from './Learningjourney';
import Givegift from './Givegift';
import HomeUISlide from './HomeUISlide';
import Layout from '../../../Layout/Layout';
import './styles/home.scss';
import STRAPI_URL from '../../../constants/strapi';

function Home() {
    const fetchAll = useSelector((state) => state.fetchAll);

    const [subjects, setSubjects] = useState(fetchAll.subjects);
    const [homeData, setHomeData] = useState(fetchAll.home);

    const fetchSubjects = async () => {
        const activityRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*`,
        );
        const res = await fetch(
            `${STRAPI_URL}/api/home?populate=*`,
        );
        const activityData = await activityRes.json();
        // eslint-disable-next-line max-len
        setSubjects(activityData?.data);
        const data = await res.json();
        setHomeData(data?.data);
    };

    const classroom = homeData?.attributes?.sections[0];
    const extraCurricular = homeData?.attributes?.sections[1];
    const olymp = homeData?.attributes?.sections[2];
    const brainGym = homeData?.attributes?.sections[3];
    const brainGymJoy = homeData?.attributes?.sections[4];
    const physicalClassroom = homeData?.attributes?.sections[5];
    const learningJourney = homeData?.attributes?.sections[6];
    const giveGift = homeData?.attributes?.sections[7];

    useEffect(() => {
        if (fetchAll.home === null && fetchAll.subjects === null) {
            fetchSubjects();
        }
    }, []);
    return (
        <Layout>
            <Subjectlist subjects={subjects} />
            <Banner banner={homeData?.attributes?.hero} />
            <Learningprogram learning={homeData?.attributes?.ourLearning} />
            <Counter count={homeData?.attributes?.numberInfo} />
            <HomeUISlide
                leftImg
                classmain="classroom-main"
                classleft="classroom-left"
                classright="classroom-right"
                data={classroom}
            />

            <HomeUISlide
                rightImg
                classmain="activities-main"
                classleft="col-md-5"
                classright="col-md-7 activity-right"
                data={extraCurricular}
            />

            <HomeUISlide
                leftImg
                classmain="classroom-main"
                classleft="classroom-left"
                classright="classroom-right"
                data={olymp}
            />

            <HomeUISlide
                rightImg
                classmain="activities-main"
                classleft="col-md-5"
                classright="col-md-7 activity-right"
                data={brainGym}
            />

            <HomeUISlide
                leftImg
                classmain="learningjoyful-main"
                classleft="learningjoy-left"
                classright="learningjoyful-right"
                data={brainGymJoy}
            />
            <Physicalclassroom data={physicalClassroom} />
            <Learningjourney data={learningJourney} />
            <Givegift data={giveGift} />
        </Layout>
    );
}

export default Home;
