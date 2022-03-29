import React, { useEffect, useState } from 'react';
import STRAPI_URL from '../../../constants/strapi';
import Layout from '../../../Layout/Layout';
import '../../components/dashboard/dashboard.scss';
import Subjectlist from '../home/Subjectlist';
import Myconcept from './Concept';

const SubTopic = () => {
    const [subjects, setSubjects] = useState([]);

    const fetchSubjects = async () => {
        const activityRes = await fetch(
            `${STRAPI_URL}/api/subjects?populate=*&sort=id:asc`,
        );
        const activityData = await activityRes.json();
        setSubjects(activityData?.data);
    };

    useEffect(() => {
        fetchSubjects();
    }, []);
    return (
        <Layout>
            <Subjectlist subjects={subjects} />
            <div className="dashboard-main open">
                <div className="row row-main dashboard-main-row">
                    <div className="col-sm-12 dashboard-right">
                        <Myconcept />
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default SubTopic;
