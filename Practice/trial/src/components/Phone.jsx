import React, { useState } from "react";

function PhoneDirectory() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [directory, setDirectory] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDirectory([...directory, { name: name, number: number }]);
    setName("");
    setNumber("");
  };

  return (
    <div>
      <h1>Phone Directory</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />

        <label>Number:</label>
        <input type="text" value={number} onChange={handleNumberChange} />

        <button type="submit">Add Contact</button>
      </form>

      <ul>
        {directory.map((contact, index) => (
          <li key={index}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneDirectory;