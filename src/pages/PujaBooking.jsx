import React, { useState } from 'react';

const PujaBooking = () => {
  const [selectedPuja, setSelectedPuja] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [devoteeName, setDevoteeName] = useState('');
  const [devoteePhone, setDevoteePhone] = useState('');
  const [devoteeEmail, setDevoteeEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  const pujaOptions = [
    { id: 'rudrabhishek', name: 'Rudrabhishek / रुद्राभिषेक', price: 501, duration: '1 hour' },
    { id: 'mahamrityunjay', name: 'Mahamrityunjay Jaap / महामृत्युंजय जाप', price: 1100, duration: '2 hours' },
    { id: 'laghurudra', name: 'Laghu Rudra / लघु रुद्र', price: 2100, duration: '3 hours' },
    { id: 'maharudra', name: 'Maha Rudra / महा रुद्र', price: 5100, duration: '5 hours' },
    { id: 'abhishek', name: 'Special Abhishek / विशेष अभिषेक', price: 251, duration: '30 mins' },
    { id: 'aarti', name: 'Special Aarti / विशेष आरती', price: 151, duration: '20 mins' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const puja = pujaOptions.find(p => p.id === selectedPuja);
    alert(`Puja booking for ${puja.name} on ${bookingDate} initiated. Payment gateway integration pending.`);
  };

  const selectedPujaDetails = pujaOptions.find(p => p.id === selectedPuja);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
      <div className="page-header">
        <h1>Online Puja Booking</h1>
        <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0 0', fontWeight: 'normal', opacity: 0.9 }}>ऑनलाइन पूजा बुकिंग</h2>
      </div>

      <main className="main-content">
        <div className="container" style={{ maxWidth: '1000px' }}>
          {/* Puja Options */}
          <section className="section">
            <h2 style={{ textAlign: 'center', color: 'var(--temple-primary)', marginBottom: '2rem' }}>
              Select Puja / पूजा चुनें
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {pujaOptions.map((puja) => (
                <div
                  key={puja.id}
                  onClick={() => setSelectedPuja(puja.id)}
                  style={{
                    padding: '1.5rem',
                    border: selectedPuja === puja.id ? '3px solid #FF6B35' : '1px solid #e5e7eb',
                    borderRadius: '0.75rem',
                    background: selectedPuja === puja.id ? '#FFF4E6' : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: selectedPuja === puja.id ? '0 4px 12px rgba(255, 107, 53, 0.2)' : '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <h3 style={{ color: '#FF6B35', marginBottom: '0.5rem', fontSize: '1.125rem' }}>{puja.name}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Duration: {puja.duration}</p>
                  <p style={{ color: '#1f2937', fontWeight: '700', fontSize: '1.25rem', margin: 0 }}>₹{puja.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Booking Form */}
          {selectedPuja && (
            <section className="section">
              <div className="card">
                <div className="card-content">
                  <h2 style={{ color: 'var(--temple-primary)', marginBottom: '1rem' }}>
                    Booking Details / बुकिंग विवरण
                  </h2>
                  <div style={{ background: '#FFF4E6', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                    <p style={{ margin: 0, fontWeight: '600' }}>Selected: {selectedPujaDetails.name}</p>
                    <p style={{ margin: '0.25rem 0 0', color: '#6b7280' }}>Amount: ₹{selectedPujaDetails.price}</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                        Preferred Date / पसंदीदा तिथि *
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '1rem'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                        Devotee Name / भक्त का नाम *
                      </label>
                      <input
                        type="text"
                        value={devoteeName}
                        onChange={(e) => setDevoteeName(e.target.value)}
                        required
                        placeholder="Full name for puja sankalp"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '1rem'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                        Phone Number / फ़ोन नंबर *
                      </label>
                      <input
                        type="tel"
                        value={devoteePhone}
                        onChange={(e) => setDevoteePhone(e.target.value)}
                        required
                        pattern="[0-9]{10}"
                        placeholder="10 digit mobile number"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '1rem'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                        Email / ईमेल *
                      </label>
                      <input
                        type="email"
                        value={devoteeEmail}
                        onChange={(e) => setDevoteeEmail(e.target.value)}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '1rem'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                        Special Request / विशेष अनुरोध (Optional)
                      </label>
                      <textarea
                        value={specialRequest}
                        onChange={(e) => setSpecialRequest(e.target.value)}
                        rows="3"
                        placeholder="Any special requirements or gotra details"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit-btn"
                      style={{
                        width: '100%',
                        padding: '1rem',
                        background: '#FF6B35',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Book Puja & Pay ₹{selectedPujaDetails.price}
                    </button>
                  </form>
                </div>
              </div>
            </section>
          )}

          {/* Information */}
          <section className="section">
            <div className="card">
              <div className="card-content">
                <h3 style={{ color: 'var(--temple-primary)', marginBottom: '1rem' }}>Important Information</h3>
                <ul style={{ color: '#6b7280', lineHeight: '1.8' }}>
                  <li>Puja booking confirmation will be sent via SMS and Email</li>
                  <li>Please arrive 15 minutes before the scheduled time</li>
                  <li>Prasad will be provided after the puja completion</li>
                  <li>For rescheduling, contact us at least 24 hours in advance</li>
                  <li>Refund policy: 100% refund if cancelled 48 hours before</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PujaBooking;
