import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import SearchForm from "../../components/SearchForm";

import "./styles.scss";

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/add-new">
        <Button text={"Create New Task"} />
      </Link>
      <SearchForm />
    </header>
  );
};

Header.propTypes = {};

export default Header;
