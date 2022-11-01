import logo from "./logo.svg";
import "./App.css";
import CreateNewTask from "./components/Header/CreateNewTask";
import Search from "./components/Header/Search";
import SpecificTask from "./components/Sidebar/SpecificTask";
import TodoList from "./components/TodoList/TodoList";
import Pagination from "./components/Pagination/Pagination";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [isCreateNewTask, setCreateNewTask] = useState(false);

  const handleCreateNewTask = (createNewTaskMode) => {
    setCreateNewTask(createNewTaskMode);
  };
  return (
    <div className="container">
      <div className="header">
        <CreateNewTask onClick={() => handleCreateNewTask(true)} />
        <Search />
      </div>
      <div className="main">
        <div className="sidebar">
          <SpecificTask />
        </div>
        <div className="content">
          {isCreateNewTask ? (
            <Form onClick={() => handleCreateNewTask(false)} />
          ) : (
            <TodoList />
          )}
          <div className="pagination-area">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
