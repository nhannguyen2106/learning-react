import React, { useState } from "react";
import PropTypes from "prop-types";
import "../FormCreate/styles.scss";
import { useNavigate, useParams } from "react-router-dom";
import { STATUS } from "../../constant";

const FormUpdate = (props) => {
  const data = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];

  const { itemIndex } = useParams();

  const [errorUpdateValidate, setErrorUpdateValidate] = useState(false);
  const [formUpdate, setFormUpdate] = useState({
    title: data[itemIndex].title,
    author: data[itemIndex].author,
    desc: data[itemIndex].desc,
    status: data[itemIndex].status,
  });
  const navigate = useNavigate();
  const handleChangeUpdateField = (e) => {
    setFormUpdate({
      ...formUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();

    if (
      formUpdate.title.length == 0 ||
      formUpdate.author.length == 0 ||
      formUpdate.desc.length == 0
    ) {
      setErrorUpdateValidate(true);
      return;
    }

    data[itemIndex] = formUpdate;

    localStorage.setItem("todoList", JSON.stringify(data));
    navigate("/home");
  };

  return (
    <form className="form" onSubmit={handleUpdateTask}>
      <div className="form__item">
        <label htmlFor="title">Title: </label>
        <div className="form__inputArea">
          <input
            type="text"
            name="title"
            value={formUpdate.title}
            onChange={handleChangeUpdateField}
          />
          {errorUpdateValidate && formUpdate.title.length <= 0 ? (
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
            value={formUpdate.author}
            onChange={handleChangeUpdateField}
          />
          {errorUpdateValidate && formUpdate.author.length <= 0 ? (
            <p>Author is required</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form__item">
        <label htmlFor="description">Description: </label>
        <div className="form__inputArea">
          <textarea
            className="form__desc"
            aria-label="minimum height"
            minRows={3}
            name="desc"
            placeholder="Minimum 3 rows"
            style={{ width: 300 }}
            value={formUpdate.desc}
            onChange={handleChangeUpdateField}
          />
          {errorUpdateValidate && formUpdate.desc.length <= 0 ? (
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
          value={formUpdate.status}
          style={{ padding: 5, width: 100 }}
          label="Status"
          onChange={handleChangeUpdateField}
        >
          <option value={STATUS.NEW}>{STATUS.NEW}</option>
          <option value={STATUS.DOING}>{STATUS.DOING}</option>
          <option value={STATUS.DONE}>{STATUS.DONE}</option>
        </select>
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

FormUpdate.propTypes = {};

export default FormUpdate;
