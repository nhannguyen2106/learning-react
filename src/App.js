import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import Sidebar from "./layouts/Sidebar";

import { useState } from "react";
import FormCreate from "./components/FormCreate";
import { Route, Routes } from "react-router-dom";

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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
