import React, { useEffect } from 'react';
import {  func, object, string } from 'prop-types';
import { connect } from 'react-redux';
import MyexamanswerLeftpart from './MyexamanswerLeftpart';
import MyexamanswerRightpart from './MyexamanswerRightpart';
import close from '../../../../assets/images/close.png';
import { myReportAction } from '../../../../stores/MyExam/MyExamAction';

const MyexamAnswer = ({
    setExam, prevExamId, myReport, myReportData,
}) => {
    useEffect(() => {
        myReport({
            examResultId: prevExamId,
        });
    }, [prevExamId]);
    console.log('myReportData', myReportData);
    return (
        <div className="myexam-answer-main-top">
            <div className="close-top">
                <button type="button" className="close-btn" onClick={() => setExam(false)}><img src={close} alt="close" /></button>
            </div>
            <div className="row myexam-answer-main">

                <div className="col-md-4">
                    <MyexamanswerLeftpart
                        myReportData={myReportData}
                    />
                </div>
                <div className="col-md-8">

                    <MyexamanswerRightpart
                        myReportData={myReportData}
                    />
                </div>
            </div>
        </div>
    );
};

MyexamAnswer.propTypes = {
    setExam: func.isRequired,
    prevExamId: string.isRequired,
    myReport: func.isRequired,
    myReportData: object.isRequired,
};
const mapStateToProps = (state) => ({
    myReportData: state.MyExam.myReport,
});
const mapDispatchToProps = (dispatch) => ({
    // upcomingexams: (data) => dispatch(upcomingExamAction(data)),
    myReport: (data) => dispatch(myReportAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyexamAnswer);
