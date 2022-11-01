import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  // const [title, setTitle] = useState("");
  // const [author, setauthor] = useState("");
  // const [description, setDescription] = useState("");

  const todoList = [];
  let initID = 0;
  localStorage.setItem("todoList", JSON.stringify(todoList));

  const [formValue, setFormValue] = useState({
    id: uuidv4(),
    title: "",
    author: "",
    description: "",
  });
  const [error, setError] = useState(false);

  const handleOnChangeField = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateNewTask = (e) => {
    e.preventDefault();

    if (
      formValue.title.length == 0 ||
      formValue.author.length == 0 ||
      formValue.description.length == 0
    ) {
      setError(true);
      return;
    }
    todoList.push(formValue);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    props.onClick();
  };

  return (
    <form className="addTaskForm" onSubmit={handleCreateNewTask}>
      <div className="row-item">
        <label for="title">Title</label>
        <div className="input-area">
          <input
            type="text"
            placeholder="Place holder"
            name="title"
            value={formValue.title}
            onChange={handleOnChangeField}
          ></input>
          {error && formValue.title.length <= 0 ? (
            <div className="error">Title is required</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="row-item">
        <label for="author">Creator</label>
        <div className="input-area">
          <input
            type="text"
            placeholder="Name of Creator"
            name="author"
            value={formValue.author}
            onChange={handleOnChangeField}
          ></input>
          {error && formValue.author.length <= 0 ? (
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
            name="description"
            value={formValue.description}
            onChange={handleOnChangeField}
          ></input>
          {error && formValue.description.length <= 0 ? (
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
