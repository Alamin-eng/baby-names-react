import React from "react";

const Search = ({ searchInput, setSearchInput }) => {
  // handle search
  //  function handleSearch(event) {
  //   setSearchInput(event.target.value);
  // } 

  return (
    <div className="m-4">
      <form>
        <input
          type="text"
          id="babyName"
          className="search-input"
          placeholder="Search for a name"
          value={searchInput}
          onChange={setSearchInput} 
        /> 
      </form>
    </div>
  );
};
export default Search;
