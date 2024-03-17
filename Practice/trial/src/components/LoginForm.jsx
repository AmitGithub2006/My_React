import React, { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { name: name, email: email, number: number }]);
    setName("");
    setEmail("");
    setNumber("");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={handleEmail}
        />
        <input
          type="number"
          placeholder="Enter your no..."
          value={number}
          onChange={handleNumber}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} - {user.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LoginForm;