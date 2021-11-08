import React from 'react';
import { func, string } from 'prop-types';

const RegisterOption = ({
    icon, title, setUserType, userType,
}) => {
    const selectReg = () => {
        setUserType(title);
    };
    return (
        <div className={`option-common ${userType === title ? 'active' : ''}`} onClick={selectReg} aria-hidden="true">
            {icon}
            <p>{title}</p>
        </div>
    );
};

RegisterOption.propTypes = {
    icon: func.isRequired,
    title: string.isRequired,
    setUserType: func.isRequired,
    userType: string.isRequired,
};

export default RegisterOption;
