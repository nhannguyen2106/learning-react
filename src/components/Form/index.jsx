import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleOnSave = (e) => {
    e.preventDefault();
    if (title.length == 0 || creator.length == 0 || description.length == 0) {
      setError(true);
      return;
    }
    props.onClick();
  };

  return (
    <form className="addTaskForm" onSubmit={handleOnSave}>
      <div className="row-item">
        <label for="title">Title</label>
        <div className="input-area">
          <input
            type="text"
            placeholder="Place holder"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          {error && title.length <= 0 ? (
            <div className="error">Title is required</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="row-item">
        <label for="creator">Creator</label>
        <div className="input-area">
          <input
            type="text"
            placeholder="Name of Creator"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          ></input>
          {error && creator.length <= 0 ? (
            <div className="error">Creator is required</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="row-item">
        <label for="description">Description</label>
        <div className="input-area">
          <input
            type="text"
            placeholder="Description Details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          {error && description.length <= 0 ? (
            <div className="error">Description is required</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="btn">
        <button type="submit" className="saveBtn">
          Save
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {};

export default Form;
