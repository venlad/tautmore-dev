import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { chevRight } from '../../../assets/icons/IconList';

const Button = ({ content, link }) => (
    <Link to={link}>
        <button type="button" className="button-common">
            {content}
            <span>{chevRight}</span>
        </button>
    </Link>
);

Button.propTypes = {
    content: string.isRequired,
    link: string,
};

Button.defaultProps = {
    link: '/',
};
export default Button;
