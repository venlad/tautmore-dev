import React, { useEffect, useRef, useState } from "react";
import { data } from "./data";
import "./style.scss";
import SubtopicDesc from "./subtopicDesc";
import Subjectlist from "../home/Subjectlist";
import Mathicon from "../../../assets/images/design-tool@1.5x.svg";
import Syllabuslink from "./Syllabuslink";

const Syllabus = (props) => {
  const [viewMoreTopic, setViewMoreTopic] = useState(["", ""]);
  const [descriptionAnchor, setDescriptionAnchor] = useState(["", "", ""]);
  const [shouldToggleStyle, setShouldToggleStyle] = useState(false);
  const [subdata, setSubdata] = useState();

  const descRef = useRef(null);

  useEffect(() => {
    const elStart = descRef.current?.getBoundingClientRect();
    setShouldToggleStyle(elStart?.right < window.innerWidth / 2 + 200);
  }, [descriptionAnchor, descRef]);

  useEffect(() => {
    const sub = props.match.params.subject;
    setSubdata(sub);
  }, [props.match.params.subject]);

  return (
    <div>
      <Subjectlist subdata={subdata} setSubdata={setSubdata} />
      <div className="syllabus-container">
        <Syllabuslink />
        <div className="syllabus-details">
          <h1>
            <img src={Mathicon} />
            {subdata}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tem por incididunt ut
          </p>
          <div className="chapters-container">
            {data.map((chapter, idx) => {
              return (
                <div className="chapter-name" key={idx}>
                  <h2>{`Chapter ${idx + 1} - ${chapter.name}`}</h2>
                  <ul>
                    {chapter.chapters.map((topic, topicIdx) => {
                      return (
                        <li key={`topic_${topicIdx}`}>
                          <span>
                            {`${String.fromCharCode(65 + topicIdx)}.`}{" "}
                            {topic.name} {topicIdx + 1}
                          </span>
                          <ul>
                            {topic.topics.map((subTopic, subIdx) => {
                              return (
                                (subIdx <= 3 ||
                                  (viewMoreTopic[0] === idx &&
                                    viewMoreTopic[1] === topicIdx)) && (
                                  <li
                                    key={`sub_${subIdx}`}
                                    onClick={() =>
                                      setDescriptionAnchor([
                                        idx,
                                        topicIdx,
                                        subIdx,
                                      ])
                                    }
                                  >
                                    {`${String.fromCharCode(65 + topicIdx)}.${
                                      subIdx + 1
                                    }`}{" "}
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
                                  viewMoreTopic[0] === idx &&
                                  viewMoreTopic[1] === topicIdx
                                    ? "hide"
                                    : ""
                                }`}
                                onClick={() =>
                                  setViewMoreTopic([idx, topicIdx])
                                }
                              >
                                View more
                              </li>
                            )}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
