import React from 'react';
import { string, bool } from 'prop-types';
import exam from '../../../../assets/images/exam.png';

const MyexamTitle = ({ title, select }) => (
    <div className="row myexam-title">
        {/* <div className="col-sm-1 col-2 myexam-title-left">
            <img src={exam} alt="exam" />
        </div> */}
        <div className="col-sm-8 col-10 myexam-title-center">
            <span className="myexam-title-left"><img src={exam} alt="exam" /></span> <h3>{title}</h3>
        </div>
        { select
        && (
            <div className="col-sm-4 col-12 myexam-title-last">
                <select>
                    <option>All subject - 1</option>
                    <option>All subject - 2</option>
                </select>
            </div>
        )}
    </div>
);

MyexamTitle.propTypes = {
    title: string.isRequired,
    select: bool,
};

MyexamTitle.defaultProps = {
    select: false,
};

export default MyexamTitle;
