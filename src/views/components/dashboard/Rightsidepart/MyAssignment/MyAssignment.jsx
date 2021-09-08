import React from 'react'
import MyAssignmentTitle from '../MyexamTitle';

 import MyAssignmentCommon from './MyAssignmentCommon';
 import MyAssignmentTab from '../MyexamTab';
// import MyExamTotalscore from './MyExamTotalscore';
 import MyAssignmentList from './MyAssignmentList';
import { chevRight } from '../../../../../assets/icons/IconList';

const MyAssignment = () => {
    return (
        <div className="myexam-main">
            <MyAssignmentTitle title="My pending assignments - 3" select />
        <div className="row">
            <div className="col-md-4 myexam-main-common-left">
                <MyAssignmentCommon topic="Algebra" date="20 Oct 2020" time="23:59" student={15} />
            </div>
            <div className="col-md-4 myexam-main-common-right">
                <MyAssignmentCommon topic="Algebra" date="20 Oct 2020" time="23:59" student={15} />
            </div> 
            <div className="col-md-4 myexam-main-common-right">
                <MyAssignmentCommon topic="Algebra" date="20 Oct 2020" time="23:59" student={15} />
            </div> 
        </div>
        {/* <div className="subscribe-for-more-exam">
            <button type="button">Subcribe for more exams <span>{chevRight}</span></button>
        </div>
        <MyAssignmentTitle title="completed assignment history" />
        <MyAssignmentTab />
        {/* <MyexamTab /> */}
        {/* <MyExamTotalscore /> */}
        <MyAssignmentList /> 
        {/* {/* <MyAssignmentTitle /> */}
        </div>
        
    )
}

export default MyAssignment
