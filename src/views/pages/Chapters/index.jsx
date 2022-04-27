import React, {
    useEffect, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { useParams } from 'react-router';
import Subjectlist from '../home/Subjectlist';
import Chapterslink from './Chapterslink';
import Topiclist from './Topiclist';
import Layout from '../../../Layout/Layout';
import STRAPI_URL from '../../../constants/strapi';

const Chapters = () => {
    const { subject } = useParams();

    const fetchAll = useSelector((state) => state.fetchAll);
    const footerGrade = useSelector((state) => state.footerGrade);

    const [viewMoreTopic, setViewMoreTopic] = useState(['', '']);
    const [subdata, setSubdata] = useState();

    const descRef = useRef(null);

    const [grades, setGrades] = useState(fetchAll.grades);
    const [selectGrade, setSelectGrade] = useState(footerGrade);
    const [subjects, setSubjects] = useState(fetchAll.subjects);
    const [filterSubjects, setFilterSubjects] = useState(null);

    const fetchGrades = async () => {
        const res = await fetch(
            `${STRAPI_URL}/api/grades?populate=*&sort=id:asc`,
        );
        const dataRes = await res.json();
        setGrades(dataRes?.data);

        const activityRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*&sort=id:asc`,
        );
        const activityData = await activityRes.json();
        setSubjects(activityData?.data);
    };

    const fetchFiltered = async () => {
        let filterData;
        const filterRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*&sort=id:asc&filters[slug]=${subject}`,
        );

        // eslint-disable-next-line prefer-const
        filterData = await filterRes.json();

        setFilterSubjects(...filterData?.data);
    };

    useEffect(() => {
        setSelectGrade(footerGrade);
    }, [footerGrade]);

    useEffect(() => {
        fetchFiltered();
        if (fetchAll.grades === null && fetchAll.subjects === null) {
            fetchGrades();
        }
    }, []);

    const filterSub = subjects?.filter(
        (item) => item?.attributes?.slug === subject,
    );

    useEffect(() => {
        const sub = subject;
        setSubdata(sub);
        if (filterSub?.length > 0) {
            setFilterSubjects(filterSub[0]);
        }
    }, [subject]);

    const chapters = filterSubjects?.attributes?.chapters?.data.filter(
        (item) => item?.attributes?.grade?.data?.attributes?.title === selectGrade,
    );

    return (
        <Layout>
            <Subjectlist
                subdata={subdata}
                setSubdata={setSubdata}
                subjects={subjects}
            />
            <div className="chapters-main-container">
                <Chapterslink
                    grades={grades}
                    setSelectGrade={setSelectGrade}
                    selectGrade={selectGrade}
                />
                <div className="chapters-details">
                    <h1>
                        <img
                            src={filterSubjects?.attributes?.icon?.data?.attributes?.url}
                            alt=""
                        />
                        {filterSubjects?.attributes?.title}
                    </h1>
                    <p>{filterSubjects?.attributes?.smallDescription}</p>
                    <div className="chapters-container">
                        {chapters
                            ?.sort((a, b) => (
                                Number(a?.attributes?.chapterNumber)
                                > Number(b?.attributes?.chapterNumber) ? 1 : -1))
                            ?.map((chapter, idx) => (
                                <div className="chapter-name" key={chapter?.id}>
                                    <h2>
                                        Chapter {idx + 1} - {chapter?.attributes?.title}
                                    </h2>
                                    <ul>
                                        {chapter?.attributes?.topic?.map((topic, topicIdx) => (
                                            <Topiclist
                                                topic={topic}
                                                topicIdx={topicIdx}
                                                viewMoreTopic={viewMoreTopic}
                                                idx={idx}
                                                descRef={descRef}
                                                setViewMoreTopic={setViewMoreTopic}
                                                key={topic?.id}
                                                chapterSlug={chapter?.attributes?.slug}
                                                subjectSlug={filterSubjects?.attributes?.slug}
                                                chapter={chapter?.attributes}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Chapters;
