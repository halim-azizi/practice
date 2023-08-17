import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FetchAPI from "./components/FetchAPI";
function App() {
  return (
    <>
      <BrowserRouter>
        <FetchAPI />
      </BrowserRouter>
    </>
  );
}

export default App;
