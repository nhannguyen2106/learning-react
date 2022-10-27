import React from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

pagination.propTypes = {};

function pagination(props) {
  return (
    <div class="pagination">
      <a href="#" className="arrow">
        <FaChevronLeft className="arrow-icon" />
      </a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#" className="arrow">
        <FaChevronRight className="arrow-icon" />
      </a>
    </div>
  );
}

export default pagination;
