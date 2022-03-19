import React, { useState } from 'react';
import { object } from 'prop-types';
import { Dropdown } from 'react-bootstrap';
// import '../../../../components/dashboard/dashboard.scss';
import './student.scss';

const MyClassesTAB = ({ dropdown }) => {
    const [activebtn, setActivebtn] = useState('All subjects');
    const [timedata, setTimedata] = useState('All time');
    const handleMathsColor = () => setActivebtn('maths');
    const handleAllsubcolor = () => {
        setActivebtn('All subjects');
    };

    return (
        <div className="row myexam-tab">
            <div className="col-md-9 col-sm-12 myexam-tab-left">
                <div className="dtoggle-bar">
                    <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${
                                activebtn === 'All subjects' ? 'mathbtn-act' : 'mathbtn-un'
                            }`}
                            type="button"
                            onClick={() => handleAllsubcolor()}
                        >
                            Grade 4 - Mathematics
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
                            Grade 4 - Science
                        </button>
                    </div>

                    {/* <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${
                                activebtn === 'english' ? 'mathbtn-act' : 'mathbtn-un'
                            }`}
                            type="button"
                            onClick={() => handleEnglishcolor()}
                        >
                            English
                        </button>
                    </div> */}

                    {/* <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${
                                activebtn === 'cocurri' ? 'mathbtn-act' : 'mathbtn-un'
                            }`}
                            type="button"
                            onClick={() => handleCocurriColor()}
                        >
                            Co-curricular
                        </button>
                    </div> */}
                </div>
            </div>
            {dropdown
            && (
                <div className="col-md-3 col-sm-12 myexam-tab-right">
                    <Dropdown>
                        <Dropdown.Toggle>
                            {timedata}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setTimedata('Part time')}>
                                Part time
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            )}
        </div>
    );
};

MyClassesTAB.propTypes = {
    dropdown: object.isRequired,
};

export default MyClassesTAB;
