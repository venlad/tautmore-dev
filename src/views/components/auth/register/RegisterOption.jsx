import React from 'react';
import { func, string } from 'prop-types';

const RegisterOption = ({ icon, title }) => (
    <div className="option-common">
        {icon}
        <p>{title}</p>
    </div>
);

RegisterOption.propTypes = {
    icon: func.isRequired,
    title: string.isRequired,
};

export default RegisterOption;
