import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tokenNumber, setTokenNumber] = useState('');
  const [tokenData, setTokenData] = useState(null);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check URL for token parameter
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    
    if (tokenFromUrl) {
      setTokenNumber(tokenFromUrl);
      fetchTokenData(tokenFromUrl);
    }
  }, []);

  const fetchTokenData = async (token = tokenNumber) => {
    if (!token.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://temple-token-management-system.onrender.com/api/tokens/${token}`);
      if (!response.ok) throw new Error('Token not found');
      
      const data = await response.json();
      
      // Check if already filled
      if (data.passengers && data.passengers.length > 0) {
        setTokenData({ ...data, alreadyFilled: true });
        setLoading(false);
        return;
      }
      
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
        <h1>✅ Thank You!</h1>
        <p>Your details have been submitted successfully.</p>
        <p>You can now close this window.</p>
      </div>
    );
  }

  if (tokenData?.alreadyFilled) {
    return (
      <div className="container">
        <h1>Temple Darshan</h1>
        <p>Token: {tokenNumber}</p>
        <p>Vehicle: {tokenData.vehicle_number}</p>
        <div className="already-filled">
          <h2>✅ Details Already Submitted</h2>
          <p>Passenger details have already been submitted for this token.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Temple Token Management</h1>
      
      {!tokenData && (
        <div className="token-input">
          <input
            type="text"
            placeholder="Enter Token Number"
            value={tokenNumber}
            onChange={(e) => setTokenNumber(e.target.value)}
          />
          <button onClick={() => fetchTokenData()} disabled={loading}>
            {loading ? 'Loading...' : 'Get Token'}
          </button>
        </div>
      )}

      {tokenData && !tokenData.alreadyFilled && (
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
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={passenger.phone}
                onChange={(e) => handlePassengerChange(index, 'phone', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="City"
                value={passenger.city}
                onChange={(e) => handlePassengerChange(index, 'city', e.target.value)}
                required
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
