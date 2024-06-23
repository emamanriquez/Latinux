import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginUser from "./Components/LoginUser/LoginUser.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/loginUser" element={<LoginUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
