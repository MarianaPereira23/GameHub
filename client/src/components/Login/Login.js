import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.children[0].children[0].value, e.target.children[1].children[0].value);
  }

  return (
    <>
      <h2 className="page-content__login-title">Login</h2>
      <form className="page-content__login-form" onSubmit={handleSubmit}>
        <label className="login-form__label">
          Email
          <input className="login-form__input" type="email" placeholder="example@email.com" required />
        </label>
        <label className="login-form__label">
          Password
          <input className="login-form__input" type="password" placeholder="Password" required />
        </label>
        <button className="login-form__button" type="submit">Login</button>
      </form>
      <p className="page-content__sign-up">Not a member? <Link className="sign-up__link" to='/join'>Sign up</Link></p>
    </>
  );
};

export default Login;
