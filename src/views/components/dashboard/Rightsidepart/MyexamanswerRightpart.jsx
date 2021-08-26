import React from 'react';
import { rightpart } from '../mockData/Myanswerdata';

const MyexamanswerRightpart = () => (
    <div className="myexam-answer-right">
        {rightpart.map((data) => (
            <div key={data.title}>
                <h3>{data.title}</h3>
                {data?.data.map((value, ind) => (
                    <div key={value.title} className="row">
                        <div className="col-md-1" />
                        <div className="col-md-10">
                            <h5><span>{ind + 1}</span>{value.que}</h5>
                            <h5>Answer :</h5>
                            <div>
                                <span>{value.anstext}</span>
                                <span><img src={value.ansimg} alt={value.anstext} /></span>
                            </div>
                        </div>
                        <div className="col-md-1" />
                    </div>
                ))}
            </div>
        ))}
    </div>
);

export default MyexamanswerRightpart;
