import logo from "./logo.svg";
import "./App.css";
import CreateNewTask from "./components/Header/CreateNewTask";
import Search from "./components/Header/Search";
import SpecificTask from "./components/Sidebar/SpecificTask";
import TodoList from "./components/TodoList/TodoList";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div className="container">
      <div className="header">
        <CreateNewTask />
        <Search />
      </div>
      <div className="main">
        <div className="sidebar">
          <SpecificTask />
        </div>
        <div className="todoList">
          <div className="todo">
            <TodoList />
          </div>
          <div className="pagination-area">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
