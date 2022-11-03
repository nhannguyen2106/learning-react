import React from "react";
import { TextareaAutosize } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { STATUS } from "../../constant";
import InputText from "../common/InputText";
import { Link, useNavigate } from "react-router-dom";

import "./styles.scss";

const FormCreate = (props) => {
  // const [title, setTitle] = useState("");
  // const [author, setauthor] = useState("");
  // const [description, setDescription] = useState("");

  const todoList = [];

  const [formValue, setFormValue] = useState({
    id: uuidv4(),
    title: "",
    author: "",
    desc: "",
    status: STATUS.NEW,
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChangeField = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateTask = (e) => {
    e.preventDefault();

    let data = JSON.parse(localStorage.getItem("todoList"));
    // Get all values
    data.push(formValue);
    localStorage.setItem("todoList", JSON.stringify(data));
    navigate("/home");
  };

  return (
    <form className="form" onSubmit={handleCreateTask}>
      <label htmlFor="title">Title: </label>
      <InputText
        inputName="title"
        inputValue={formValue.title}
        onHandleChange={handleChangeField}
      />
      <label htmlFor="author">Author: </label>
      <InputText
        inputName="author"
        inputValue={formValue.author}
        onHandleChange={handleChangeField}
      />
      <label htmlFor="description">Description: </label>
      <TextareaAutosize
        className="form__desc"
        aria-label="minimum height"
        minRows={3}
        name="desc"
        placeholder="Minimum 3 rows"
        value={formValue.desc}
        style={{ width: 200 }}
        onChange={handleChangeField}
      />
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

      <button type="submit">Save</button>
    </form>
  );
};

FormCreate.propTypes = {};

export default FormCreate;
