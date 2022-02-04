import React, { useState } from 'react';
import { object } from 'prop-types';

const BrainGymSubjectlist = ({ subjectList })  => {
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
                {subjectList?.map(item => (
                      <div className="toggle-maths-div">
                      <button
                          className={`toggle-maths-btn ${activebtn === 'maths' ? 'mathbtn-act' : 'mathbtn-un'}`}
                          type="button"
                          onClick={() => handleMathsColor()}
                      >
                          {item?.subject.name}
                      </button>
                  </div>

                ))}
                </div>
            </div>
        </div>
    );
};

BrainGymSubjectlist.propTypes = {
    subjectList: object.isRequired,
};

export default BrainGymSubjectlist;
