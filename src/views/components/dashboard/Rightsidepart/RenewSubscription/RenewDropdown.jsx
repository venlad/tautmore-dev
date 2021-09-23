import React, { useState } from 'react';
import  { array, string } from 'prop-types';
import { chevDown } from '../../../../../assets/icons/IconList';

const RenewDropdown = ({ label, data }) => {
    const [select, setSelect] = useState([data[0].title]);
    const [show, setShow] = useState(false);

    const selectValue = () => {
        setShow(!show);
    };

    return (
        <div className="dropdown-common">
            <label htmlFor="course-label">{label}</label>
            <div className="dropdown-main">
                <div
                    className="select"
                    onClick={selectValue}
                    aria-hidden="true"
                >
                    { data[0].image && <img src={data[0].image} alt="img" />} {select} {chevDown}
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
                            { val.image && <img src={val.image} alt={val.title} /> } {val.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

RenewDropdown.propTypes = {
    data: array.isRequired,
    label: string.isRequired,
};

export default RenewDropdown;
