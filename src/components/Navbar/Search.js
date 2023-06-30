import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/query?search=${searchTerm}`);
    }
  };

  return (
    <div className="searchBar">
      <button onClick={handleSearch}>
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
