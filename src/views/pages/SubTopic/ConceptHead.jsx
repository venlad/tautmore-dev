/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { object } from 'prop-types';
import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useDispatch } from 'react-redux';
import { conceptAction } from '../../../stores/Concept/ConceptActions';

const MyconceptHead = ({ chapter, subTopic, topic }) => {
    const dispatch = useDispatch();
    return (

        <div className="myconcept-head-main">
            <div className="myconcept-head-top">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        {chapter?.subject?.data?.attributes?.title}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{chapter?.title}</Breadcrumb.Item>
                    <Breadcrumb.Item>{topic?.topicNumber} {topic?.topicName}</Breadcrumb.Item>
                    {
                        subTopic
                            &&                        (
                                <Breadcrumb.Item active>
                                    {subTopic?.subTopicNumber} {subTopic?.subTopicName}
                                </Breadcrumb.Item>
                            )
                    }
                </Breadcrumb>
            </div>
            <div className="myconcept-head-bottom">

                <div>
                    <h4>{topic?.topicName}</h4>
                    {topic?.subTopic?.map((item) => (
                        <li
                            className={'head-li'.concat(subTopic?.subTopicName === item?.subTopicName ? '-active' : '')}
                            key={item?.id}
                            role="button"
                            tabIndex={0}
                            onKeyPress={() => dispatch(conceptAction(item))}
                            onClick={() => dispatch(conceptAction(item))}
                        >{item?.subTopicNumber} {item?.subTopicName}
                        </li>
                    ))}
                </div>

            </div>

        </div>
    );
};

MyconceptHead.propTypes = {
    chapter: object,
    topic: object,
    subTopic: object,
};

MyconceptHead.defaultProps = {
    chapter: {},
    topic: {},
    subTopic: {},
};

export default MyconceptHead;
