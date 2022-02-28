import React, {
    useEffect, useRef, useState, useCallback,
} from 'react';
import { object } from 'prop-types';
import { data } from './data';
import './style.scss';
import Subjectlist from '../home/Subjectlist';
import Mathicon from '../../../assets/images/design-tool@1.5x.svg';
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
    const [activities, setActivities] = useState([]);
    const [filterAct, setFilterAct] = useState([]);

    const fetchGrades = useCallback(async () => {
        const res = await fetch(
            `${STRAPI_URL}/api/grades?populate=*`,
        );
        const dataRes = await res.json();
        setGrades(dataRes?.data);

        const activityRes = await fetch(
            `${STRAPI_URL}/api/activities?populate=*`,
        );
        const activityData = await activityRes.json();
        // eslint-disable-next-line max-len
        setActivities(activityData?.data);
        console.log('fetch is called', activities, filterAct);
    }, []);

    useEffect(() => {
        fetchGrades();
        setFilterAct(activities?.filter((item) => item?.attributes?.slug === match.params.subject));
    }, []);

    useEffect(() => {
        const elStart = descRef.current?.getBoundingClientRect();
        setShouldToggleStyle(elStart?.right < window.innerWidth / 2 + 200);
    }, [descriptionAnchor, descRef]);

    useEffect(() => {
        const sub = match.params.subject;
        setSubdata(sub);
        // eslint-disable-next-line max-len
        setFilterAct(activities?.filter((item) => item?.attributes?.slug === match.params.subject));
        console.log('fetch is', filterAct);
    }, [match.params.subject]);

    console.log(filterAct[0]?.attributes?.title, 'HA');

    return (
        <Layout>
            <Subjectlist subdata={subdata} setSubdata={setSubdata} />
            <div className="chapters-main-container">
                <Chapterslink
                    grades={grades}
                    setSelectGrade={setSelectGrade}
                    selectGrade={selectGrade}
                />
                <div className="chapters-details">
                    <h1>
                        <img src={Mathicon} alt="Math_img" />
                        {subdata}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                        eiusmod tem por incididunt ut
                    </p>
                    <div className="chapters-container">
                        {data.map((chapter, idx) => (
                            <div className="chapter-name" key={chapter.key}>
                                <h2>{`Chapter ${idx + 1} - ${chapter.name}`}</h2>
                                <ul>
                                    {chapter.chapters.map((topic, topicIdx) => (
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
                                            key={`topic_${topic.key}`}
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
