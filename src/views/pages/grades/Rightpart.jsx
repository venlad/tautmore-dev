import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { rightpartData } from "./mockData/Data";

function Rightpart() {
  return (
    <div className="rectangle col col-md-9">
      <div className="pre-kindergarten-center">
        <h1>Pre-kindergarten</h1>
      </div>

      <div className="classroom-subject main-common">
        {rightpartData.map((data, ind) => (
          <div key={ind}>
            <div className="classroom head-common">
              <p>{data.titleone}</p>
            </div>
            <div className="subjects">
              <Router>
                <ul className="row">
                  {data?.dataone?.map((item, index) => {
                    return (
                      <li className="col-md-4 math" key={index}>
                        <Link to="/mathematics">
                          <img
                            className="myexams-icon"
                            src={item.image}
                            alt="logo"
                          />
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Router>
            </div>
          </div>
        ))}
      </div>

      <div className="classroom-subject main-common classroom-two">
        {rightpartData.map((data, ind) => (
          <div key={ind}>
            <div className="classroom head-common">
              <p>{data.titletwo}</p>
            </div>
            <div className="subjects">
              <Router>
                <ul className="row">
                  {data?.datatwo?.map((item, index) => {
                    return (
                      <li className="col-md-4 math" key={index}>
                        <Link to="/mathematics">
                          <img
                            className="myexams-icon"
                            src={item.image}
                            alt="logo"
                          />
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Router>
            </div>
          </div>
        ))}
      </div>

      <div className="classroom-subject main-common">
        {rightpartData.map((data, ind) => (
          <div key={ind}>
            <div className="classroom head-common">
              <p>{data.titlethree}</p>
            </div>
            <div className="subjects">
              <Router>
                <ul className="row">
                  {data?.datathree?.map((item, index) => {
                    return (
                      <li className="col-md-4 math" key={index}>
                        <Link to="/mathematics">
                          <img
                            className="myexams-icon"
                            src={item.image}
                            alt="logo"
                          />
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Router>
            </div>
          </div>
        ))}
      </div>

      <div className="classroom-subject main-common">
        {rightpartData.map((data, ind) => (
          <div key={ind}>
            <div className="classroom head-common">
              <p>{data.titlefour}</p>
            </div>
            <div className="subjects">
              <Router>
                <ul className="row">
                  {data?.datafour?.map((item, index) => {
                    return (
                      <li className="col-md-4 math" key={index}>
                        <Link to="/mathematics">
                          <img
                            className="myexams-icon"
                            src={item.image}
                            alt="logo"
                          />
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Router>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rightpart;
