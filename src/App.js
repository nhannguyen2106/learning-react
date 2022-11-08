import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import Sidebar from "./layouts/Sidebar";

import { useState } from "react";
import FormCreate from "./components/FormCreate";
import { Route, Routes } from "react-router-dom";
import FormUpdate from "./components/FormUpdate";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="container">
        <Header searchValue={searchValue} />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route
              path="/home"
              element={<MainContent searchValue={searchValue} />}
            />
            <Route path="/new-task" element={<MainContent status={"New"} />} />
            <Route
              path="/doing-task"
              element={<MainContent status={"Doing"} />}
            />
            <Route
              path="/done-task"
              element={<MainContent status={"Done"} />}
            />
            <Route path="/add-new" element={<FormCreate />} />
            <Route path="/update/:itemIndex" element={<FormUpdate />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
