import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import Sidebar from "./layouts/Sidebar";

import { useState } from "react";
import FormCreate from "./components/FormCreate";
import { Route, Routes } from "react-router-dom";
import FormUpdate from "./components/FormUpdate";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route path="/home" element={<MainContent />} />
            <Route path="/add-new" element={<FormCreate />} />
            <Route path="/update" element={<FormUpdate />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
