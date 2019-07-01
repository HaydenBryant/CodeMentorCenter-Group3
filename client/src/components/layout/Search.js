import React, { Fragment } from "react";
import ProfileCard from "./ProfileCard";
import ProfileCardTest2 from "./ProfileCardTest2";

const Search = () => {
  return (
    <Fragment>
      <form className="search" action="">
        <input type="search" placeholder="Find a mentor..." required />
        <button type="submit">Search</button>
      </form>
      <div className="displaySearchedProfiles">
        <ProfileCard />
        <ProfileCardTest2 />
      </div>
    </Fragment>
  );
};

export default Search;
