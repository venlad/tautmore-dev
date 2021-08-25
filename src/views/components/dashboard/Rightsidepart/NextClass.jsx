import React from 'react';
import { display, info, clock } from '../../../../assets/icons/IconList';
import Progressbar from './Progressbar';
import Iconpart from './Iconpart';

const NextClass = () => (
    <div className="next-class row">

        <div className="col-md-5">
            <div className="row">
                <div className="col-md-12 next-chapter">
                    <div className="next-class-common">
                        <div className="row ">
                            <div className="col-md-8">
                                <h4>Mathematics</h4>
                                <p>Chapter 8: Trignometry</p>
                                <p className="center-p">{clock} Starts in 00:23:24</p>
                            </div>
                            <div className="col-md-4">
                                <div className="nex-chapter-span">
                                    {display}
                                    <span>Next class</span>
                                </div>
                            </div>
                        </div>
                        <div className="row performance ">
                            <div className="col-md-6 col-sm-6">
                                <li>Go to link</li>
                            </div>
                            <div className="col-md-6 px-0 col-sm-6">
                                <p>{info} Test audio & video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-7">
            <div className="row">
                <div className="col-md-12 next-perfomance">
                    <div className="next-class-common ">
                        <div className="row">
                            <div className="col-md-7 per-left">
                                <h3>Performance</h3>
                                <Progressbar className="progress-bar-one" peronevalue={38} perone title="Syllabus completion" />

                                <Progressbar className="progress-bar-two" pertwovalue={54} pertwo title="Concepts" />

                            </div>
                            <div className="col-md-5 per-right">
                                <div className="select-top">
                                    <select>
                                        <option>Mathematics</option>
                                        <option>Science</option>
                                        <option>English</option>
                                    </select>
                                </div>

                                <Iconpart title="6" desc="Homework remaining" className="one" />

                                <Iconpart title="11" desc="Assessment remaining" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>

);

export default NextClass;
