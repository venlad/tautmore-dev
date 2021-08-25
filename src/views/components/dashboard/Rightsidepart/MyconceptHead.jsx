import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import  { syllabus }  from '../mockData/Myconceptdata';

const MyconceptHead = () => (
    <div className="myconcept-head-main">
        <div className="myconcept-head-top">
            <Breadcrumb>
                <Breadcrumb.Item>Mathematics</Breadcrumb.Item>
                <Breadcrumb.Item>Count to 10</Breadcrumb.Item>
                <Breadcrumb.Item>1.1 How to count to 3</Breadcrumb.Item>
                <Breadcrumb.Item active>1.1.1 Learn to count</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div className="myconcept-head-bottom">
            {syllabus.map((data) => (
                <div key={data.title}>
                    <h4>{data.title}</h4>
                    {data?.data.map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </div>
            ))}
        </div>

    </div>
);

export default MyconceptHead;
