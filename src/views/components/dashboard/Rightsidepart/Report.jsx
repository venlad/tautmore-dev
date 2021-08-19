import React from 'react';
import Progressbar from './Progressbar';
import ReportChild from './ReportChild';

const Report = () => (
    <div className="row report">
        <div className="col-md-6 report-left">
            <h3>report</h3>
            <Progressbar className="progress-bar-one" peronevalue={38} perone title="Syllabus completion" />

            <Progressbar className="progress-bar-two" pertwovalue={54} pertwo title="Concepts" />

        </div>
        <div className="col-md-6 report-right">
            <div className="row">
                <div className="col-md-4">
                    <select>
                        <option>Mathematics</option>
                        <option>Science</option>
                        <option>English</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select>
                        <option>Last week</option>
                        <option>Last month</option>
                    </select>
                </div>
                <div className="col-md-5">
                    <li>view detailed report</li>
                </div>
            </div>

            <div className="row report-bottom">
                <div className="col-md-6">
                    <ReportChild title="70 / 100" desc="Recent exam score" />
                </div>
                <div className="col-md-6">
                    <ReportChild title="145" desc="Questions answered" />
                </div>
            </div>

        </div>
    </div>
);

export default Report;
