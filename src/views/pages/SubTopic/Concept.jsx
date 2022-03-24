import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';
import { chapterAction, conceptAction, topicAction } from '../../../stores/Concept/ConceptActions';
import Myconceptdesc from './ConceptDesc';
import MyconceptHead from './ConceptHead';
import './concept.scss';
import STRAPI_URL from '../../../constants/strapi';

const Myconcept = () => {
    const { chapter, subTopic, topic } = useSelector((state) => state.concept);
    const dispatch = useDispatch();
    const { Chapter, Topic, Subject } = useParams();

    const fetchByUrlParams = async () => {
        const subjectData = await axios.get(
            `${STRAPI_URL}/api/subjects?populate=*&filters[slug]=${Subject}`,
        );

        const fromSubject = subjectData?.data?.data;
        const filterChapter = fromSubject[0]?.attributes?.chapters?.data?.filter(
            (item) => item?.attributes?.slug === Chapter,
        );
        const filterTopic = filterChapter[0]?.attributes?.topic?.filter(
            (item) => item?.slug === Topic,
        );

        dispatch(chapterAction(filterChapter[0]?.attributes));
        dispatch(topicAction(filterTopic[0]));
        dispatch(conceptAction(filterTopic[0]?.subTopic[0]));
    };

    useEffect(() => {
        if (chapter === null || subTopic === null || topic === null) {
            // use it when URL changes without params like /dashboard/concept
            // dispatch(topicAction(JSON.parse(window.localStorage.getItem('topic'))));
            // dispatch(conceptAction(JSON.parse(window.localStorage.getItem('subTopic'))));
            // dispatch(chapterAction(JSON.parse(window.localStorage.getItem('chapter'))));
            fetchByUrlParams();
        }
    }, []);

    return (
        <div className="myconcept-main row">
            <div className="col-md-11">
                <div className="myconcept-left">
                    <MyconceptHead chapter={chapter} topic={topic} subTopic={subTopic} />
                    <Myconceptdesc subTopic={subTopic} />
                </div>
            </div>
        </div>
    );
};

export default Myconcept;
