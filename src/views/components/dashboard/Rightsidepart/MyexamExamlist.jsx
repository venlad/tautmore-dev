import { object, string } from 'prop-types';

import React from 'react';
// import { examlist } from '../mockData/MyexamExamlist';
import MyexamExamlistcommon from './MyexamExamlistcommon';

const MyexamExamlist = ({ previousexamData, setStartExam }) => (
    // console.log('previousexamData', previousexamData);
    <div className="myexam-examlist">
        {/* {examlist.map((data) => (
                <div key={data.title}>
                    <div className="examlist-title">
                        <h4>{data.title}</h4>
                    </div>
                    {data?.data?.map((val) => (
                        <MyexamExamlistcommon val={val} key={val.key}  />
                    ))}
                </div>
            ))} */}
        <div className="examlist-title">
            <h4>Exam list</h4>
        </div>
        {/* {console.log('previousexamData@@@@@', previousexamData?.data[0]?.response)} */}
        {previousexamData?.data && previousexamData?.data[0]?.response?.map((item) => (
            <MyexamExamlistcommon val={item} key={item?._id} setStartExam={setStartExam}  />
        ))}
    </div>
);
MyexamExamlist.propTypes = {
    previousexamData: object.isRequired,
    setStartExam: string.isRequired,
};
export default MyexamExamlist;
