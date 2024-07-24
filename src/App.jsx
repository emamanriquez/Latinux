import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginUser from "./Components/LoginUser/LoginUser.jsx";
import Home from "./Components/Home/home.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/loginUser" element={<LoginUser />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
