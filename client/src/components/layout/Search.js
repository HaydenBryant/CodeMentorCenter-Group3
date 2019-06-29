import React, { Fragment } from "react";

const Search = () => {
  return (
    <Fragment>
      <form className="search" action="">
        <input
          id="findPLanguage"
          type="search"
          placeholder="Search programming languages..."
          required
        />
        <button type="submit" onclick="findPLanguage()">
          Search
        </button>
      </form>
      <div id="displaySearchResults">~~~display search results here~~~</div>
    </Fragment>
  );
};

export default Search;
