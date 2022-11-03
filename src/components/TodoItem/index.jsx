import React, { useState } from "react";
import { STATUS } from "../../constant";
import { FaChevronDown } from "react-icons/fa";

import "./styles.scss";

const TodoItem = (props) => {
  const { title, author, status, desc } = props.todo;
  const { idx, onHandleChange } = props;
  const [newStatus, setNewStatus] = useState(status);

  const handleChangeStatus = (e) => {
    onHandleChange(idx, e.target.value);
  };

  return (
    <div className="card">
      <div className="card__container">
        <p className="card__title">
          <label>Title: </label>
          <label>{title}</label>
        </p>
        <p className="card__creator">
          <label>Creator: </label>
          <label>{author}</label>
        </p>
        <p className="card__status">
          <label className={status}>Status: </label>
          <label className={status}>{status}</label>
        </p>
        <hr className="card__lineBreak" />

        <p className="card__description">
          <label>Description: </label>
          <p>{desc}</p>
        </p>
        <select className="card__selectStatus" onChange={handleChangeStatus}>
          <option value={STATUS.NEW}>{STATUS.NEW}</option>
          <option value={STATUS.DOING}>{STATUS.DOING}</option>
          <option value={STATUS.DONE}>{STATUS.DONE}</option>
          <FaChevronDown className="arrow-icon" />
        </select>
      </div>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
