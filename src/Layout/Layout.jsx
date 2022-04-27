import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader';
import Header from '../views/components/header/Header';
import Footer from '../views/components/footer/Footer';
import STRAPI_URL from '../constants/strapi';
import {
    fetchBoards,
    fetchFooter,
    fetchGrades,
    fetchHome,
    fetchNavbar,
    fetchParent,
    fetchSubjects,
    fetchTeacher,
} from '../stores/Fetch/FetchAction';

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const fetchall = useSelector((state) => state.fetchAll);

    const [loaded, setLoaded] = useState(true);

    const fetchAll = async () => {
        setLoaded(true);
        const gradesRes = await fetch(
            `${STRAPI_URL}/api/grades?populate=*&sort=id:ASC`,
        );
        const grades = await gradesRes.json();
        dispatch(fetchGrades(grades?.data));

        const subjectsRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*&sort=id:ASC`,
        );
        const subjects = await subjectsRes.json();
        dispatch(fetchSubjects(subjects?.data));

        const homeRes = await fetch(
            `${STRAPI_URL}/api/home?populate=*&sort=id:ASC`,
        );
        const home = await homeRes.json();
        dispatch(fetchHome(home?.data));

        const parentRes = await fetch(
            `${STRAPI_URL}/api/about-parent?populate=*&sort=id:ASC`,
        );
        const parent = await parentRes.json();
        dispatch(fetchParent(parent?.data));

        const teacherRes = await fetch(
            `${STRAPI_URL}/api/about?populate=*&sort=id:ASC`,
        );
        const teacher = await teacherRes.json();
        dispatch(fetchTeacher(teacher?.data));

        const footerRes = await fetch(
            `${STRAPI_URL}/api/footer?populate=*&sort=id:ASC`,
        );
        const footer = await footerRes.json();
        dispatch(fetchFooter(footer?.data?.attributes));

        const navbarRes = await fetch(
            `${STRAPI_URL}/api/navbar?populate=*&sort=id:ASC`,
        );
        const navbar = await navbarRes.json();
        dispatch(fetchNavbar(navbar?.data?.attributes));

        const boardsRes = await fetch(
            `${STRAPI_URL}/api/boards?populate=*&sort=id:ASC`,
        );
        const boards = await boardsRes.json();
        dispatch(fetchBoards(boards?.data));

        setLoaded(false);
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
        } else {
            setLoaded(false);
        }
    }, []);
    return (
        <>
            <Header />
            {
                loaded ? (
                    <div style={{
                        width: '100%',
                        height: '70vh',
                    }}
                    >
                        <Loader
                            loaded={!loaded}
                            lines={13}
                            length={20}
                            width={10}
                            radius={30}
                            corners={1}
                            rotate={0}
                            direction={1}
                            color="#edaf54"
                            speed={1}
                            trail={60}
                            shadow={false}
                            hwaccel
                            className="spinner"
                            zIndex={99999}
                            top="50%"
                            left="50%"
                            scale={1.0}
                            loadedClassName="loadedContent"
                        />
                    </div>
                ) : children
            }

            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: object.isRequired,
};
export default Layout;
