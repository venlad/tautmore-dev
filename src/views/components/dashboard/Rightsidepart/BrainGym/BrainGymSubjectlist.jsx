import React, { useState } from 'react';
import { object, func, array } from 'prop-types';
import { connect } from 'react-redux';
import { startChestAction } from '../../../../../stores/BrainGym/BrainGymAction';

const BrainGymSubjectlist = ({ subjectList, setSelectedSubject, selectedSubject, startChest})  => {
    
    const handleSelectSubject = (obj) => {
        setSelectedSubject(obj);
        startChest(obj?._id)
    };

    return (
        <div className="row braingym-sublisttab">
            <div className="col-md-8 col-sm-12">
                <div className="dtoggle-bar">
                {subjectList?.map(item => (
                      <div key={item?.subject?._id} className="toggle-maths-div">
                      <button
                          className={`toggle-maths-btn ${selectedSubject?._id === item?.subject?._id ? 'mathbtn-act' : 'mathbtn-un'}`}
                          type="button"
                          onClick={() => handleSelectSubject(item?.subject)}
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
    subjectList: array.isRequired,
    startChest: func.isRequired,
    selectedSubject: object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    startChest: (data) => dispatch(startChestAction(data)),
});

export default connect(null, mapDispatchToProps)(BrainGymSubjectlist);
