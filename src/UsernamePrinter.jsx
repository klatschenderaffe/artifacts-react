import React, { useState } from 'react';

function UsernamePrinter() {
  const [username, setUsername] = useState('');
  const [printedUsername, setPrintedUsername] = useState(null);

  const handlePrintUsername = () => {
    // Simuliere eine asynchrone Operation
    setTimeout(() => {
      setPrintedUsername(username);
    }, Math.floor(Math.random() * 200));
  };

  return (
    <div>
      <label htmlFor='username'>Username</label>
      <input
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handlePrintUsername}>Print Username</button>
      {printedUsername && (
        <div data-testid='printed-username'>{printedUsername}</div>
      )}
    </div>
  );
}

export default UsernamePrinter;
