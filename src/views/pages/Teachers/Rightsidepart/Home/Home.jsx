import React from 'react';
import { func, bool } from 'prop-types';
import OnlineClassalert from '../../OnlineClassalert';
import MyClassesTitle from '../../../../components/dashboard/Rightsidepart/MyexamTitle';
import MyClassesTAB from '../../../../components/dashboard/Rightsidepart/MyClass/MyClassesTab';
import MyClassesList from '../../../../components/dashboard/Rightsidepart/MyClass/MyClassesList';
import SimpleSlider from '../../Slider';
import SubjectModel from '../../SubjectModel';
import Mysubjects from '../../Mysubjects/MySubjects';

const Home = ({ lgShow, setLgShow }) => (
    <div>
        <OnlineClassalert />
        <div className="myexam-main">
            <MyClassesTitle title="My upcoming classes - 3" />
            <MyClassesTAB />
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <SimpleSlider handleSubjectModel={setLgShow} />
                </div>
            </div>
            <div>
                <SubjectModel
                    showSubjectModel={lgShow}
                    handleSubjectModel={setLgShow}
                />
            </div>
            <MyClassesTitle title="Completed classes history" />
            <MyClassesTAB />

            <MyClassesList />
            {/* <ExamDetails /> */}
            <Mysubjects />
        </div>
    </div>
);
Home.propTypes = {
    lgShow: bool.isRequired,
    setLgShow: func.isRequired,
};

export default Home;
