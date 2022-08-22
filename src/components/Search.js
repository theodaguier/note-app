import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <div className="search-bar">
      <BsSearch className="search-icon" size="1.3em" />
      <input type="text" placeholder="Taper pour chercher..." />
    </div>
  );
};

export default Search;
