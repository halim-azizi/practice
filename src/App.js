import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
      <>
          <BrowserRouter>
              <Header />
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/stuff" element={<Stuff />} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/404" element={<PageNotFound />} />
                  <Route path="*" element={<Navigate to="/404" />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
