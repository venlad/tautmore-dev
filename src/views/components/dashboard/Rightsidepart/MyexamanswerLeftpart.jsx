import React from 'react';
import { leftpart } from '../mockData/Myanswerdata';

const MyexamanswerLeftpart = () => (
    <div className="myexam-answer-left">
        {leftpart.map((data) => (
            <div className={`row ${data.title}`} key={data.title}>
                <div className="col-md-3 myexam-answer-sub-left">
                    <img src={data.image} alt={data.title} />
                </div>
                <div className="col-md-9 myexam-answer-sub-right">
                    <p>{data.title}</p>
                    <h5>{data.desc}</h5>
                </div>
            </div>
        ))}
    </div>
);

export default MyexamanswerLeftpart;
