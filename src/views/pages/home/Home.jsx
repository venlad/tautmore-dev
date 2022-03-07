import React, { useEffect, useState } from 'react';
import Subjectlist from './Subjectlist';
import Banner from './Banner';
import Learningprogram from './Learningprogram';
import Counter from './Counter';
import Physicalclassroom from './Physicalclassroom';
import Learningjourney from './Learningjourney';
import Givegift from './Givegift';
import HomeUISlide from './HomeUISlide';
import { Circle } from '../../../assets/icons/IconList';
import Layout from '../../../Layout/Layout';
import './styles/home.scss';
import STRAPI_URL from '../../../constants/strapi';

function Home() {
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

    const classroom = homeData?.attributes?.sections[0];
    const extraCurricular = homeData?.attributes?.sections[1];
    const olymp = homeData?.attributes?.sections[2];
    const brainGym = homeData?.attributes?.sections[3];
    const brainGymJoy = homeData?.attributes?.sections[4];
    const physicalClassroom = homeData?.attributes?.sections[5];
    const learningJourney = homeData?.attributes?.sections[6];
    const giveGift = homeData?.attributes?.sections[7];

    useEffect(() => {
        fetchSubjects();
    }, []);

    return (
        <Layout>
            <Subjectlist subjects={subjects} />
            <Banner banner={homeData?.attributes?.hero} />
            <Learningprogram learning={homeData?.attributes?.ourLearning} />
            <Counter count={homeData?.attributes?.numberInfo} />
            <HomeUISlide
                Circle={Circle}
                img={STRAPI_URL +  classroom?.heroImage?.data?.attributes?.url}
                title={classroom?.heading}
                span="room"
                desc={classroom?.description}
                circcontentone="Sed do eiusmod tem por incididunt ut"
                circcontenttwo="Lorem ipsum dolor sit amet"
                circcontentthree="Consec tetur adipiscing elit"
                leftImg
                classmain="classroom-main"
                classleft="classroom-left"
                classright="classroom-right"
                buttoncontent={classroom?.buttonText}
                points={classroom?.listItems}
            />

            <HomeUISlide
                img={STRAPI_URL +  extraCurricular?.heroImage?.data?.attributes?.url}
                title={extraCurricular?.heading}
                span=""
                title2=""
                desc={extraCurricular?.description}
                rightImg
                classmain="activities-main"
                classleft="col-md-5"
                classright="col-md-7 activity-right"
                buttoncontent={extraCurricular?.buttonText}
            />

            <HomeUISlide
                img={STRAPI_URL +  olymp?.heroImage?.data?.attributes?.url}
                title={olymp?.heading}
                span=""
                desc={olymp?.description}
                leftImg
                classmain="olympiad-main"
                classleft="olympiad-left"
                classright="olympiad-right"
                buttoncontent={olymp?.buttonText}
            />

            <HomeUISlide
                img={STRAPI_URL +  brainGym?.heroImage?.data?.attributes?.url}
                title={brainGym?.heading}
                span=""
                desc={brainGym?.description}
                rightImg
                classmain="brain-main"
                classleft="col-md-6 brain-left"
                classright="col-md-6 brain-right"
                buttoncontent={brainGym?.buttonText}
            />

            <HomeUISlide
                img={STRAPI_URL +  brainGymJoy?.heroImage?.data?.attributes?.url}
                title={brainGymJoy?.heading}
                desc={brainGymJoy?.description}
                leftImg
                classmain="learningjoyful-main"
                classleft="learningjoyful-left"
                classright="learningjoyful-right"
                buttoncontent={brainGymJoy?.buttonText}
            />
            <Physicalclassroom data={physicalClassroom} />
            <Learningjourney data={learningJourney} />
            <Givegift data={giveGift} />
        </Layout>
    );
}

export default Home;
