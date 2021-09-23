import React, { useState } from 'react';

const MyClassesTAB = () => {
    const [activebtn, setActivebtn] = useState('All subjects');
    const handleMathsColor = () => setActivebtn('maths');
    // const handleCocurriColor = () => setActivebtn('cocurri')
    const handleAllsubcolor = () => {
        setActivebtn('All subjects');
    };
    const handleEnglishcolor = () => {
        setActivebtn('english');
    };
    const handleCocurriColor = () => {
        setActivebtn('cocurri');
    };
    return (
        <div className="row myexam-tab">
            <div className="col-md-10 col-sm-12">
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

                    <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${
                                activebtn === 'cocurri' ? 'mathbtn-act' : 'mathbtn-un'
                            }`}
                            type="button"
                            onClick={() => handleCocurriColor()}
                        >
                            Co-curricular
                        </button>
                    </div>
                </div>
            </div>

            <div className=" col-sm-12 myexam-tab-right">
                <select>
                    <option>All time</option>
                </select>
            </div>
        </div>
    );
};

export default MyClassesTAB;
