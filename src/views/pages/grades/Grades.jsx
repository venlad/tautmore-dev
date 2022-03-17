import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Rightpart from './Rightpart';
import './style.scss';
import Chapterslink from '../Chapters/Chapterslink';
import Layout from '../../../Layout/Layout';
import STRAPI_URL from '../../../constants/strapi';

const Grades = () => {
    const footerGrade = useSelector((state) => state.footerGrade);

    const [grades, setGrades] = useState([]);
    const [activities, setActivities] = useState([]);
    const [selectGrade, setSelectGrade] = useState(footerGrade);
    // const [filterActivity, setFilterActivity] = useState([]);

    const fetchGrades = async () => {
        const res = await fetch(
            `${STRAPI_URL}/api/grades?populate=*`,
        );
        const data = await res.json();
        setGrades(data?.data);

        // eslint-disable-next-line max-len
        setActivities(data?.data?.filter((item) => item?.attributes?.title === selectGrade)[0]?.attributes?.activities?.data);
    };

    useEffect(() => {
        fetchGrades();
    }, []);

    useEffect(() => {
        // eslint-disable-next-line max-len
        setActivities(grades?.filter((item) => item?.attributes?.title === selectGrade)[0]?.attributes?.activities?.data);
    }, [selectGrade]);

    useEffect(() => {
        setSelectGrade(footerGrade);
    }, [footerGrade]);

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
