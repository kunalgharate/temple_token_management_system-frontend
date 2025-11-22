import React from 'react';

const About = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
      {/* Page Header with Background */}
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
            About Temple
          </h1>
          <h2 style={{ fontSize: '2rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            शिव अर्ध: नरेश्वरी नाग ज्योर्तीलिंग धाम
          </h2>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          {/* Temple History */}
          <section className="section">
            <div className="grid grid-1-3">
              <div>
                <h2 style={{ fontSize: '2rem', color: 'var(--temple-red)', marginBottom: '1.5rem' }}>
                  Sacred History
                </h2>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#374151' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    The शिव अर्ध: नरेश्वरी नाग ज्योर्तीलिंग धाम in बिलमाळ (तुलसीगिड), डांग, गुजरात is a sacred temple 
                    dedicated to Lord Shiva. This divine temple holds immense spiritual significance 
                    and attracts devotees from across the region.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Located in the serene surroundings of डांग district in Gujarat, this temple 
                    provides a peaceful environment for worship and spiritual contemplation. 
                    The temple has been a center of devotion for generations.
                  </p>
                  <p>
                    The temple stands as a testament to the rich spiritual heritage of Gujarat 
                    and continues to serve devotees with its divine presence and sacred atmosphere.
                  </p>
                </div>
              </div>
              <div className="card">
                <img 
                  src="https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Temple+History" 
                  alt="Temple History" 
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <div className="card-content">
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>
                    Ancient Origins
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    The temple's history spans thousands of years, with references in ancient texts
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Temple Features */}
          <section className="section">
            <div className="section-title">
              <h2>Temple Features</h2>
            </div>
            <div className="grid grid-3">
              <div className="card">
                <div className="card-content">
                  <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🕉️</div>
                  <h3 style={{ textAlign: 'center', color: 'var(--temple-red)', marginBottom: '1rem' }}>
                    Dakshinmukhi Jyotirlinga
                  </h3>
                  <p style={{ textAlign: 'center', color: '#6b7280' }}>
                    The only south-facing Jyotirlinga among the twelve sacred shrines
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🏛️</div>
                  <h3 style={{ textAlign: 'center', color: 'var(--temple-red)', marginBottom: '1rem' }}>
                    Maratha Architecture
                  </h3>
                  <p style={{ textAlign: 'center', color: '#6b7280' }}>
                    Beautiful architectural style reflecting the grandeur of Maratha period
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🔔</div>
                  <h3 style={{ textAlign: 'center', color: 'var(--temple-red)', marginBottom: '1rem' }}>
                    Sacred Rituals
                  </h3>
                  <p style={{ textAlign: 'center', color: '#6b7280' }}>
                    Daily rituals and special ceremonies performed with ancient traditions
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Temple Timings */}
          <section className="section">
            <div className="grid grid-1-3">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">
                    <span>🕐</span>
                    Temple Timings
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--temple-red)' }}>Morning</h4>
                      <p style={{ margin: 0, color: '#6b7280' }}>4:00 AM - 11:00 AM</p>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--temple-red)' }}>Evening</h4>
                      <p style={{ margin: 0, color: '#6b7280' }}>4:00 PM - 11:00 PM</p>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--temple-red)' }}>Special Aarti</h4>
                      <p style={{ margin: 0, color: '#6b7280' }}>5:00 AM & 7:00 PM Daily</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: '2rem', color: 'var(--temple-red)', marginBottom: '1.5rem' }}>
                  Spiritual Significance
                </h2>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#374151' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Mahakaleshwar is believed to be the presiding deity of Ujjain, one of the 
                    seven sacred cities (Sapta Puri) in Hinduism. Devotees believe that 
                    worshipping here grants liberation from the cycle of birth and death.
                  </p>
                  <p>
                    The temple is particularly significant during Mahashivratri, when millions 
                    of devotees gather to seek blessings. The Bhasma Aarti, performed with 
                    sacred ash, is a unique ritual that attracts devotees from around the world.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
