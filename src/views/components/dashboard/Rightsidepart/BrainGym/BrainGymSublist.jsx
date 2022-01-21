import React, { useState } from 'react';

function BrainGymSublist() {
    const [activebtn, setActivebtn] = useState('maths');
    const handleSciColor = () => setActivebtn('science');
    const handleMathsColor = () => {
        setActivebtn('maths');
    };
    const handleEnglishcolor = () => {
        setActivebtn('english');
    };
    return (
        <div className="row braingym-sublisttab">
            <div className="col-md-8 col-sm-12">
                <div className="dtoggle-bar">

                    <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${activebtn === 'maths' ? 'mathbtn-act' : 'mathbtn-un'}`}
                            type="button"
                            onClick={() => handleMathsColor()}
                        >
                            Mathematics
                        </button>
                    </div>

                    <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${activebtn === 'english' ? 'mathbtn-act' : 'mathbtn-un'}`}
                            type="button"
                            onClick={() => handleEnglishcolor()}
                        >
                            English
                        </button>
                    </div>
                    <div className="toggle-maths-div">
                        <button
                            className={`toggle-maths-btn ${activebtn === 'science' ? 'mathbtn-act' : 'mathbtn-un'}`}
                            type="button"
                            onClick={() => handleSciColor()}
                        >
                            Science
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BrainGymSublist;
