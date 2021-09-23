import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { alltime } from '../mockData/MyexamExamlist';

const MyexamTab = () => {
    const [activebtn, setActivebtn] = useState('All subjects');
    const handleMathsColor = () => setActivebtn('maths');
    const handleAllsubcolor = () => {
        setActivebtn('All subjects');
    };
    const handleEnglishcolor = () => {
        setActivebtn('english');
    };
    const [timedata, setTimedata] = useState(alltime[0]);

    const changeTime = (val) => {
        setTimedata(val);
    };

    return (
        <div className="row myexam-tab">
            <div className="col-md-8 col-sm-12">
                <div className="dtoggle-bar">
                    <div className="toggle-maths-div">
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
                </div>
            </div>
            <div className="col-md-4 col-sm-12 myexam-tab-right">

                <Dropdown>

                    <Dropdown.Toggle>
                        {timedata}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {alltime.map((data) => (
                            <Dropdown.Item key={data} onClick={() => changeTime(data)}>
                                {data}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>

                </Dropdown>
            </div>
        </div>
    );
};

export default MyexamTab;
