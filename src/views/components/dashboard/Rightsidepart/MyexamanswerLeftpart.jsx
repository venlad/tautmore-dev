import { object } from 'prop-types';
import React from 'react';
import myexamans1 from '../../../../assets/images/myexamans1.png';
import myexamans2 from '../../../../assets/images/myexamans2.png';
import myexamans3 from '../../../../assets/images/myexamans3.png';
import myexamans4 from '../../../../assets/images/myexamans4.png';
import myexamans5 from '../../../../assets/images/myexamans5.png';
import myexamans6 from '../../../../assets/images/myexamans6.png';
import { formatDateTime } from '../../../../helpers/utility';

const MyexamanswerLeftpart = ({ myReportData }) => (
    <div className="myexam-answer-left">
        {/* {leftpart.map((data) => ( */}
        <div className="row Olympiad test on">
            <div className="col-md-3 myexam-answer-sub-left">
                <img src={myexamans1} alt="" />
            </div>
            <div className="col-md-9 myexam-answer-sub-right">
                <p>Olympiad test on</p>
                <h5>{myReportData?.data?.examInfo?.name}</h5>
            </div>
        </div>
        <div className="row Olympiad test on">
            <div className="col-md-3 myexam-answer-sub-left">
                <img src={myexamans2} alt="" />
            </div>
            <div className="col-md-9 myexam-answer-sub-right">
                <p>Total score</p>
                <h5>{myReportData?.data?.marksObtained} Points</h5>
            </div>
        </div>
        <div className="row Olympiad test on">
            <div className="col-md-3 myexam-answer-sub-left">
                <img src={myexamans3} alt="" />
            </div>
            <div className="col-md-9 myexam-answer-sub-right">
                <p>Date & time</p>
                <h5>{formatDateTime(myReportData?.data?.completedOn)}</h5>
            </div>
        </div>
        <div className="row Olympiad test on">
            <div className="col-md-3 myexam-answer-sub-left">
                <img src={myexamans4} alt="" />
            </div>
            <div className="col-md-9 myexam-answer-sub-right">
                <p>Time taken</p>
                <h5>{myReportData?.data?.timeTakenInSecs}</h5>
            </div>
        </div>
        <div className="row Olympiad test on">
            <div className="col-md-3 myexam-answer-sub-left">
                <img src={myexamans5} alt="" />
            </div>
            <div className="col-md-9 myexam-answer-sub-right">
                <p>Accuracy</p>
                <h5>{myReportData?.data?.accuracy} %</h5>
            </div>
        </div>
        <div className="row Olympiad test on">
            <div className="col-md-3 myexam-answer-sub-left">
                <img src={myexamans6} alt="" />
            </div>
            <div className="col-md-9 myexam-answer-sub-right">
                <p>Right answers</p>
                <h5>
                    {myReportData?.data?.rightAnswers} out of {myReportData?.data
                        ?.questionDetails.length}
                </h5>
            </div>
        </div>
        {/* ))} */}
    </div>
);
MyexamanswerLeftpart.propTypes = {
    myReportData: object.isRequired,
};
export default MyexamanswerLeftpart;
