import React, { useState } from "react";
import { gradeLinks } from "./data";

const Syllabuslink = () => {
  const [selectedLink, setSelectedLink] = useState(0);
  return (
    <div className="syllabus-links">
      <h1>Grade</h1>
      <ul className="links-list">
        {gradeLinks.map((link, linkIdx) => {
          return (
            <li
              key={link}
              className={linkIdx === selectedLink ? "active" : ""}
              onClick={() => setSelectedLink(linkIdx)}
            >
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Syllabuslink;
