import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

Todo.propTypes = {};

function Todo(props) {
  const { id, title, creator, description, status } = props.item;

  return (
    <div className="todo-cards">
      <div className="todo-body">
        <div className="todo-info">
          <h5 className="title">Title: {title}</h5>
          <p className="author">Creator: {creator}</p>
          <p className={status}>Status: {status}</p>
        </div>
        <div className="todo-description">
          <h5 className="description">Description: </h5>
          <p>{description}</p>
        </div>

        <div className="statusBtn">
          <select onChange={(e) => props.handleChangeStatus(e, id)}>
            <option value="New">New</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
            <FaChevronDown className="arrow-icon" />
          </select>
        </div>
      </div>
    </div>
  );
}

export default Todo;
