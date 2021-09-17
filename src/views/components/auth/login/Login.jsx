import React, { useState } from 'react';
import './login.scss';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../../../assets/images/Logo.png';
import { eye, noteye, chevRight } from '../../../../assets/icons/IconList';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showpass, setShowpass] = useState(false);
    // const [successMsg, setSuccessMsg] = useState('');

    const handleEmailChange = (e) => {
        // setSuccessMsg('');
        setEmailError('');
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        // setSuccessMsg('');
        setPasswordError('');
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (email !== '') {
            if (emailRegex.test(email)) {
                setEmailError('');
            } else {
                setEmailError('Invalid Email');
            }
        } else {
            setEmailError('Please enter your email / username`');
        }

        if (password !== '') {
            if (passRegex.test(password)) {
                setPasswordError('');
            } else {
                setPasswordError('Invalid password');
            }
        } else {
            setPasswordError('Please enter your password');
        }

        if (emailRegex.test(email) && passRegex.test(password)) {
            // setSuccessMsg('login success');
            history.push('/dashboard');
        }
    };

    return (
        <div className="login-page">

            <div className="login-main">
                <div className="login-head text-center">
                    <img src={Logo} alt="logo" />
                    <h3>Login</h3>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="email">Email or username*
                        <input type="text" onChange={handleEmailChange} value={email} className={`${emailError && 'error'}`} />
                    </label>
                    {emailError && <p className="error-msg"><span><b>!</b></span>{emailError}</p>}
                    <label htmlFor="email" className="password-label">Password*
                        <input type={`${showpass ? 'text' : 'password'}`} onChange={handlePasswordChange} value={password} className={`${emailError && 'error'}`} />
                        <button type="button" onClick={() => setShowpass(!showpass)}>{ showpass ? noteye : eye}</button>
                    </label>
                    {passwordError && <p className="error-msg"><span><b>!</b></span>{passwordError}</p>}
                    <div className="row remember-forgot">
                        <div className="col-sm-6 col-xs-12">
                            <label htmlFor="remember">Remember me
                                <input type="checkbox" id="remember" />
                                <span className="checkmark" />
                            </label>
                        </div>
                        <div className="col-sm-6 col-xs-12 text-right">
                            <a className="green" href="#forgot">Forgot password?</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" value="Login" className="submit-btn">Login <span>{chevRight}</span></button>
                        <p className="not-register">Not registered yet?<Link to="/register" className="green"> Create an account</Link></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;
