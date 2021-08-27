import React from 'react';
import { string } from 'prop-types';

const GivegiftBlock = ({ icon, content, className }) => (
    <div className={`gift-common row ${className}`}>
        <div className="col-sm-1 col-2">
            <div className="icon">{icon}</div>
        </div>
        <div className="col-sm-11 col-10">
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
