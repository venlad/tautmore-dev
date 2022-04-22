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
    const [coCorricular, setCoCorricular] = useState([]);
    const [selectGrade, setSelectGrade] = useState(footerGrade);

    const fetchGrades = async () => {
        const res = await fetch(`${STRAPI_URL}/api/grades?populate=*&sort=id:asc`);
        const data = await res.json();
        setGrades(data?.data);
        setActivities(
            data?.data?.filter((item) => item?.attributes?.title === selectGrade)[0]
                ?.attributes?.subjects?.data,
        );
        setCoCorricular(
            data?.data?.filter((item) => item?.attributes?.title === selectGrade)[0]
                ?.attributes?.co_corriculars?.data,
        );
    };

    useEffect(() => {
        if (allGrades.grades === null) {
            fetchGrades();
        }
    }, []);

    useEffect(() => {
        setActivities(
            grades?.filter((item) => item?.attributes?.title === selectGrade)[0]
                ?.attributes?.subjects?.data,
        );
        setCoCorricular(
            grades?.filter((item) => item?.attributes?.title === selectGrade)[0]
                ?.attributes?.co_corriculars?.data,
        );
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
                <Rightpart
                    selectGrade={selectGrade}
                    activities={activities}
                    coCorricular={coCorricular}
                />
            </div>
        </Layout>
    );
};
export default Grades;
