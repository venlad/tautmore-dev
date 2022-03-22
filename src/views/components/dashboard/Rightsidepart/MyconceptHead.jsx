/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { conceptAction } from '../../../../stores/Concept/ConceptActions';

const MyconceptHead = () => {
    const dispatch = useDispatch();
    const { chapter, subTopic, topic } = useSelector((state) => state.concept);
    return (

        <div className="myconcept-head-main">
            <div className="myconcept-head-top">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        {chapter?.subject?.data?.attributes?.title}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{chapter?.title}</Breadcrumb.Item>
                    <Breadcrumb.Item>1.1 {topic?.topicName}</Breadcrumb.Item>
                    {
                        subTopic
                            &&                        (
                                <Breadcrumb.Item active>
                                    1.1.1 {subTopic?.subTopicName}
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
                        >{item?.subTopicName}
                        </li>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default MyconceptHead;
