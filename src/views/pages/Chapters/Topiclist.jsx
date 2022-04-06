/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useState } from 'react';
import {
    string, number, array, func, shape, arrayOf, object,
} from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { chapterAction, conceptAction, topicAction } from '../../../stores/Concept/ConceptActions';

const Topiclist = ({
    topic,
    topicIdx,
    viewMoreTopic,
    idx,
    setViewMoreTopic,
    chapterSlug,
    subjectSlug,
    chapter,
}) => {
    const grade = useSelector((state) => state.footerGrade);
    const dispatch = useDispatch();
    const [desktop, setDesktop] = useState(true);
    const handleResize = () => {
        if (window.innerWidth < 992) {
            setDesktop(false);
        }
    };

    console.log(desktop);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        if (window.innerWidth < 992) {
            setDesktop(false);
        }
    });

    return (
        <li
            role="button"
            tabIndex={0}
            onKeyPress={() => dispatch(topicAction(topic))}
            onClick={() => {
                dispatch(topicAction(topic));
                dispatch(chapterAction(chapter));
            }}
        >
            <span
                role="button"
                tabIndex={0}
                onKeyPress={() => dispatch(topicAction(topic))}
                onClick={() => {
                    dispatch(conceptAction(topic?.subTopic[0]));
                }}
            >
                <Link to={'/'.concat(grade) + '/'.concat(subjectSlug) + '/'.concat(chapterSlug) + '/'.concat(topic?.slug)}>
                    {`${String.fromCharCode(65 + topicIdx)}.`} {topic?.topicName}
                </Link>
            </span>
            <ul>
                {topic?.subTopic?.map((subTopic, subIdx) => (
                    subIdx <= 3 || (viewMoreTopic[0] === idx && viewMoreTopic[1] === topicIdx)) && (
                    <li
                        key={subTopic?.id}
                        role="button"
                        tabIndex={0}
                        onKeyPress={() => dispatch(conceptAction(subTopic))}
                        onClick={() => dispatch(conceptAction(subTopic))}
                    >
                        <Link to={'/chapters/'.concat(subjectSlug) + '/'.concat(chapterSlug) + '/'.concat(topic?.slug)}>
                            <div
                                role="button"
                                tabIndex={0}
                                className="sub-topic-div"
                            >
                                {String.fromCharCode(65 + topicIdx)}.{subIdx + 1}
                                {' '}{subTopic?.subTopicName}

                            </div>
                        </Link>
                    </li>
                ))}
                {topic?.subTopic?.length > 4 && (
                    <li
                        className={`view-more ${
                            viewMoreTopic[0] === idx && viewMoreTopic[1] === topicIdx
                                ? 'hide'
                                : ''
                        }`}
                    >
                        <button
                            className={`view-more ${
                                viewMoreTopic[0] === idx && viewMoreTopic[1] === topicIdx
                                    ? 'hide'
                                    : ''
                            }`}
                            onClick={() => setViewMoreTopic([idx, topicIdx])}
                            type="button"
                        >  View more
                        </button>
                    </li>
                )}
            </ul>
        </li>
    );
};

Topiclist.propTypes = {
    topic: shape({
        key: string.isRequired,
        name: string.isRequired,
        topics: arrayOf(string.isRequired),
    }).isRequired,
    topicIdx: number.isRequired,
    viewMoreTopic: array.isRequired,
    idx: number.isRequired,
    setViewMoreTopic: func.isRequired,
    chapterSlug: string.isRequired,
    subjectSlug: string.isRequired,
    chapter: object.isRequired,
};
export default Topiclist;
