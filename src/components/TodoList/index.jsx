import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { initData } from "../../data/todos";

import TodoItem from "../TodoItem";

import "./styles.scss";

const TodoList = (props) => {
  const newData = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];

  const [todoList, setTodoList] = useState(newData);

  const newTodoList = [
    ...todoList.filter(
      (item) =>
        item.title.includes(props.searchValue) ||
        item.author.includes(props.searchValue) ||
        item.desc.includes(props.searchValue) ||
        item.status.includes(props.searchValue)
    ),
  ];
  const handleChange = (idx, newStatus) => {
    // Update status for item by index
    newTodoList[idx] = {
      ...todoList[idx],
      status: newStatus,
    };

    setTodoList(newTodoList);
  };

  const handleDelete = (idx) => {
    newTodoList.splice(idx, 1);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  return (
    <div className="todos">
      {!props.status
        ? newTodoList.map((item, index) => (
            <TodoItem
              todo={item}
              key={index}
              idx={index}
              onHandleChange={handleChange}
              onHandleDelete={handleDelete}
            />
          ))
        : newTodoList
            .filter((todo) => todo.status === props.status)
            .map((item, index) => (
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
