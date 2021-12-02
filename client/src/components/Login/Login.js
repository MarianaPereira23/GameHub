import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';


const Login = () => {
  const handleSubmit = async e => {
    e.preventDefault();

    const user = {
      email: e.target.children[0].children[0].value,
      password: e.target.children[1].children[0].value
    };
    
    await axios.post('http://localhost:5000/users/login', user);
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
