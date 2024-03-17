import React, { useContext } from "react";
import "../index.css";
import UserContext from "../UserContext";

function Navbar(props) {
  const name = useContext(UserContext);
  console.log(name);
  return (
    <div style={{ background: "tomato" }}>
      {/* <h1>{props.loggedInUser ? `Welcome! ${name.name}` : "Please login"}</h1> */}
      <h1>{props.loggedInUser ? `Welcome! ${name.name}` : "Please login"}</h1>
    </div>
  );
}
export default Navbar;
