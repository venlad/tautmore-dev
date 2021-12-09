import React, { useState } from 'react';
import { string, bool } from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import exam from '../../../../assets/images/exam.png';
import { allsubject } from '../mockData/MyexamExamlist';

const MyexamTitle = ({ title, select }) => {
    const [subdata, setSubdata] = useState(allsubject[0]);
    const changeSubject = (val) => {
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
                        {subdata}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {allsubject.map((data) => (
                            <Dropdown.Item key={data} onClick={() => changeSubject(data)}>
                                {data}
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
};

MyexamTitle.defaultProps = {
    select: false,
};

export default MyexamTitle;
