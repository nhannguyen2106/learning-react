import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

TodoList.propTypes = {};

function TodoList(props) {
  const todoData = [
    {
      title: "Task 1",
      author: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 2",
      author: "Author 1",
      status: "Doing",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 3",
      author: "Author 1",
      status: "Done",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 4",
      author: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 5",
      author: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 6",
      author: "Author 1",
      status: "Doing",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 7",
      author: "Author 1",
      status: "Done",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 8",
      author: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 9",
      author: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 10",
      author: "Author 1",
      status: "Doing",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 11",
      author: "Author 1",
      status: "Done",
      description: "This is a task, This is a task, This is a task, This...",
    },
    {
      title: "Task 12",
      author: "Author 1",
      status: "New",
      description: "This is a task, This is a task, This is a task, This...",
    },
  ];
  return (
    <>
      {todoData.map((item) => (
        <Todo
          title={item.title}
          author={item.author}
          status={item.status}
          description={item.description}
        />
      ))}
    </>
  );
}

export default TodoList;
