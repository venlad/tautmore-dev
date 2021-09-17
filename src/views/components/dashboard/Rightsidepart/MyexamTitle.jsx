import React from 'react';
import { string, bool } from 'prop-types';
import exam from '../../../../assets/images/exam.png';

const MyexamTitle = ({
    title, select, status1, status2,
}) => (
    <div className="row myexam-title">
        {/* <div className="col-sm-1 col-2 myexam-title-left">
            <img src={exam} alt="exam" />
        </div> */}
        <div
            className={`myexam-title-center ${
                status1 && status2 ? 'col-md-6' : 'col-sm-8 col-10'
            }`}
        >
            <span className="myexam-title-left">
                <img src={exam} alt="exam" />
            </span>{' '}
            <h3>{title}</h3>
        </div>
        {select && (
            <div className="col-sm-4 col-12 myexam-title-last">
                <select>
                    <option>All subject - 1</option>
                    <option>All subject - 2</option>
                </select>
            </div>
        )}
        {status1 && status2 && (
            <div className="col-md-6">
                <h5 className="status">
                    <span className="status1">{status1}</span>
                    <span className="status2">{status2}</span>
                </h5>
            </div>
        )}
    </div>
);

MyexamTitle.propTypes = {
    title: string.isRequired,
    select: bool,
    status1: string.isRequired,
    status2: string.isRequired,
};

MyexamTitle.defaultProps = {
    select: false,
};

export default MyexamTitle;
