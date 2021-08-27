import React from 'react';
import  { string } from 'prop-types';

const Mydetailsinput = ({ label, type, btncontent }) => (
    <div className="col-md-6 mydetail-input">
        <div className="mydetail-input-part">
            <label htmlFor="detail-label">{label}</label>
            <input type={type} /> {btncontent && <button type="button">{btncontent}</button>}
        </div>
    </div>
);

Mydetailsinput.propTypes = {

    label: string.isRequired,
    type: string.isRequired,
    btncontent: string.isRequired,
};

export default Mydetailsinput;
