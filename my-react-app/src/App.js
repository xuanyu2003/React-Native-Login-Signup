import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginView from "./LoginView";
import SignupView from "./SignupView";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
