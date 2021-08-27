import React from 'react';
import Subjectlist from './Subjectlist';
import Banner from './Banner';
import Learningprogram from './Learningprogram';
import Counter from './Counter';
import Physicalclassroom from './Physicalclassroom';
import Learningjourney from './Learningjourney';
import Givegift from './Givegift';
import HomeUISlide from './HomeUISlide';
import { Circle } from '../../../assets/icons/IconList';
import classroomimg from '../../../assets/images/Group 17.png';
import activityImg from '../../../assets/images/Group 14.png';
import olympidImg from '../../../assets/images/Groupolm.png';
import brainImg from '../../../assets/images/Group 20.png';
import joyfulImg from '../../../assets/images/Group 27.png';
import Layout from '../../../Layout/Layout';

import './styles/home.scss';

function Home() {
    return (
        <Layout>
            <Subjectlist />
            <Banner />
            <Learningprogram />
            <Counter />
            <HomeUISlide
                Circle={Circle}
                img={classroomimg}
                title="Class"
                span="room"
                desc="Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
        eiusmod tem por incididunt ut"
                circcontentone="Sed do eiusmod tem por incididunt ut"
                circcontenttwo="Lorem ipsum dolor sit amet"
                circcontentthree="Consec tetur adipiscing elit"
                leftImg
                classmain="classroom-main"
                classleft="classroom-left"
                classright="classroom-right"
                buttoncontent="Subscribe now"
            />

            <HomeUISlide
                img={activityImg}
                title="Ex"
                span="tra"
                title2=" - Curricular activities"
                desc="Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
        eiusmod tem por incididunt ut"
                rightImg
                classmain="activities-main"
                classleft="col-md-5"
                classright="col-md-7 activity-right"
                buttoncontent="Subscribe now"
            />

            <HomeUISlide
                img={olympidImg}
                title="Olymp"
                span="iad"
                desc="Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
        eiusmod tem por incididunt ut"
                leftImg
                classmain="olympiad-main"
                classleft="olympiad-left"
                classright="olympiad-right"
                buttoncontent="Take sample test"
            />

            <HomeUISlide
                img={brainImg}
                title="Brain - "
                span="gym"
                desc="Lorem ipsum dolor sit amet, consec teturadipiscing elit, sed do
        eiusmod tem porincididunt ut"
                rightImg
                classmain="brain-main"
                classleft="col-md-6 brain-left"
                classright="col-md-6 brain-right"
                buttoncontent="Let's try brain-gym"
            />

            <HomeUISlide
                img={joyfulImg}
                title="Tautmore makes learning joyful"
                desc="Brain gym is a unique activity created by our educators. It tests
        your child on various skills everyday for 10 mins. It’s a fun
        activity that also helps your child learn concepts beyond
        classroom."
                leftImg
                classmain="learningjoyful-main"
                classleft="learningjoyful-left"
                classright="learningjoyful-right"
                buttoncontent="Let's try brain-gym"
            />
            <Physicalclassroom />
            <Learningjourney />
            <Givegift />
        </Layout>
    );
}

export default Home;
