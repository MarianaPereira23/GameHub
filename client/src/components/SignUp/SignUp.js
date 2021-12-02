import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {

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
        <button className="login-form__button" type="submit">Join</button>
      </form>
      <p className="page-content__login">Already a member? <Link className="login__link" to='/login'>Login</Link></p>
    </>
  );
};

export default SignUp;
