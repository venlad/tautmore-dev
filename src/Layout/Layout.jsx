import React, { useEffect } from 'react';
import  { object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../views/components/header/Header';
import Footer from '../views/components/footer/Footer';
import STRAPI_URL from '../constants/strapi';
import {
    fetchFooter,
    fetchGrades, fetchHome, fetchNavbar, fetchParent, fetchSubjects, fetchTeacher,
} from '../stores/Fetch/FetchAction';

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const fetchall = useSelector((state) => state.fetchAll);

    const fetchAll = async () => {
        const gradesRes = await fetch(
            `${STRAPI_URL}/api/grades?populate=*`,
        );
        const grades = await gradesRes.json();
        dispatch(fetchGrades(grades?.data));

        const subjectsRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*`,
        );
        const subjects = await subjectsRes.json();
        dispatch(fetchSubjects(subjects?.data));

        const homeRes = await fetch(
            `${STRAPI_URL}/api/home?populate=*`,
        );
        const home = await homeRes.json();
        dispatch(fetchHome(home?.data));

        const parentRes = await fetch(
            `${STRAPI_URL}/api/about-parent?populate=*`,
        );
        const parent = await parentRes.json();
        dispatch(fetchParent(parent?.data));

        const teacherRes = await fetch(
            `${STRAPI_URL}/api/about?populate=*`,
        );
        const teacher = await teacherRes.json();
        dispatch(fetchTeacher(teacher?.data));

        const footerRes = await fetch(
            `${STRAPI_URL}/api/footer?populate=*`,
        );
        const footer = await footerRes.json();
        dispatch(fetchFooter(footer?.data?.attributes));

        const navbarRes = await fetch(
            `${STRAPI_URL}/api/navbar?populate=*`,
        );
        const navbar = await navbarRes.json();
        dispatch(fetchNavbar(navbar?.data?.attributes));
    };

    useEffect(() => {
        if (
            fetchall.subjects === null
            && fetchall.grades === null
            && fetchall.home === null
            && fetchall.parent === null
            && fetchall.teacher === null
        ) {
            fetchAll();
        }
    }, []);

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: object.isRequired,

};
export default Layout;
