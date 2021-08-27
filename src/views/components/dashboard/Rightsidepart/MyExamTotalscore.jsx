import React from 'react';
import MysubProgressbar from './MysubProgressbar';
// import myexamtotalscorebg from '../../../../assets/images/myexamtotalscorebg.png';
import handgesture from '../../../../assets/images/hand-gesture.png';

const MyExamTotalscore = () => (
    <div className="mysubject-top myexam-totalscore-top row">
        <div className="col-md-4 total-score-left-part">
            <div className="total-score-left row">
                <div className="col-md-4 col-4">
                    <img src={handgesture} alt="hand_gesture" />
                </div>
                <div className="col-md-8 col-8">
                    <p>Total score</p>
                    <h5>570 points</h5>
                </div>
            </div>
        </div>
        <div className="col-md-8 col-12 total-score-right-part">
            <div className="row">
                <MysubProgressbar title="Total accuracy" maxval={100} percentage={90} color="#4B56AE" />
                <MysubProgressbar title="Answered questions" value={90} maxval={100} color="#F3722C" />
                <MysubProgressbar title="Total time spent " maxval={60} time={15} color="#43AA8B" />
            </div>
        </div>
    </div>
);

export default MyExamTotalscore;
