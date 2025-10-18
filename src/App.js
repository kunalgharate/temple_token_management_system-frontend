import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TokenForm from './TokenForm';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/fill-details/:tokenNumber" element={<TokenForm />} />
      <Route path="/" element={<div>Please scan your token QR code</div>} />
    </Routes>
  );
}

export default App;
