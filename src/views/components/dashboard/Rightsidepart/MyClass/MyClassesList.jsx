import React from 'react';
import { array } from 'prop-types';
// import classesList from '../../mockData/MyClassesList';
import MyClassesListCommon from './MyClassesListCommomn';

const MyClassesList = ({ classHistory }) => (
    <div className="myexam-examlist">
        <div>
            {classHistory?.map((val) => (
                <MyClassesListCommon val={val} key={val.key}  />
            ))}
        </div>
    </div>
);

MyClassesList.propTypes = {
    classHistory: array.isRequired,
};

export default MyClassesList;
