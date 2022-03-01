import React from 'react';
import { object } from 'prop-types';
import MysubProgressbar from './MysubProgressbar';
// import myexamtotalscorebg from '../../../../assets/images/myexamtotalscorebg.png';
import handgesture from '../../../../assets/images/hand-gesture.png';
import { formatTimeSectoMin } from '../../../../helpers/utility';

const MyExamTotalscore = ({ previousexamData }) => (
    <div className="mysubject-top myexam-totalscore-top row">
        <div className="col-md-4 total-score-left-part">
            <div className="total-score-left row">
                <div className="col-md-4 col-4">
                    <img src={handgesture} alt="hand_gesture" />
                </div>
                <div className="col-md-8 col-8">
                    <p>Total score</p>
                    <h5>
                        {previousexamData?.data.length > 0
                         && previousexamData?.data[0]?.summary[0]?.totalMarksObtained} points
                    </h5>
                    {console.log('previousexamData?.data?.summary', previousexamData?.data[0]?.summary[0]?.totalMarksObtained)}
                </div>
            </div>
        </div>
        <div className="col-md-8 col-12 total-score-right-part">
            <div className="row">
                <MysubProgressbar title="Total accuracy" maxval={100} percentage={Math.floor(previousexamData?.data[0]?.summary[0]?.avgAccuracy)} color="#4B56AE" />
                <MysubProgressbar title="Answered questions" value={previousexamData?.data[0]?.summary[0]?.totalRightAnswers} maxval={previousexamData?.data[0]?.summary[0]?.totalAnsweredQuestions} color="#F3722C" />
                <MysubProgressbar title="Total time spent " maxval={60} time={formatTimeSectoMin(previousexamData?.data[0]?.summary[0]?.totaltimeTakenInSecs)} color="#43AA8B" />
            </div>
        </div>
    </div>
);
MyExamTotalscore.propTypes = {
    previousexamData: object.isRequired,
};

export default MyExamTotalscore;
