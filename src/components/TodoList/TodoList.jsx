import React, { useState } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

TodoList.propTypes = {};

function TodoList(props) {
  const todoData = [
    {
      id: 1,
      title: "Task 1",
      creator: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 2,
      title: "Task 2",
      creator: "Author 1",
      status: "Doing",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "Author 1",
      status: "Done",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 4,
      title: "Task 4",
      creator: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 5,
      title: "Task 5",
      creator: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 6,
      title: "Task 6",
      creator: "Author 1",
      status: "Doing",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 7,
      title: "Task 7",
      creator: "Author 1",
      status: "Done",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 8,
      title: "Task 8",
      creator: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 9,
      title: "Task 9",
      creator: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 10,
      title: "Task 10",
      creator: "Author 1",
      status: "Doing",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 11,
      title: "Task 11",
      creator: "Author 1",
      status: "Done",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 12,
      title: "Task 12",
      creator: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
  ];

  const [newTodoData, setNewTodoData] = useState(todoData);

  const handleChangeStatus = (e, todoListID) => {
    const isExistIndex = todoData.findIndex((item) => item.id === todoListID);

    if (isExistIndex !== -1) {
      newTodoData.splice(isExistIndex, 1, {
        ...newTodoData[isExistIndex],
        status: e.target.value,
      });

      setNewTodoData([...newTodoData]);
    }
  };

  return (
    <>
      {newTodoData.map((item, index) => (
        <Todo
          key={index}
          // title={item.title}
          // author={item.author}
          // status={item.status}
          // description={item.description}
          // id={item.id}
          item={item}
          handleChangeStatus={handleChangeStatus}
        />
      ))}
    </>
  );
}

export default TodoList;
