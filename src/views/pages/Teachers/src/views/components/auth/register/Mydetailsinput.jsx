import React from 'react';
import  { string, func } from 'prop-types';

const Mydetailsinput = ({
    label, type, btncontent, name, id, value, setValue,
}) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className="mydetail-input-part">
            <label htmlFor="detail-label">{label}</label>
            <input type={type} name={name} id={id} value={value} onChange={handleChange} /> {btncontent && <button type="button">{btncontent}</button>}
        </div>

    );
};

Mydetailsinput.propTypes = {
    label: string.isRequired,
    type: string.isRequired,
    btncontent: string.isRequired,
    name: string.isRequired,
    id: string.isRequired,
    value: string.isRequired,
    setValue: func.isRequired,
};

export default Mydetailsinput;
