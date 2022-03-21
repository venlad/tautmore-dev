/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
    string, number, array, func, shape, arrayOf,
} from 'prop-types';
import { Link } from 'react-router-dom';

const Topiclist = ({
    topic,
    topicIdx,
    viewMoreTopic,
    idx,
    setDescriptionAnchor,
    setViewMoreTopic,
}) => {
    const [desktop, setDesktop] = useState(true);
    const handleResize = () => {
        if (window.innerWidth < 992) {
            setDesktop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        if (window.innerWidth < 992) {
            setDesktop(false);
        }
    });

    return (
        <li>
            <span>
                {`${String.fromCharCode(65 + topicIdx)}.`} {topic?.topicName}
            </span>
            <ul>
                {topic?.subTopic?.map((subTopic, subIdx) => (
                    subIdx <= 3 || (viewMoreTopic[0] === idx && viewMoreTopic[1] === topicIdx)) && (
                    <li key={subTopic?.id}>
                        <Link to={'/dashboard/'.concat(subTopic?.slug)}>
                            <div
                                role="button"
                                tabIndex={0}
                                onMouseEnter={() => (desktop
                                    ? setDescriptionAnchor([idx, topicIdx, subIdx]) : '')}
                                onMouseLeave={() => (desktop
                                    ? setDescriptionAnchor([idx, topicIdx, subIdx]) : '')}
                                onClick={() => (!desktop
                                    ? setDescriptionAnchor([idx, topicIdx, subIdx]) : '')}
                                onKeyDown={() => (!desktop
                                    ? setDescriptionAnchor([idx, topicIdx, subIdx]) : '')}
                                className="sub-topic-div"
                            >
                                {String.fromCharCode(65 + topicIdx)}.{subIdx + 1} {subTopic?.subTopicName}

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
    setDescriptionAnchor: func.isRequired,
    setViewMoreTopic: func.isRequired,

};
export default Topiclist;
