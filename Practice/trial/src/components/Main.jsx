import React from 'react';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
    <Link to="/">Counter</Link>
    <Link to="/login">Login Form</Link>
    <Link to="/phone">Phone</Link>
    <Link to="/todo">Todo</Link>
    <Link to="/form">Form</Link>
    <Link to="/search">Search</Link>
    </>
  )
}

export default Main;