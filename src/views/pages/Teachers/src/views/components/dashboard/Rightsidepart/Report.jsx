import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Progressbar from './Progressbar';
import ReportChild from './ReportChild';
import noteblue from '../../../../assets/images/noteblue.png';
import bagblue from '../../../../assets/images/bagblue.png';
import { subject, time } from '../mockData/reportData';

const Report = () => {
    const [subdata, setSubdata] = useState(subject[0]);
    const [timedata, setTimedata] = useState(time[0]);
    const changeSubject = (val) => {
        setSubdata(val);
    };
    const changeTime = (val) => {
        setTimedata(val);
    };
    return (
        <div className="row report">
            <div className="col-md-6 report-left">
                <h3>report</h3>
                <Progressbar className="progress-bar-one" peronevalue={38} perone title="Syllabus completion" />

                <Progressbar className="progress-bar-two" pertwovalue={54} pertwo title="Concepts" />

            </div>
            <div className="col-md-6 report-right">
                <div className="row">
                    <div className="col-md-4 report-one col-12">
                        <Dropdown>

                            <Dropdown.Toggle>
                                {subdata}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {subject.map((data) => (
                                    <Dropdown.Item key={data} onClick={() => changeSubject(data)}>
                                        {data}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>

                        </Dropdown>
                    </div>
                    <div className="col-md-3 report-two col-12">
                        <Dropdown>

                            <Dropdown.Toggle>
                                {timedata}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {time.map((data) => (
                                    <Dropdown.Item key={data} onClick={() => changeTime(data)}>
                                        {data}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>

                        </Dropdown>
                    </div>
                    <div className="col-md-5 report-three col-12">
                        <li>view detailed report</li>
                    </div>
                </div>

                <div className="row report-bottom">
                    <div className="col-md-6 col-sm-6 col-12">
                        <ReportChild title="70 / 100" desc="Recent exam score" noteblue={noteblue} />
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <ReportChild title="145" desc="Questions answered" bagblue={bagblue} />
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Report;
