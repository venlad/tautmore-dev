import React from 'react';
import classesList from '../../mockData/MyClassesList';
import MyClassesListCommon from './MyClassesListCommomn';

const MyClassesList = () => (
    <div className="myexam-examlist">
        {classesList.map((data) => (
            <div>
                {data?.data?.map((val) => (
                    <MyClassesListCommon val={val} key={val.key}  />
                ))}
            </div>
        ))}
    </div>
);

export default MyClassesList;
