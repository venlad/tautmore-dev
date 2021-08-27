import React from 'react';
import Rightpart from './Rightpart';
import './sidebar.scss';
import Chapterslink from '../Chapters/Chapterslink';
import Layout from '../../../Layout/Layout';

const Grades = () => (
    <Layout>
        <div className="grade-container">
            <Chapterslink />
            <Rightpart />
        </div>
    </Layout>
);
export default Grades;
