/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rightpart from './Rightpart';
import './style.scss';
import Chapterslink from '../Chapters/Chapterslink';
import Layout from '../../../Layout/Layout';
import STRAPI_URL from '../../../constants/strapi';
import Boardslist from './BoardsList';
import selectFooterLinkAction from '../../../stores/Grades/GradesAction';

const Grades = () => {
    const dispatch = useDispatch();
    const footerGrade = useSelector((state) => state.footerGrade);
    const allGrades = useSelector((state) => state.fetchAll);
    const boards = allGrades?.boards;

    const [grades, setGrades] = useState(allGrades?.grades);
    const [subjects, setSubjects] = useState([]);
    const [selectGrade, setSelectGrade] = useState(footerGrade);
    const [currentBoard, setCurrentBoard] = useState('cbse');

    const fetchGrades = async () => {
        const res = await fetch(`${STRAPI_URL}/api/grades?populate=*&sort=id:asc`);
        const data = await res.json();
        const filterGradesByBoard =  data?.data?.filter(
            (item) => item?.attributes?.boards?.data?.find((sub) => sub?.attributes?.slug === currentBoard)?.attributes?.slug === currentBoard,
        );
        setGrades(filterGradesByBoard);
        setSubjects(
            filterGradesByBoard?.filter((item) => item?.attributes?.slug === selectGrade)[0]
                ?.attributes?.subjects?.data,
        );
    };

    useEffect(() => {
        if (allGrades.grades === null) {
            fetchGrades();
        }
    }, []);

    useEffect(() => {
        setGrades(
            allGrades?.grades?.filter(
                (item) => item?.attributes?.boards?.data?.find((sub) => sub?.attributes?.slug === currentBoard)?.attributes?.slug === currentBoard,
            ),
        );
    }, [currentBoard]);

    useEffect(() => {
        setSubjects(
            grades?.filter((item) => item?.attributes?.slug === selectGrade)[0]
                ?.attributes?.subjects?.data,
        );
    }, [selectGrade]);

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        grades?.length > 0 && dispatch(selectFooterLinkAction(grades[0]?.attributes?.slug));
    }, [grades]);

    useEffect(() => {
        setSelectGrade(footerGrade);
    }, [footerGrade]);

    return (
        <Layout>
            <Boardslist
                boards={boards}
                currentBoard={currentBoard}
                setCurrentBoard={setCurrentBoard}
            />
            <div className="grade-container">
                <Chapterslink
                    grades={grades}
                    setSelectGrade={setSelectGrade}
                    selectGrade={selectGrade}
                />
                <Rightpart
                    selectGrade={selectGrade}
                    subjects={subjects}
                />
            </div>
        </Layout>
    );
};
export default Grades;
