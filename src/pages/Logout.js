import React from 'react';

function Logout({ setLoggedIn }) {
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;