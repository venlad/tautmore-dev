import React from 'react';
import count from '../mockData/Mysubjectcountdata';
import Mysubjectprogressbar from './Mysubjectprogressbar';

const Mysubjectcountcommon = () => (
    <div>
        {count.map((data) => (
            <div className="mysubject-count-common" key={data.title}>
                <h5>{data.title}</h5>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        {data?.progressbar.map((progress) => (
                            <div className="row progress-main" key={progress.percentage}>
                                <div className="col-md-10 col-sm-10 col-10">
                                    <Mysubjectprogressbar
                                        percentage={progress.percentage}
                                        color={progress.color}
                                    />
                                </div>

                                <div className="col-md-2 col-sm-2 col-2">

                                    <span className={progress.color}>{progress.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 text-center sub-video">
                        <p>Sub-topics: <span>{data.subtopic}</span></p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 text-center sub-video">
                        <p>Video lessons: <span>{data.videolesson}</span></p>
                    </div>
                </div>

                <div className="sub-list">

                    {data?.subtopiclist.map((sublist) => (

                        <li key={sublist}>{sublist}</li>

                    ))}
                </div>

            </div>
        ))}
    </div>
);

export default Mysubjectcountcommon;
