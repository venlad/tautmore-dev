import React from 'react';
import { string } from 'prop-types';

const GivegiftBlock = ({ icon, content, className }) => (
    <div className={`gift-common row ${className}`}>
        <div className="col-md-1">
            <div className="icon">{icon}</div>
        </div>
        <div className="col-md-11">
            <h5>{content}</h5>
        </div>
    </div>
);
GivegiftBlock.propTypes = {
    icon: string.isRequired,
    content: string.isRequired,
    className: string.isRequired,

};
export default GivegiftBlock;
