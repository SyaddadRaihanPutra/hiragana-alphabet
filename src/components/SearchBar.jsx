import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value); // Memanggil fungsi handleSearch dari props
  };

  return (
    <div className="subscription__form">
      {/* <label htmlFor="search" style={{ color: '#fff' }}><RiSearch2Line /></label> */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
