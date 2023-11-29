import React, { useState } from 'react';

function UpdateProfile() {
  const [newUsername, setNewUsername] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNewUsername(value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Simulasikan logika pembaruan profil di sini
    alert(`Username updated to: ${newUsername}`);
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>
            New Username:
            <input
              type="text"
              value={newUsername}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateProfile;