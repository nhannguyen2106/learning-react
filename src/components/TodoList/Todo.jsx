import React from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

Todo.propTypes = {};

function Todo(props) {
  return (
    <div className="todo-cards">
      <div className="todo-body">
        <div className="todo-info">
          <h5 className="title">Title: {props.title}</h5>
          <p className="author">Creator: {props.author}</p>
          <p className={props.status}>Status: {props.status}</p>
        </div>
        <div className="todo-description">
          <h5 className="description">Description: </h5>
          <p>{props.description}</p>
        </div>
        <div className="statusBtn">
          <button>
            {props.status}
            <FaChevronDown className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
