import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ text }) => {
  return <button className="btn">{text}</button>;
};

Button.propTypes = {};

export default Button;
