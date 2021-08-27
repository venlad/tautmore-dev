import React from 'react';
import {  string } from 'prop-types';

const ReportChild = ({
    title, desc, noteblue, bagblue,
}) => (
    <div className="row">
        <div className="col-md-12">
            <div className="report-child">
                <div className="icon">
                    {
                        noteblue && <img src={noteblue} alt="note" />
                    }

                    {
                        bagblue && <img src={bagblue} alt="note" />
                    }
                </div>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    </div>
);

ReportChild.propTypes = {
    title: string.isRequired,
    desc: string.isRequired,
    noteblue: string,
    bagblue: string,
};

ReportChild.defaultProps = {
    bagblue: '',
    noteblue: '',
};

export default ReportChild;
