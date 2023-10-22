// filename - App.js

import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Events from "./Components/Event";
import Blogs from "./Components/Blogs";
import Team from "./Components/Team";

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
