import React, { useState } from "react";
import { initData } from "../../data/todos";

import TodoItem from "../TodoItem";

import "./styles.scss";

const TodoList = (props) => {
  // const [newTodoData, setNewTodoData] = useState(todoData);

  // const handleChangeStatus = (e, todoListID) => {
  //   const isExistIndex = todoData.findIndex((item) => item.id === todoListID);

  //   if (isExistIndex !== -1) {
  //     newTodoData.splice(isExistIndex, 1, {
  //       ...newTodoData[isExistIndex],
  //       status: e.target.value,
  //     });

  //     setNewTodoData([...newTodoData]);
  //   }
  // };

  const newData = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];

  const [todoList, setTodoList] = useState(newData);

  const handleChange = (idx, newStatus) => {
    // New todoList from current one
    const newTodoList = [...todoList];
    // Update status for item by index
    newTodoList[idx] = {
      ...todoList[idx],
      status: newStatus,
    };
    console.log(newTodoList);

    setTodoList(newTodoList);
  };

  return (
    <div className="todos">
      {todoList.map((item, index) => (
        <TodoItem
          todo={item}
          key={index}
          idx={index}
          onHandleChange={handleChange}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
