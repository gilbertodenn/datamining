import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Madrid from "./components/card";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Madrid/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
