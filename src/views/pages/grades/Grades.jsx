import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Rightpart from './Rightpart';
import './style.scss';
import Chapterslink from '../Chapters/Chapterslink';
import Layout from '../../../Layout/Layout';
import STRAPI_URL from '../../../constants/strapi';

const Grades = () => {
    const footerGrade = useSelector((state) => state.footerGrade);
    const allGrades = useSelector((state) => state.fetchAll);

    const [grades, setGrades] = useState(allGrades?.grades);
    const [activities, setActivities] = useState([]);
    const [selectGrade, setSelectGrade] = useState(footerGrade);

    const fetchGrades = async () => {
        const res = await fetch(
            `${STRAPI_URL}/api/grades?populate=*&sort=id:ASC`,
        );
        const data = await res.json();
        setGrades(data?.data);
        setActivities(data?.data?.filter(
            (item) => item?.attributes?.title === selectGrade,
        )[0]?.attributes?.activities?.data);
    };

    useEffect(() => {
        if (allGrades.grades === null) {
            fetchGrades();
        }
    }, []);

    useEffect(() => {
        setActivities(grades?.filter(
            (item) => item?.attributes?.title === selectGrade,
        )[0]?.attributes?.activities?.data);
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
