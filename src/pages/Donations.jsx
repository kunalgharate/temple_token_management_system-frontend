import React, { useState } from 'react';

const Donations = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [purpose, setPurpose] = useState('general');

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = amount || customAmount;
    alert(`Donation of ₹${finalAmount} initiated. Payment gateway integration pending.`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
      <div className="page-header">
        <h1>Online Donations</h1>
        <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0 0', fontWeight: 'normal', opacity: 0.9 }}>ऑनलाइन दान</h2>
      </div>

      <main className="main-content">
        <div className="container" style={{ maxWidth: '800px' }}>
          <section className="section">
            <div className="card">
              <div className="card-content">
                <h2 style={{ color: 'var(--temple-primary)', marginBottom: '1rem' }}>Make a Donation</h2>
                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                  Your generous contribution helps us maintain the temple and serve devotees better.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Donation Purpose */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                      Donation Purpose / दान का उद्देश्य
                    </label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="general">General Donation / सामान्य दान</option>
                      <option value="temple">Temple Maintenance / मंदिर रखरखाव</option>
                      <option value="food">Prasad & Food / प्रसाद और भोजन</option>
                      <option value="festival">Festival Celebration / त्योहार समारोह</option>
                      <option value="education">Religious Education / धार्मिक शिक्षा</option>
                    </select>
                  </div>

                  {/* Predefined Amounts */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                      Select Amount / राशि चुनें
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.75rem' }}>
                      {predefinedAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setAmount(amt); setCustomAmount(''); }}
                          style={{
                            padding: '0.75rem',
                            border: amount === amt ? '2px solid #FF6B35' : '1px solid #d1d5db',
                            borderRadius: '0.5rem',
                            background: amount === amt ? '#FFF4E6' : 'white',
                            color: amount === amt ? '#FF6B35' : '#374151',
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}
                        >
                          ₹{amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                      Or Enter Custom Amount / या कस्टम राशि दर्ज करें
                    </label>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                      placeholder="Enter amount in ₹"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  {/* Donor Details */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                      Full Name / पूरा नाम *
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
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
                      Email / ईमेल *
                    </label>
                    <input
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
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
                      Phone Number / फ़ोन नंबर *
                    </label>
                    <input
                      type="tel"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
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
                    Proceed to Payment / भुगतान के लिए आगे बढ़ें
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Bank Details */}
          <section className="section">
            <div className="card">
              <div className="card-content">
                <h3 style={{ color: 'var(--temple-primary)', marginBottom: '1rem' }}>
                  Bank Transfer Details / बैंक ट्रांसफर विवरण
                </h3>
                <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '0.5rem' }}>
                  <p style={{ margin: '0.5rem 0' }}><strong>Bank Name:</strong> State Bank of India</p>
                  <p style={{ margin: '0.5rem 0' }}><strong>Account Name:</strong> Shiv Nag Jyotirlinga Trust</p>
                  <p style={{ margin: '0.5rem 0' }}><strong>Account Number:</strong> 1234567890</p>
                  <p style={{ margin: '0.5rem 0' }}><strong>IFSC Code:</strong> SBIN0001234</p>
                  <p style={{ margin: '0.5rem 0' }}><strong>Branch:</strong> Ahwa, Dang</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Donations;
