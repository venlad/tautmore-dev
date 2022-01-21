import React, { useState } from 'react';
import '../../components/dashboard/dashboard.scss';
import Sidemenu from '../../components/dashboard/Leftsidepart/Sidemenu';
import DashSearch from '../../components/dashboard/Rightsidepart/DashSearch';
import MyClassesTitle from '../../components/dashboard/Rightsidepart/MyexamTitle';
import MyClassesTAB from '../../components/dashboard/Rightsidepart/MyClass/MyClassesTab';
import MyClassesList from '../../components/dashboard/Rightsidepart/MyClass/MyClassesList';
import SimpleSlider from './Slider';
import SubjectModel from './SubjectModel';
// import ExamDetails from './ExamDetails';
import './teachers.scss';
// import OnlineClassCompleted from './OnlineClassCompleted';

// import MyClassesCommon from '../../components/dashboard/Rightsidepart/MyClass/MyClassesCommon';
import OnlineClassalert from './OnlineClassalert';

const Teachers = () => {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState('Dashboard');
    const [setConcept] = useState('');
    const [lgShow, setLgShow] = useState(false);
    // const [exam, setExam] = useState('');

    return (

        <div className={`dashboard-main ${open ? 'open' : 'close'}`}>
            <div className="row row-main">
                <Sidemenu
                    open={open}
                    setOpen={setOpen}
                    setView={setView}
                    view={view}
                    setConcept={setConcept}
                />
                <div className="col-sm-9 dashboard-right">
                    <DashSearch />
                    <OnlineClassalert />
                    <div className="myexam-main">
                        <MyClassesTitle title="My upcoming classes - 3"  />
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
