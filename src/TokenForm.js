import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TokenForm = () => {
  const { tokenNumber: urlToken } = useParams();
  const navigate = useNavigate();
  const [tokenInput, setTokenInput] = useState('');
  const [tokenNumber, setTokenNumber] = useState(urlToken || '');
  const [tokenData, setTokenData] = useState(null);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fetchTokenData = async (token) => {
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
      setTokenNumber(token);
      setPassengers(Array(data.passenger_count).fill().map(() => ({
        name: '', phone: '', city: ''
      })));
    } catch (error) {
      alert('Token not found. Please check the token number and try again.');
      setTokenData(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (urlToken) {
      fetchTokenData(urlToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlToken]);

  const handleGetToken = () => {
    if (!tokenInput.trim()) {
      alert('Please enter a token number');
      return;
    }
    navigate(`/token/${tokenInput}`);
    fetchTokenData(tokenInput);
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

  // Show token input if no token data
  if (!tokenData && !loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
        <div style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Token System
            </h1>
            <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              टोकन प्रणाली
            </h2>
          </div>
        </div>
        
        <div className="container" style={{ padding: '3rem 1rem' }}>
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="card-content" style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'var(--temple-primary)', marginBottom: '1.5rem' }}>
                Enter Your Token Number
              </h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                कृपया अपना टोकन नंबर दर्ज करें
              </p>
              
              <div className="token-input">
                <input
                  type="text"
                  placeholder="Enter Token Number / टोकन नंबर दर्ज करें"
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleGetToken()}
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    marginBottom: '1rem'
                  }}
                />
                <button 
                  onClick={handleGetToken} 
                  disabled={loading}
                  style={{
                    width: '100%',
                    maxWidth: '400px'
                  }}
                >
                  {loading ? 'Loading... / लोड हो रहा है...' : 'Get Token / टोकन प्राप्त करें'}
                </button>
              </div>
              
              <div style={{ marginTop: '2rem', padding: '1rem', background: '#f9fafb', borderRadius: '0.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                  <strong>Note:</strong> Please enter the token number provided to you at the temple entrance.
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0.5rem 0 0' }}>
                  <strong>नोट:</strong> कृपया मंदिर प्रवेश द्वार पर दिया गया टोकन नंबर दर्ज करें।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
        <div style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Token System
            </h1>
            <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              टोकन प्रणाली
            </h2>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <p style={{ fontSize: '1.25rem' }}>Loading token {tokenNumber}...</p>
        </div>
      </div>
    );
  }
  
  if (tokenData?.error) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
        <div style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Token System
            </h1>
            <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              टोकन प्रणाली
            </h2>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div style={{ background: '#fee2e2', padding: '2rem', borderRadius: '0.5rem', border: '1px solid #ef4444' }}>
            <h2 style={{ color: '#dc2626', marginBottom: '1rem' }}>Token Not Found</h2>
            <p style={{ color: '#991b1b' }}>Token {tokenNumber} not found in the system.</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
        <div style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Token System
            </h1>
            <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              टोकन प्रणाली
            </h2>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div style={{ background: '#d1fae5', padding: '3rem 2rem', borderRadius: '0.75rem', border: '2px solid #10b981', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ color: '#059669', marginBottom: '1rem', fontSize: '2rem' }}>Thank You!</h2>
            <p style={{ color: '#047857', fontSize: '1.125rem' }}>Your details have been submitted successfully.</p>
            <p style={{ color: '#047857', marginTop: '1rem' }}>Token: {tokenNumber}</p>
          </div>
        </div>
      </div>
    );
  }

  if (tokenData?.alreadyFilled) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
        <div style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Token System
            </h1>
            <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              टोकन प्रणाली
            </h2>
          </div>
        </div>
        <div className="container" style={{ padding: '3rem 1rem' }}>
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="card-content" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
              <h2 style={{ color: 'var(--temple-primary)', marginBottom: '1rem' }}>Details Already Submitted</h2>
              <p style={{ marginBottom: '1rem' }}>Token: <strong>{tokenNumber}</strong></p>
              <p style={{ marginBottom: '1rem' }}>Vehicle: <strong>{tokenData.vehicle_number}</strong></p>
              <p style={{ color: '#6b7280' }}>Passenger details have already been submitted for this token.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Token System
          </h1>
          <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            टोकन प्रणाली
          </h2>
        </div>
      </div>
      
      <div className="container" style={{ padding: '3rem 1rem' }}>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card-content">
            <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '1.5rem', background: '#FFF4E6', borderRadius: '0.5rem' }}>
              <h2 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Token: {tokenData?.token_number}</h2>
              <p style={{ margin: '0.25rem 0', color: '#6b7280' }}>Vehicle: <strong>{tokenData?.vehicle_number}</strong></p>
              <p style={{ margin: '0.25rem 0', color: '#6b7280' }}>Total Visitors: <strong>{tokenData?.passenger_count}</strong></p>
            </div>
            
            <h3 style={{ color: 'var(--temple-primary)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Fill Visitor Details / आगंतुक विवरण भरें
            </h3>
            
            {passengers.map((passenger, index) => (
              <div key={index} className="passenger-form">
                <h3>Visitor {index + 1} / आगंतुक {index + 1}</h3>
                <input
                  type="text"
                  placeholder="Full Name / पूरा नाम"
                  value={passenger.name}
                  onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number / फ़ोन नंबर"
                  value={passenger.phone}
                  onChange={(e) => handlePassengerChange(index, 'phone', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="City / शहर"
                  value={passenger.city}
                  onChange={(e) => handlePassengerChange(index, 'city', e.target.value)}
                  required
                />
              </div>
            ))}
            
            <button onClick={submitDetails} disabled={loading} className="submit-btn">
              {loading ? 'Submitting... / जमा हो रहा है...' : 'Submit Details / विवरण जमा करें'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenForm;
