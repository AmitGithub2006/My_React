import React, { useState } from "react";

function UserProfileForm() {
  // State variables
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [isEditing, setIsEditing] = useState(false);

  // Event handlers
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Save the updated profile data
  };

  return (
    <div>
      <h2>User Profile</h2>
      {isEditing ? (
        <div>
          <label htmlFor="name-input">Name:</label>
          <input
            // id="name-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label htmlFor="email-input">Email:</label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <button onClick={handleSaveProfile}>Save Profile</button>
        </div>
      ) : (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={handleEditProfile}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default UserProfileForm;
