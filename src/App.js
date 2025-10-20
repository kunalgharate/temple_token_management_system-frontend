import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tokenNumber, setTokenNumber] = useState('');
  const [tokenData, setTokenData] = useState(null);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check URL hash for token
    const hash = window.location.hash;
    if (hash.includes('token=')) {
      const token = hash.split('token=')[1];
      setTokenNumber(token);
      fetchToken(token);
    }
  }, []);

  const fetchToken = async (token = tokenNumber) => {
    if (!token.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://temple-token-management-system.onrender.com/api/tokens/${token}`);
      if (!response.ok) throw new Error('Token not found');
      
      const data = await response.json();
      
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
    
    // Validation based on field type
    if (field === 'name' || field === 'city') {
      // Only allow letters and spaces
      value = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (field === 'phone') {
      // Only allow numbers
      value = value.replace(/[^0-9]/g, '');
      // Limit to 10 digits
      if (value.length > 10) value = value.slice(0, 10);
    }
    
    updated[index][field] = value;
    setPassengers(updated);
  };

  const validateForm = () => {
    for (let i = 0; i < passengers.length; i++) {
      const passenger = passengers[i];
      
      if (!passenger.name.trim()) {
        alert(`Please enter name for Visitor ${i + 1}`);
        return false;
      }
      
      if (passenger.name.trim().length < 2) {
        alert(`Name must be at least 2 characters for Visitor ${i + 1}`);
        return false;
      }
      
      if (!passenger.phone.trim()) {
        alert(`Please enter phone number for Visitor ${i + 1}`);
        return false;
      }
      
      if (passenger.phone.length !== 10) {
        alert(`Phone number must be exactly 10 digits for Visitor ${i + 1}`);
        return false;
      }
      
      if (!passenger.city.trim()) {
        alert(`Please enter city/village for Visitor ${i + 1}`);
        return false;
      }
      
      if (passenger.city.trim().length < 2) {
        alert(`City/Village must be at least 2 characters for Visitor ${i + 1}`);
        return false;
      }
    }
    return true;
  };

  const submitDetails = async () => {
    if (!validateForm()) return;
    
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
        <button onClick={() => window.location.reload()}>Submit Another Token</button>
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
          <button onClick={() => fetchToken()} disabled={loading}>
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
                placeholder="Full Name (letters only)"
                value={passenger.name}
                onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                required
                minLength="2"
                pattern="[A-Za-z\s]+"
                title="Name should contain only letters and spaces"
              />
              <input
                type="tel"
                placeholder="Phone Number (10 digits)"
                value={passenger.phone}
                onChange={(e) => handlePassengerChange(index, 'phone', e.target.value)}
                required
                maxLength="10"
                pattern="[0-9]{10}"
                title="Phone number should be exactly 10 digits"
              />
              <input
                type="text"
                placeholder="City/Village (letters only)"
                value={passenger.city}
                onChange={(e) => handlePassengerChange(index, 'city', e.target.value)}
                required
                minLength="2"
                pattern="[A-Za-z\s]+"
                title="City/Village should contain only letters and spaces"
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
