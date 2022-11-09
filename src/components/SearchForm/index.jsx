import React, { useState } from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";

const SearchForm = ({ setSearchValue }) => {
  const [searchInput, setSearchInput] = useState();
  const handleSearch = () => {
    setSearchValue(searchInput);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleSearch();
    }
  };

  return (
    <div>
      <InputText
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        inputPlaceholder={"Type something to search"}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
