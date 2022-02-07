import React from 'react';
import '../teachers.scss';
import Studentimg from '../../../../assets/images/studentimg.png';
import Progressbar from '../../../components/dashboard/Rightsidepart/Progressbar';
import Mystudentlistingdata from '../mockData/Mystudentlisting';

const Mystudentlisting = () => (
    <div className="col-sm-12">
        <div className="row">
            {Mystudentlistingdata.map((item) => (
                <div className="col-sm-4 stdloopdiv">
                    <div className="innerdiv">
                        <img className="studenticon" src={Studentimg} alt="studentimg" />
                        <p className="stdname">{item.name}</p>
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="stdgrade">Grade {item.grade}</p>
                            </div>
                            <div className="col-sm-6">
                                <div className="atteddiv">{item.attendance === 'true' ? <span className="attendance"> Present</span> : <span className="attendanceAbsent">Absent</span> }</div>
                            </div>
                        </div>
                        <Progressbar className="progress-bar-one" peronevalue={item.progress} perone title="Subject completion" />
                    </div>

                </div>
            ))}

        </div>
    </div>
);

export default Mystudentlisting;
