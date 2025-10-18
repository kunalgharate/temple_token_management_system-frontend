import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TokenForm = () => {
  const { tokenNumber } = useParams();
  const [tokenData, setTokenData] = useState(null);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTokenData();
  }, [tokenNumber]);

  const fetchTokenData = async () => {
    try {
      const response = await fetch(`https://temple-token-management-system.onrender.com/api/tokens/${tokenNumber}`);
      if (!response.ok) {
        throw new Error('Token not found');
      }
      const data = await response.json();
      
      // Check if passengers are already filled
      if (data.passengers && data.passengers.length > 0) {
        setTokenData({ ...data, alreadyFilled: true });
        setLoading(false);
        return;
      }
      
      setTokenData(data);
      setPassengers(Array(data.passenger_count).fill().map(() => ({
        name: '',
        phone: '',
        city: ''
      })));
    } catch (error) {
      console.error('Error fetching token data:', error);
      setTokenData({ error: 'Token not found' });
    } finally {
      setLoading(false);
    }
  };

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch(`https://temple-token-management-system.onrender.com/api/tokens/${tokenNumber}/passengers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passengers })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to submit');
      }
      
      // Show thank you dialog
      alert('Thank you for submitting your details!');
      
      // Clear the form
      setPassengers(Array(tokenData.passenger_count).fill().map(() => ({
        name: '',
        phone: '',
        city: ''
      })));
      
      // Show success message
      alert('Details submitted successfully! You can now close this window.');
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="loading">Loading token details...</div>;
  if (tokenData?.error) return <div className="error">Token not found</div>;
  if (tokenData?.alreadyFilled) {
    return (
      <div className="container">
        <div className="header">
          <h1>Temple Darshan</h1>
          <p>Token: {tokenNumber}</p>
          <p>Vehicle: {tokenData.vehicle_number}</p>
        </div>
        <div className="form-container">
          <div style={{textAlign: 'center', padding: '40px'}}>
            <h2>✅ Details Already Submitted</h2>
            <p>Passenger details have already been submitted for this token.</p>
            <p>You can now close this window.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Temple Darshan</h1>
        <p>Token: {tokenNumber}</p>
        <p>Vehicle: {tokenData.vehicle_number}</p>
        <p>Visitors: {tokenData.passenger_count}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="form-container">
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
        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Details'}
        </button>
      </form>
    </div>
  );
};

export default TokenForm;
