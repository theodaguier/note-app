import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search-bar">
      <BsSearch className="search-icon" size="1.3em" />
      <input
        onChange={(e) => 
            handleSearchNote(e.target.value)}
        type="text"
        placeholder="Taper pour chercher..."
      />
    </div>
  );
};

export default Search;
