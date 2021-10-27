import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ searchText, setSearchText, handleCitySearch }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button type="submit" onClick={handleCitySearch}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  handleCitySearch: PropTypes.func.isRequired,
};
