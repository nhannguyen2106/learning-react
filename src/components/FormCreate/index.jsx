import React from "react";
import { TextareaAutosize } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { STATUS } from "../../constant";
import InputText from "../common/InputText";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

const FormCreate = (props) => {
  const todoList = [];

  const [formValue, setFormValue] = useState({
    id: uuidv4(),
    title: "",
    author: "",
    desc: "",
    status: STATUS.NEW,
  });

  const [errorDuplicate, setErrorDuplicate] = useState(false);
  const [errorValidate, setErrorValidate] = useState(false);
  const navigate = useNavigate();

  const data = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];

  const handleChangeField = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const isDuplicate = () => {
    return data.some(function (item) {
      return item.title === formValue.title;
    });
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (isDuplicate()) {
      setErrorDuplicate(true);
      return;
    }

    if (
      formValue.title.length == 0 ||
      formValue.author.length == 0 ||
      formValue.desc.length == 0
    ) {
      setErrorValidate(true);
      return;
    }

    // Get all values
    data.push(formValue);

    localStorage.setItem("todoList", JSON.stringify(data));
    navigate("/home");
  };

  return (
    <form className="form" onSubmit={handleCreateTask}>
      <div className="form__item">
        <label htmlFor="title">Title: </label>
        <div className="form__inputArea">
          <input
            type="text"
            name="title"
            value={formValue.title}
            onChange={handleChangeField}
          />
          {errorDuplicate ? <p>Title is duplicate</p> : ""}
          {errorValidate && formValue.title.length <= 0 ? (
            <p>Title is required</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form__item">
        <label htmlFor="author">Author: </label>
        <div className="form__inputArea">
          <input
            type="text"
            name="author"
            value={formValue.author}
            onChange={handleChangeField}
          />
          {errorValidate && formValue.author.length <= 0 ? (
            <p>Author is required</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form__item">
        <label htmlFor="description">Description: </label>
        <div className="form__inputArea">
          <TextareaAutosize
            className="form__desc"
            aria-label="minimum height"
            minRows={3}
            name="desc"
            placeholder="Minimum 3 rows"
            style={{ width: 300 }}
            value={formValue.desc}
            onChange={handleChangeField}
          />
          {errorValidate && formValue.desc.length <= 0 ? (
            <p>Description is required</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form__item">
        <label htmlFor="status">Status: </label>
        <select
          className="form__select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="status"
          value={formValue.status}
          style={{ padding: 5, width: 100 }}
          label="Status"
          onChange={handleChangeField}
        >
          <option value={STATUS.NEW}>{STATUS.NEW}</option>
          <option value={STATUS.DOING}>{STATUS.DOING}</option>
          <option value={STATUS.DONE}>{STATUS.DONE}</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

FormCreate.propTypes = {};

export default FormCreate;
