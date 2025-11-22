import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
      {/* Page Header with Background */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200)',
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
            Contact Us
          </h1>
          <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            संपर्क करें
          </h2>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          {/* Contact Information */}
          <section className="section">
            <div className="grid grid-3">
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '1rem' }}>Address</h3>
                  <p style={{ color: '#6b7280' }}>
                    शिव अर्ध: नरेश्वरी नाग ज्योर्तीलिंग धाम<br />
                    मु. पो. बिलमाळ (तुलसीगिड)<br />
                    पो. लिंगा, ता. आहवा<br />
                    जि. डांग. (गुजरात)<br />
                    India
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '1rem' }}>Phone</h3>
                  <p style={{ color: '#6b7280' }}>
                    Temple Office: +91-734-255-6001<br />
                    Booking: +91-734-255-6002<br />
                    Emergency: +91-734-255-6003
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '1rem' }}>Email</h3>
                  <p style={{ color: '#6b7280' }}>
                    General: info@shivnagjyotirlinga.org<br />
                    Services: services@shivnagjyotirlinga.org<br />
                    Donations: donations@shivnagjyotirlinga.org
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form and Map */}
          <section className="section">
            <div className="grid grid-1-3">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">
                    <span>✉️</span>
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--temple-red)' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--temple-red)' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--temple-red)' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--temple-red)' }}>
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          fontSize: '1rem'
                        }}
                      >
                        <option value="">Select Subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Service Booking</option>
                        <option value="donation">Donation</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--temple-red)' }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          fontSize: '1rem',
                          resize: 'vertical'
                        }}
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div>
                <div className="card" style={{ marginBottom: '2rem' }}>
                  <div className="card-content">
                    <h3 className="card-title">
                      <span>🕐</span>
                      Office Hours
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--temple-red)' }}>Temple Office</h4>
                        <p style={{ margin: 0, color: '#6b7280' }}>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                      </div>
                      <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--temple-red)' }}>Booking Counter</h4>
                        <p style={{ margin: 0, color: '#6b7280' }}>Monday - Sunday: 8:00 AM - 8:00 PM</p>
                      </div>
                      <div>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--temple-red)' }}>Information Desk</h4>
                        <p style={{ margin: 0, color: '#6b7280' }}>Monday - Sunday: 7:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div style={{ height: '300px', background: '#f3f4f6', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', color: '#6b7280' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
                      <p>Interactive Map</p>
                      <p style={{ fontSize: '0.875rem' }}>
                        Click to view location on Google Maps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="section">
            <div className="section-title">
              <h2>Quick Links</h2>
            </div>
            <div className="grid grid-4">
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎫</div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>Token System</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    Register for temple visit
                  </p>
                  <a href="/token" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Fill Details
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💰</div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>Donations</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    Support temple activities
                  </p>
                  <button className="btn-primary">
                    Donate Now
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📚</div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>Services</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    Book special pujas
                  </p>
                  <a href="/services" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    View Services
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📸</div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>Gallery</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    View temple photos
                  </p>
                  <a href="/gallery" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    View Gallery
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
