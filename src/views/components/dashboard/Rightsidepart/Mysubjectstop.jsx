import React from 'react';
import MysubProgressbar from './MysubProgressbar';
import Mysubject from '../../../../assets/images/Mysubjects.png';

const Mysubjectstop = () => (
    <div className="mysubject-top row">
        <div className="col-md-4 mysubject-top-left col-12">
            <h4><img src={Mysubject} alt="my_subject" />My subjects</h4>
        </div>
        <div className="col-md-8 col-12">
            <div className="row">
                <MysubProgressbar title="Classes completed" maxval={34} value={12} color="#43AA8B" />
                <MysubProgressbar title="Overall completion" percentage={90} maxval={100} color="#4B56AE" />
                <MysubProgressbar title="Concepts cleared" maxval={100} value={90} color="#F3722C" />
            </div>
        </div>
    </div>
);

export default Mysubjectstop;
