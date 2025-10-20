import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TokenForm from './TokenForm';
import './App.css';

function HomePage() {
  const [tokenNumber, setTokenNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tokenNumber.trim()) {
      window.location.hash = `#/token/${tokenNumber}`;
    }
  };

  return (
    <div className="container">
      <h1>Temple Token Management</h1>
      <form onSubmit={handleSubmit} className="token-input">
        <input
          type="text"
          placeholder="Enter Token Number"
          value={tokenNumber}
          onChange={(e) => setTokenNumber(e.target.value)}
          required
        />
        <button type="submit">Get Token</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/token/:tokenNumber" element={<TokenForm />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
