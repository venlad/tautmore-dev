import React, { useEffect, useState } from 'react';
import Rightpart from './Rightpart';
import './style.scss';
import Chapterslink from '../Chapters/Chapterslink';
import Layout from '../../../Layout/Layout';
import STRAPI_URL from '../../../constants/strapi';

const Grades = () => {
    const [grades, setGrades] = useState([]);
    const [activities, setActivities] = useState([]);
    const [selectGrade, setSelectGrade] = useState('Pre-Kindergarten');

    const fetchGrades = async () => {
        const res = await fetch(
            `${STRAPI_URL}/api/grades?populate=*`,
        );
        const data = await res.json();
        setGrades(data?.data);

        const activityRes = await fetch(
            `${STRAPI_URL}/api/activities?populate=*`,
        );
        const activityData = await activityRes.json();
        setActivities(activityData?.data);
    };

    useEffect(() => {
        fetchGrades();
    }, []);

    return (
        <Layout>
            <div className="grade-container">
                <Chapterslink
                    grades={grades}
                    setSelectGrade={setSelectGrade}
                    selectGrade={selectGrade}
                />
                <Rightpart selectGrade={selectGrade} activities={activities} />
            </div>
        </Layout>
    );
};
export default Grades;
