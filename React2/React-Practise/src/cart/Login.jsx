import React from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

function Login(props) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/product");
    props.setLoggedInUser(true);
  };

  return (
    <div className="loginCont">
      <UserContext.Consumer>
        {(value) => (
          <input
            id="loginInput"
            type="text"
            placeholder="Enter your name..."
            value={value.name}
            onChange={(e) => value.setName(e.target.value)}
          />
        )}
      </UserContext.Consumer>
      <input
        id="loginPassword"
        type="password"
        placeholder="Enter your password..."
      />
      <button id="loginBtn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
