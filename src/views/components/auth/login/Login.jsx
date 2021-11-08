import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import Logo from '../../../../assets/images/Logo.png';
import { eye, noteye, chevRight } from '../../../../assets/icons/IconList';
import { login } from '../../../../stores/Auth/AuthAction';

const Login = ({ loginAction, loginMessage }) => {
    const [emailval, setEmailval] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordval, setPasswordval] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showpass, setShowpass] = useState(false);

    const handleEmailChange = (e) => {
        setEmailError('');
        setEmailval(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordError('');
        setPasswordval(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (emailval === '') {
            setEmailError('Please enter your email / username`');
        }

        if (passwordval === '') {
            setPasswordError('Please enter your password');
        }

        if (emailval !== '' && passwordval !== '') {
            const data = {
                userName: emailval,
                password: passwordval,
            };
            loginAction(data);
        }
    };

    return (
        <div className="login-page">

            <div className="login-main">
                <div className="login-head text-center">
                    <img src={Logo} alt="logo" />
                    <h3>Login</h3>
                    <p>{loginMessage}</p>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="email">Email or username*
                        <input type="text" onChange={handleEmailChange} value={emailval} className={`${emailError && 'error'}`} />
                    </label>
                    {emailError && <p className="error-msg"><span><b>!</b></span>{emailError}</p>}
                    <label htmlFor="email" className="password-label">Password*
                        <input type={`${showpass ? 'text' : 'password'}`} onChange={handlePasswordChange} value={passwordval} className={`${emailError && 'error'}`} />
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

const mapStateToProps = (state) => ({
    loginMessage: state.Auth.Login.message,
});

const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(login(data)),
});

Login.defaultProps = {
    loginMessage: '',
};

Login.propTypes = {
    loginAction: func.isRequired,
    loginMessage: string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
