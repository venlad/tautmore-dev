import React, { useState, useEffect } from 'react';
import { array } from 'prop-types';

const SubjectTab = ({ data }) => {
    console.log(data, 'data from subject tab');
    const [activebtn, setActivebtn] = useState('');
    // const handleMathsColor = () => setActivebtn('maths');
    // const handleAllsubcolor = () => {
    //     setActivebtn('All subjects');
    // };
    // const handleEnglishcolor = () => {
    //     setActivebtn('english');
    // };
    // const handleCocurriColor = () => {
    //     setActivebtn('cocurri');
    // };
    useEffect(() => {
        data && setActivebtn(data[0]?.name);
    }, [data]);
    console.log(activebtn, 'activebtn');
    return (
        <div className="row myexam-tab">
            <div className="col-md-9 col-sm-12 myexam-tab-left">
                <div className="dtoggle-bar">
                    {data?.map((val) => (
                        <div className="toggle-maths-div">
                            <button
                                className={`toggle-maths-btn ${
                                    activebtn === val.name ? 'mathbtn-act' : 'mathbtn-un'
                                }`}
                                type="button"
                                onClick={() => setActivebtn(val?.name)}
                            >
                                {val?.name}
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
                    </div> */}
                </div>
            </div>
        </div>
    );
};

SubjectTab.propTypes = {
    data: array.isRequired,
};

export default SubjectTab;
