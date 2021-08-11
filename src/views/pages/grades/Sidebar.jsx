import React, { useState } from "react";
import "./sidebar.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { sidebarData } from "./mockData/Data";

export default function Sidebar() {
  const [selectedLink, setSelectedLink] = useState(0);
  return (
    <div className="slidebar-split col col-md-3">
      <div className="innercontainer">
        {sidebarData.map((data, ind) => (
          <div key={ind}>
            <div className="grade">
              <p>{data.title}</p>
            </div>

            <Router>
              <ul>
                {data?.data?.map((item, index) => {
                  return (
                    <li
                      className={`class-1 ${
                        index === selectedLink ? "active" : ""
                      }`}
                      key={index}
                      onClick={() => setSelectedLink(index)}
                    >
                      <Link to={item.to}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </Router>
          </div>
        ))}
      </div>
    </div>
  );
}
