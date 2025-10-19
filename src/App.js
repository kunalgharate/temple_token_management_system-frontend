import React, { useState } from 'react';
import './App.css';

function App() {
  const [tokenNumber, setTokenNumber] = useState('');
  const [tokenData, setTokenData] = useState(null);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fetchToken = async () => {
    if (!tokenNumber.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://temple-token-management-system.onrender.com/api/tokens/${tokenNumber}`);
      if (!response.ok) throw new Error('Token not found');
      
      const data = await response.json();
      setTokenData(data);
      setPassengers(Array(data.passenger_count).fill().map(() => ({
        name: '', phone: '', city: ''
      })));
    } catch (error) {
      alert('Token not found');
    }
    setLoading(false);
  };

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const submitDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://temple-token-management-system.onrender.com/api/tokens/${tokenNumber}/passengers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passengers })
      });
      
      if (!response.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (error) {
      alert('Error submitting details');
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="container">
        <h1>Thank You!</h1>
        <p>Your details have been submitted successfully.</p>
        <button onClick={() => window.location.reload()}>Submit Another Token</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Temple Token Management</h1>
      
      <div className="token-input">
        <input
          type="text"
          placeholder="Enter Token Number"
          value={tokenNumber}
          onChange={(e) => setTokenNumber(e.target.value)}
        />
        <button onClick={fetchToken} disabled={loading}>
          {loading ? 'Loading...' : 'Get Token'}
        </button>
      </div>

      {tokenData && (
        <div className="form-section">
          <h2>Token: {tokenData.token_number}</h2>
          <p>Vehicle: {tokenData.vehicle_number}</p>
          <p>Visitors: {tokenData.passenger_count}</p>
          
          {passengers.map((passenger, index) => (
            <div key={index} className="passenger-form">
              <h3>Visitor {index + 1}</h3>
              <input
                type="text"
                placeholder="Full Name"
                value={passenger.name}
                onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={passenger.phone}
                onChange={(e) => handlePassengerChange(index, 'phone', e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                value={passenger.city}
                onChange={(e) => handlePassengerChange(index, 'city', e.target.value)}
              />
            </div>
          ))}
          
          <button onClick={submitDetails} disabled={loading} className="submit-btn">
            {loading ? 'Submitting...' : 'Submit Details'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
