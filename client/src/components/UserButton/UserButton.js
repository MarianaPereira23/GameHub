import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './UserButton.css';

const UserButton = () => {
  return (
    <Link to="/login">
      <button className="page-header__user-button">
        <FontAwesomeIcon icon={faSignInAlt} className="user-button__icon" />
      </button>
    </Link>
  );
};

export default UserButton;
