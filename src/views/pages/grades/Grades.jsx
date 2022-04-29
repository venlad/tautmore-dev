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
    const board = useSelector((state) => state.board);
    const boards = allGrades?.boards;

    const [grades, setGrades] = useState(allGrades?.grades);
    const [subjects, setSubjects] = useState([]);
    const [selectGrade, setSelectGrade] = useState(footerGrade);
    const [currentBoard, setCurrentBoard] = useState(board);

    const fetchGrades = async () => {
        const res = await fetch(`${STRAPI_URL}/api/grades?populate=*&sort=id:asc`);
        const data = await res.json();
        const filterGradesByBoard = data?.data?.filter(
            (item) => item?.attributes?.board?.data?.attributes?.slug === currentBoard,
        );
        setGrades(filterGradesByBoard);
        setSubjects(
            filterGradesByBoard?.filter(
                (item) => item?.attributes?.slug === selectGrade,
            )[0]?.attributes?.subjects?.data,
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
                (item) => item?.attributes?.board?.data?.attributes?.slug === currentBoard,
            ),
        );
        console.log(allGrades?.grades);
    }, [currentBoard]);

    useEffect(() => {
        setSubjects(
            grades?.filter((item) => item?.attributes?.slug === selectGrade)[0]
                ?.attributes?.subjects?.data,
        );
    }, [selectGrade]);

    useEffect(() => {
        const selectedFooterExists = grades?.filter(
            (item) => item?.attributes?.slug === footerGrade,
        );
        if (selectedFooterExists?.length === 0) {
            // eslint-disable-next-line no-unused-expressions
            grades?.length > 0
        && dispatch(selectFooterLinkAction(grades[0]?.attributes?.slug));
        }
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
                <Rightpart selectGrade={selectGrade} subjects={subjects} />
            </div>
        </Layout>
    );
};
export default Grades;
