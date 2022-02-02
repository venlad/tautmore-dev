import React, { useState } from 'react';

const Mysubjectlisttop = () => {
    const [activebtn, setActivebtn] = useState('maths');
    const handleMathsColor = () => setActivebtn('maths');
    const handleSciencecolor = () => {
        setActivebtn('science');
    };
    const handleEnglishcolor = () => {
        setActivebtn('english');
    };
    return (
        <div className="mysubject-list">
            <div className="dtoggle-bar">
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
                            activebtn === 'science' ? 'mathbtn-act' : 'mathbtn-un'
                        }`}
                        type="button"
                        onClick={() => handleSciencecolor()}
                    >
                        Science
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
    );
};

export default Mysubjectlisttop;
