import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchForm.css'

const SearchForm = () => {
  return (
    <form className="search-bar">
      <button type="submit" className="search-bar__submit-button">
        <FontAwesomeIcon icon={faSearch} className="submit-button__icon" />
      </button>
      <input type="text" className="search-bar__input-field" placeholder="Search game..." />
    </form>
  );
};

export default SearchForm;
