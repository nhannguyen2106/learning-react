import React from "react";
import PropTypes from "prop-types";

Search.propTypes = {};

function Search(props) {
  return (
    <div className="search-form">
      <form className="search-area">
        <input
          type="text"
          className="search"
          placeholder="Type something to search"
        ></input>
        <button type="button" className="searchBtn">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
