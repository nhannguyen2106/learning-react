import React from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";

const SearchForm = (props) => {
  return (
    <div>
      <InputText inputPlaceholder={"Type something to search"} />
      <Button text={"Search"} />
    </div>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
