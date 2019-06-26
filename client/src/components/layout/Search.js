import React, { Fragment } from 'react';

const Search = () => {
  return (
    <Fragment>
      <form className='search' action=''>
        <input type='search' placeholder='Find a mentor...' required />
        <button type='submit'>Search</button>
      </form>
    </Fragment>
  );
};

export default Search;
