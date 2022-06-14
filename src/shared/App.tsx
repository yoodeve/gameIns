import React from "react";
import { Routes, Route } from "react-router";
import Main from "../pages/Main";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
