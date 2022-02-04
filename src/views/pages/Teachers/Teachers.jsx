import React, { useState } from 'react';
import { object } from 'prop-types';
import '../../components/dashboard/dashboard.scss';
import Sidemenu from './Sidemenu';
import DashSearch from '../../components/dashboard/Rightsidepart/DashSearch';
// import ExamDetails from './ExamDetails';
import './teachers.scss';
// import OnlineClassCompleted from './OnlineClassCompleted';

// import MyClassesCommon from '../../components/dashboard/Rightsidepart/MyClass/MyClassesCommon';

import Home from './Rightsidepart/Home/Home';
import Calendar from './Rightsidepart/Calendar/Calendar';
import { viewTypeData } from './mockData/DashboardViewData';

const Teachers = ({ match }) => {
    const [open, setOpen] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    // const [exam, setExam] = useState('');
    const viewType = match.params.viewtype ? match.params.viewtype : '';

    const renderLayouts = () => {
        let view = <Home lgShow={lgShow} setLgShow={setLgShow} />;
        switch (viewType) {
            case 'home':
                view = <Home lgShow={lgShow} setLgShow={setLgShow} />;
                break;
            case viewTypeData?.CALENDAR:
                view = <Calendar />;
                break;
            default:
                view = <Home lgShow={lgShow} setLgShow={setLgShow} />;
                break;
        }
        return view;
    };

    return (

        <div className={`dashboard-main ${open ? 'open' : 'close'}`}>
            <div className="row row-main">
                <Sidemenu
                    open={open}
                    setOpen={setOpen}
                    viewType={viewType}
                />
                <div className="col-sm-9 dashboard-right">
                    <DashSearch />
                    {renderLayouts()}
                </div>
            </div>
        </div>
    );
};

Teachers.propTypes = {
    match: object.isRequired,
};

export default Teachers;
