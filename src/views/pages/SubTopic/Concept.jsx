import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chapterAction, conceptAction, topicAction } from '../../../stores/Concept/ConceptActions';
import Myconceptdesc from './ConceptDesc';
import MyconceptHead from './ConceptHead';
import './concept.scss';

const Myconcept = () => {
    const { chapter, subTopic, topic } = useSelector((state) => state.concept);
    const dispatch = useDispatch();

    useEffect(() => {
        if (chapter === null || subTopic === null || topic === null) {
            dispatch(topicAction(JSON.parse(window.localStorage.getItem('topic'))));
            dispatch(conceptAction(JSON.parse(window.localStorage.getItem('subTopic'))));
            dispatch(chapterAction(JSON.parse(window.localStorage.getItem('chapter'))));
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
