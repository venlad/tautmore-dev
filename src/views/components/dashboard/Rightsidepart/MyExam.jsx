import React from 'react';

import MyexamTitle from './MyexamTitle';
import MyexamCommon from './MyexamCommon';
import MyexamTab from './MyexamTab';
import MyExamTotalscore from './MyExamTotalscore';
import MyexamExamlist from './MyexamExamlist';
import { chevRight } from '../../../../assets/icons/IconList';

const MyExam = () => (
    <div className="myexam-main">
        <MyexamTitle title="Upcoming exams" select />
        <div className="row">
            <div className="col-md-6 myexam-main-common-left">
                <MyexamCommon subject="Mathematics" date="20 Oct 2020" time="23:59" student={15} />
            </div>
            <div className="col-md-6 myexam-main-common-right">
                <MyexamCommon subject="English" date="20 Oct 2020" time="23:59" student={15} />
            </div>
        </div>
        <div className="subscribe-for-more-exam">
            <button type="button">Subcribe for more exams <span>{chevRight}</span></button>
        </div>
        <MyexamTitle title="Previous exams history" />
        <MyexamTab />
        <MyExamTotalscore />
        <MyexamExamlist />
    </div>
);

export default MyExam;
