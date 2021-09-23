import React, { useState } from 'react';
import  { array, string } from 'prop-types';
import { chevDown } from '../../../../assets/icons/IconList';

const Coursedetaildropdown = ({ label, data }) => {
    const [select, setSelect] = useState([data[0].title]);
    const [show, setShow] = useState(false);

    return (
        <div className="col-md-6 course-detail-select">
            <label htmlFor="course-label">{label}</label>
            <div className="dropdown-main">
                <div
                    className="select"
                    onClick={() => setShow(!show)}
                    aria-hidden="true"

                >
                    {select} {chevDown}
                </div>
                <div className={`dropdown ${show}`}>
                    {data.map((val) => (
                        <div
                            key={val.title}
                            onClick={() => {
                                setSelect(val.title);
                                setShow(false);
                            }}
                            aria-hidden="true"

                        >
                            {val.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Coursedetaildropdown.propTypes = {
    data: array.isRequired,
    label: string.isRequired,
};

export default Coursedetaildropdown;
