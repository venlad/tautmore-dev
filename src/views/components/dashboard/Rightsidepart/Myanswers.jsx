import React from 'react';
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,

} from 'recharts';
import  Answer  from '../mockData/chartdata';

const Myanswers = () => (

    <div className="myanswer">
        <div className="progress-chart-top">
            <div className="row">
                <div className="col-sm-8 col-12">
                    <h3>MY ANSWERS</h3>
                </div>

                <div className="select-one col-sm-2 col-6">
                    <select>
                        <option>Mathematics</option>
                        <option>Science</option>
                        <option>English</option>
                    </select>
                </div>
                <div className="select-two col-sm-2 col-6">
                    <select>
                        <option>Last week</option>
                        <option>This week</option>
                    </select>
                </div>
            </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={Answer}>
                <CartesianGrid stroke="#F8F5F5" />
                <XAxis
                    dataKey="day"
                    tick={{ stroke: '#454C4E', color: '#454C4E' }}
                    axisLine={false}
                    tickLine={false}

                />
                <YAxis
                    dataKey="Correctanswers"
                    tick={{ stroke: '#454C4E', color: '#454C4E' }}
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

                />
                <Bar
                    dataKey="Wronganswers"
                    fill="#FCA834"
                    stackId="a"
                    barSize={80}

                />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default Myanswers;
