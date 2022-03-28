import React, {
    useEffect, useRef, useState,
} from 'react';
import { object } from 'prop-types';
import './style.scss';
import Subjectlist from '../home/Subjectlist';
import Chapterslink from './Chapterslink';
import Topiclist from './Topiclist';
import Layout from '../../../Layout/Layout';
import STRAPI_URL from '../../../constants/strapi';

const Chapters = ({ match }) => {
    const [viewMoreTopic, setViewMoreTopic] = useState(['', '']);
    const [descriptionAnchor, setDescriptionAnchor] = useState(['', '', '']);
    const [shouldToggleStyle, setShouldToggleStyle] = useState(false);
    const [subdata, setSubdata] = useState();

    const descRef = useRef(null);

    const [grades, setGrades] = useState([]);
    const [selectGrade, setSelectGrade] = useState('Pre-Kindergarten');
    const [subjects, setSubjects] = useState([]);
    const [filterSubjects, setFilterSubjects] = useState([]);

    const fetchGrades = async () => {
        const res = await fetch(
            `${STRAPI_URL}/api/grades?populate=*`,
        );
        const dataRes = await res.json();
        setGrades(dataRes?.data);
        const activityRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*`,
        );
        const activityData = await activityRes.json();
        setSubjects(activityData?.data);
        setFilterSubjects(activityData?.data?.filter(
            (item) => item?.attributes?.slug === match.params.subject,
        ));
    };

    useEffect(() => {
        fetchGrades();
    }, []);

    useEffect(() => {
        const elStart = descRef.current?.getBoundingClientRect();
        setShouldToggleStyle(elStart?.right < window.innerWidth / 2 + 200);
    }, [descriptionAnchor, descRef]);

    useEffect(() => {
        const sub = match.params.subject;
        setSubdata(sub);
        setFilterSubjects(
            subjects?.filter(
                (item) => item?.attributes?.slug === match.params.subject,
            ),
        );
    }, [match.params.subject]);

    const chapters = filterSubjects[0]?.attributes?.chapters?.data.filter(
        (item) => item?.attributes?.grade?.data?.attributes?.title === selectGrade,
    );
    return (
        <Layout>
            <Subjectlist subdata={subdata} setSubdata={setSubdata} subjects={subjects} />
            <div className="chapters-main-container">
                <Chapterslink
                    grades={grades}
                    setSelectGrade={setSelectGrade}
                    selectGrade={selectGrade}
                />
                <div className="chapters-details">
                    <h1>
                        <img src={filterSubjects[0]?.attributes?.icon?.data?.attributes?.url} alt="" />
                        {filterSubjects[0]?.attributes?.title}
                    </h1>
                    <p>
                        {filterSubjects[0]?.attributes?.smallDescription}
                    </p>
                    <div className="chapters-container">
                        {chapters?.map((chapter, idx) => (
                            <div className="chapter-name" key={chapter?.id}>
                                <h2>Chapter {idx + 1} - {chapter?.attributes?.title}</h2>
                                <ul>
                                    {chapter?.attributes?.topic?.map((topic, topicIdx) => (
                                        <Topiclist
                                            topic={topic}
                                            topicIdx={topicIdx}
                                            viewMoreTopic={viewMoreTopic}
                                            idx={idx}
                                            descriptionAnchor={descriptionAnchor}
                                            setDescriptionAnchor={setDescriptionAnchor}
                                            descRef={descRef}
                                            shouldToggleStyle={shouldToggleStyle}
                                            setViewMoreTopic={setViewMoreTopic}
                                            key={topic?.id}
                                            chapterSlug={chapter?.attributes?.slug}
                                            subjectSlug={filterSubjects[0]?.attributes?.slug}
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

Chapters.propTypes = {
    match: object.isRequired,

};
export default Chapters;
