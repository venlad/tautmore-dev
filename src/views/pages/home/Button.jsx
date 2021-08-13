import React from 'react';
import { string } from 'prop-types';
import { chevRight } from '../../../assets/icons/IconList';

const Button = ({ content }) => (
    <button type="button" className="button-common">
        {content}
        <span>{chevRight}</span>
    </button>
);

Button.propTypes = {
    content: string.isRequired,
};
export default Button;
