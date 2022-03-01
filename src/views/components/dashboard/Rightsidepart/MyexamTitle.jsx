import React from 'react';
import {
    string, bool, array, func, object,
} from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import exam from '../../../../assets/images/exam.png';
// import { object } from 'yup';
// import { allsubject } from '../mockData/MyexamExamlist';

const MyexamTitle = ({
    title, select, subjectList, setSubdata, subdata,
}) => {
    const changeSubject = (val) => {
        console.log('subjectList', val);
        setSubdata(val);
    };
    return (
        <div className="row myexam-title">

            <div className="col-sm-8 col-10 myexam-title-center">
                <span className="myexam-title-left"><img src={exam} alt="exam" /></span> <h3>{title}</h3>
            </div>
            { select
        && (
            <div className="col-sm-4 col-12 myexam-title-last">

                <Dropdown>

                    <Dropdown.Toggle>
                        {subdata?.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            key="All"
                            onClick={() => changeSubject({ _id: '', name: 'All Subject' })}
                        >
                            All Subject
                        </Dropdown.Item>
                        {subjectList?.map((data) => (
                            <Dropdown.Item
                                key={data?.subject?._id}
                                onClick={() => changeSubject(data?.subject)}
                            >
                                {data?.subject?.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>

                </Dropdown>
            </div>
        )}

        </div>
    );
};

MyexamTitle.propTypes = {
    title: string.isRequired,
    select: bool,
    subjectList: array.isRequired,
    subdata: object.isRequired,
    setSubdata: func.isRequired,
};

MyexamTitle.defaultProps = {
    select: false,
};
const mapStateToProps = (state) => ({
    subjectList: state.Auth.Login?.data?.subjectsEnrolled,
});
export default connect(mapStateToProps)(MyexamTitle);
