import React, { useState } from "react";
import { initData } from "../../data/todos";

import TodoItem from "../TodoItem";

import "./styles.scss";

const TodoList = (props) => {
  const newData = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];

  const [todoList, setTodoList] = useState(newData);

  // New todoList from current one
  const newTodoList = [...todoList];
  const handleChange = (idx, newStatus) => {
    // Update status for item by index
    newTodoList[idx] = {
      ...todoList[idx],
      status: newStatus,
    };
    console.log(newTodoList);

    setTodoList(newTodoList);
  };

  const handleDelete = (idx) => {
    newTodoList.splice(idx, 1);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  return (
    <div className="todos">
      {todoList.map((item, index) => (
        <TodoItem
          todo={item}
          key={index}
          idx={index}
          onHandleChange={handleChange}
          onHandleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
