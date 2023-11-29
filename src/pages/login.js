import React, { useState } from "react";
// import "./App.css";
// import Signup from "./Signup";
import Background from "../pictures/bg.jpeg";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

function Login(props) {
  const navigate = useNavigate();
  const { handleSetUsername, setAccountPage } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    if (username === "" || password === "") {
      alert("Fill in all field");
    } else {
      navigate("/home");
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          height: "inherit",
          width: " inherit",
          display: "flex",
          justifyContent: "center",
          background: `url(${Background})`,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "500px",
            background: "white",
            borderRadius: "30px",
            padding: "30px",
          }}
        >
          <h1>Welcome to Our Website</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 className="login-header">{"LOGIN"}</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <label className="label" htmlFor="username">
              Username
            </label>
            <TextField
              placeholder="username"
              size="small"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <label className="label" htmlFor="password">
              Password
            </label>
            <TextField
              placeholder="password"
              type="password"
              size="small"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <br></br>

          <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
            <Button
              variant="contained"
              className="comic-button"
              onClick={() => {
                handleLogin();
              }}
            >
              LOGIN
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/signup");
              }}
              className="signup-button"
            >
              Sign Up
            </Button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
