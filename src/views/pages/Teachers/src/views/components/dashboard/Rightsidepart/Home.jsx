import React from 'react';
// import NextClass from './NextClass';
import Braingym from './Braingym';
import Activity from './Activity';
import Error from './Error';
import Upcomingclass from './Upcomingclass';
import Report from './Report';
import Myanswers from './Myanswers';
import Leaderboard from './Leaderboard';

const Home = () => (
    <div>
        <Error />
        <Upcomingclass />
        {/* <NextClass /> */}
        <Braingym />
        <Report />
        <Myanswers />
        <Leaderboard title="LEADERBOARD-ACCURACY" />
        <Leaderboard title="LEADERBOARD-SPEED & ACCURACY" />
        <Activity />
    </div>
);

export default Home;
