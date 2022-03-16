import { array } from 'prop-types';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { alltime } from '../mockData/MyexamExamlist';

const MyexamTab = ({subjectList, setSelectedSubject, selectedSubject,timedata,setTimedata}) => {
    console.log('selectedSubject',selectedSubject);
    // const [activebtn, setActivebtn] = useState('All subjects');
    // const handleMathsColor = () => setActivebtn('maths');
    // const handleAllsubcolor = () => {
    //     setActivebtn('All subjects');
    // };
    // const handleEnglishcolor = () => {
    //     setActivebtn('english');
    // };
    // const [timedata, setTimedata] = useState("");

    const changeTime = (val) => {
        setTimedata(val);
    };
    const handleSelectSubject = (obj) => {
        setSelectedSubject(obj);
    };

    return (
        <div className="row myexam-tab">
            <div className="col-md-8 col-sm-12 ">
                <div className="dtoggle-bar">
                    {console.log('subjectList', subjectList)}
                    <div key="all" className="toggle-maths-div">
                      <button
                          className={`toggle-maths-btn ${selectedSubject?.name === "All Subject"  ?
                             'mathbtn-act' : 'mathbtn-un'}`}
                          type="button"
                          onClick={() => handleSelectSubject({ _id: '', name: 'All Subject' })}
                      >
                         All Subject
                      </button>
                  </div>
                    {subjectList && subjectList?.map(item => (
                      <div key={item?.subject?._id} className="toggle-maths-div">
                        
                      <button
                          className={`toggle-maths-btn ${selectedSubject?.name === item?.subject?.name  ?
                             'mathbtn-act' : 'mathbtn-un'}`}
                          type="button"
                          onClick={() => handleSelectSubject(item?.subject)}
                      >
                          {item?.subject.name}
                      </button>
                  </div>
                ))}
                    {/* <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${
                                activebtn === 'All subjects' ? 'mathbtn-act' : 'mathbtn-un'
                            }`}
                            type="button"
                            onClick={() => handleAllsubcolor()}
                        >
                            All subjects
                        </button>
                    </div>

                    <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${
                                activebtn === 'maths' ? 'mathbtn-act' : 'mathbtn-un'
                            }`}
                            type="button"
                            onClick={() => handleMathsColor()}
                        >
                            Mathematics
                        </button>
                    </div>

                    <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${
                                activebtn === 'english' ? 'mathbtn-act' : 'mathbtn-un'
                            }`}
                            type="button"
                            onClick={() => handleEnglishcolor()}
                        >
                            English
                        </button>
                    </div>
                </div> */}
                </div>
            </div>
            <div className="col-md-4 col-sm-12 myexam-tab-right">

                <Dropdown>

                    <Dropdown.Toggle>
                        {timedata?.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {alltime.map((data) => (
                            <Dropdown.Item key={data?.name} onClick={() => changeTime(data)}>
                                {data?.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>

                </Dropdown>
            </div>
        </div>
    );
};
 MyexamTab.propTypes = {
    subjectList:array.isRequired
 };
const mapStateToProps = (state) => ({
    subjectList: state.Auth.Login?.data?.subjectsEnrolled,
});
export default connect(mapStateToProps) (MyexamTab);
