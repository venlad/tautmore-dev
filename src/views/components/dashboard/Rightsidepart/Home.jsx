import React from 'react';
// import NextClass from './NextClass';
import Braingym from './Braingym';
import Activity from './Activity';
import Error from './Error';
import Upcomingclass from './Upcomingclass';
import Report from './Report';
import Myanswers from './Myanswers';

const Home = () => (
    <div>
        <Error />
        <Upcomingclass />
        {/* <NextClass /> */}
        <Braingym />
        <Report />
        <Myanswers />
        <Activity />
    </div>
);

export default Home;
