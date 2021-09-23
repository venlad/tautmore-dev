import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,

} from 'recharts';
import  Answer  from '../mockData/chartdata';
import { subject, time } from '../mockData/reportData';

const Myanswers = () => {
    const [subdata, setSubdata] = useState(subject[0]);
    const [timedata, setTimedata] = useState(time[0]);
    const changeSubject = (val) => {
        setSubdata(val);
    };
    const changeTime = (val) => {
        setTimedata(val);
    };
    return (

        <div className="myanswer">
            <div className="progress-chart-top">
                <div className="row">
                    <div className="col-sm-8 col-12">
                        <h3>MY ANSWERS</h3>
                    </div>

                    <div className="select-one col-sm-2 col-6">
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
                    <div className="select-two col-sm-2 col-6">
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
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={Answer}>
                    <CartesianGrid stroke="#F8F5F5" />
                    <XAxis
                        dataKey="day"
                        tick={{ color: '#454C4E' }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ color: '#454C4E' }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Legend iconType="circle" />

                    <Bar
                        dataKey="Correctanswers"
                        fill="#7D93F2"
                        stackId="a"
                        barSize={80}
                    >
                        <LabelList dataKey="Correctanswers" position="middle" fill="#fff" />
                    </Bar>

                    <Bar
                        dataKey="Wronganswers"
                        fill="#FCA834"
                        stackId="a"
                        barSize={80}
                    >
                        <LabelList dataKey="Wronganswers" position="middle" fill="#fff" />
                    </Bar>

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default Myanswers;
