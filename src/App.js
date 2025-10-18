import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TokenForm from './TokenForm';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/:tokenNumber" element={<TokenForm />} />
      <Route path="/" element={<div style={{padding: '20px', textAlign: 'center'}}>
        <h1>Temple Token Management</h1>
        <p>Please scan your token QR code</p>
      </div>} />
    </Routes>
  );
}

export default App;
