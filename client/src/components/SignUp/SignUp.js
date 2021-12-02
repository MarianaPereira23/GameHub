import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.children[0].children[0].value, e.target.children[1].children[0].value);
    console.log(e.target.children[2].children[0].value, e.target.children[3].children[0].value);
  }

  return (
    <>
      <h2 className="page-content__join-title">Sign Up</h2>
      <form className="page-content__join-form" onSubmit={handleSubmit}>
        <label className="join-form__label">
          Username
          <input className="join-form__input" type="text" placeholder="Username" required />
        </label>
        <label className="join-form__label">
          Email
          <input className="join-form__input" type="email" placeholder="example@email.com" required />
        </label>
        <label className="join-form__label">
          Password
          <input className="join-form__input" type="password" placeholder="Password" required />
        </label>
        <label className="join-form__label">
          Confirm Password
          <input className="join-form__input" type="password" placeholder="Confirm Password" required />
        </label>
        <button className="join-form__button" type="submit">Sign Up</button>
      </form>
      <p className="page-content__sign-in">Already a member? <Link className="sign-in__link" to='/login'>Login</Link></p>
    </>
  );
};

export default SignUp;
