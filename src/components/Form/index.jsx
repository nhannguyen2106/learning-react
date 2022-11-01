import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Form = (props) => {
  return (
    <form className="addTaskForm">
      <div className="row-item">
        <label for="title">Title</label>
        <input type="text" placeholder="Place holder"></input>
      </div>
      <div className="row-item">
        <label for="creator">Creator</label>
        <input type="text" placeholder="Name of Creator"></input>
      </div>
      <div className="row-item">
        <label for="description">Description</label>
        <input type="text" placeholder="Description Details"></input>
      </div>
      <div className="btn">
        <button type="button" className="saveBtn" onClick={props.onClick}>
          Save
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {};

export default Form;
