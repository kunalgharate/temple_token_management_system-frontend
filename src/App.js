import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TokenForm from './TokenForm';
import './App.css';

function App() {
  const location = useLocation();
  console.log('Current location:', location.pathname);
  
  return (
    <Routes>
      <Route path="/fill-details/:tokenNumber" element={<TokenForm />} />
      <Route path="/" element={<div style={{padding: '20px', textAlign: 'center'}}>
        <h1>Temple Token Management</h1>
        <p>Please scan your token QR code</p>
        <p>Current path: {location.pathname}</p>
        <p>Test URL: <a href="/fill-details/T-20251018-235">/fill-details/T-20251018-235</a></p>
      </div>} />
      <Route path="*" element={<div style={{padding: '20px', textAlign: 'center'}}>
        <h1>Route Debug</h1>
        <p>Current path: {location.pathname}</p>
        <p>No route matched</p>
      </div>} />
    </Routes>
  );
}

export default App;
