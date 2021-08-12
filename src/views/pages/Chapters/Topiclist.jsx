import React from "react";
import SubtopicDesc from "./subtopicDesc";

const Topiclist = ({
  topic,
  topicIdx,
  viewMoreTopic,
  idx,
  descriptionAnchor,
  setDescriptionAnchor,
  descRef,
  shouldToggleStyle,
  setViewMoreTopic,
}) => {
  return (
    <li>
      <span>
        {`${String.fromCharCode(65 + topicIdx)}.`} {topic.name} {topicIdx + 1}
      </span>
      <ul>
        {topic.topics.map((subTopic, subIdx) => {
          return (
            (subIdx <= 3 ||
              (viewMoreTopic[0] === idx && viewMoreTopic[1] === topicIdx)) && (
              <li
                key={`sub_${subIdx}`}
                onClick={() => setDescriptionAnchor([idx, topicIdx, subIdx])}
              >
                {`${String.fromCharCode(65 + topicIdx)}.${subIdx + 1}`}{" "}
                {subTopic} {subIdx + 1}
                <SubtopicDesc
                  isShow={
                    descriptionAnchor[0] === idx &&
                    descriptionAnchor[1] === topicIdx &&
                    descriptionAnchor[2] === subIdx
                  }
                  ref={descRef}
                  shouldToggleStyle={shouldToggleStyle}
                  index={`${idx}_${topicIdx}_${subIdx}`}
                />
              </li>
            )
          );
        })}
        {topic.topics.length > 4 && (
          <li
            className={`view-more ${
              viewMoreTopic[0] === idx && viewMoreTopic[1] === topicIdx
                ? "hide"
                : ""
            }`}
            onClick={() => setViewMoreTopic([idx, topicIdx])}
          >
            View more
          </li>
        )}
      </ul>
    </li>
  );
};

export default Topiclist;
