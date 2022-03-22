import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyconceptHead from './MyconceptHead';
import Myconceptdesc from './Myconceptdesc';
import MyconceptVideo from './MyconceptVideo';
import { chapterAction, conceptAction, topicAction } from '../../../../stores/Concept/ConceptActions';

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
            <div className="col-md-8">
                <div className="myconcept-left">
                    <MyconceptHead />
                    <Myconceptdesc />
                </div>
            </div>
            <div className="col-md-4">
                <div className="myconcept-right">
                    <MyconceptVideo />
                </div>
            </div>
        </div>
    );
};

export default Myconcept;
