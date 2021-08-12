import React, { useEffect, useRef, useState } from "react";
import { data } from "./data";
import "./style.scss";
import Subjectlist from "../home/Subjectlist";
import Mathicon from "../../../assets/images/design-tool@1.5x.svg";
import Chapterslink from "./Chapterslink";
import Topiclist from "./Topiclist";

const Chapters = (props) => {
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
      <div className="chapters-main-container">
        <Chapterslink />
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
            {data.map((chapter, idx) => {
              return (
                <div className="chapter-name" key={chapter.key}>
                  <h2>{`Chapter ${idx + 1} - ${chapter.name}`}</h2>
                  <ul>
                    {chapter.chapters.map((topic, topicIdx) => {
                      return (
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
                          key={`topic_${topicIdx}`}
                        />
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

export default Chapters;
