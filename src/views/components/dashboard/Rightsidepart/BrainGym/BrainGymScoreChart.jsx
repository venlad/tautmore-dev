import React from 'react';
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LabelList,
    Cell,

} from 'recharts';
import Score from './mockData/BrainGymScoreData';

function BrainGymScoreChart() {
    return (
        <div style={{ marginTop: '50px' }}>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={Score}>
                    <CartesianGrid stroke="#F8F5F5" />
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7C92F9" stopOpacity={1.8} />
                            <stop offset="100%" stopColor="#526BDE" stopOpacity={1.0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FCA834" stopOpacity={1.8} />
                            <stop offset="95%" stopColor="#FFE266" stopOpacity={0.8} />
                        </linearGradient>
                    </defs>
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
                    {/* {day = } */}

                    <Bar
                        dataKey="Score"
                        // fill="linear-gradient(139.23deg, #FCA834 0%, #FFE266 100%)"
                        // eslint-disable-next-line no-constant-condition
                        // fill={false ? '#FCA834' : 'blue'}
                        stackId="a"
                        barSize={90}
                        fill="url(#colorUv)"
                    >
                        {Score.map((entry) => (
                            <Cell fill={entry.day === 'Today' ? 'url(#colorUv)' : 'url(#colorPv)'} />
                        ))}
                        <LabelList dataKey="Score" position="middle" fill="#fff" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BrainGymScoreChart;
