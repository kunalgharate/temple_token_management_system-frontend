import React from 'react';
import trusteesData from '../data/trustees.json';

const Trustees = () => {
  const trustees = trusteesData.trustees;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
      {/* Page Header with Background */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200)',
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
            Board of Trustees
          </h1>
          <h2 style={{ fontSize: '2rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            न्यासी मंडल
          </h2>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          {/* Trustees Grid */}
          <section className="section">
            <div className="trustees-grid">
              {trustees.map((trustee) => (
                <div key={trustee.id} className="trustee-card">
                  <div className="trustee-image-container">
                    <img
                      src={trustee.image}
                      alt={trustee.nameEn}
                      className="trustee-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=' + trustee.nameEn.charAt(0);
                      }}
                    />
                  </div>
                  <div className="trustee-info">
                    <h3 className="trustee-name-hindi">{trustee.name}</h3>
                    <h4 className="trustee-name-english">{trustee.nameEn}</h4>
                    <div className="trustee-position">
                      <span className="position-hindi">{trustee.position}</span>
                      <span className="position-english">({trustee.positionEn})</span>
                    </div>
                    <div className="trustee-contact">
                      <div className="contact-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" style={{ width: '20px', height: '20px' }} />
                        <span className="contact-text">{trustee.phone}</span>
                      </div>
                      <div className="contact-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" style={{ width: '20px', height: '20px' }} />
                        <span className="contact-text">{trustee.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="section">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">
                  <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Contact" style={{ width: '28px', height: '28px' }} />
                  Contact Board of Trustees
                </h3>
                <p style={{ marginBottom: '1.5rem', color: '#6b7280' }}>
                  For any queries or suggestions regarding temple management, please feel free to contact our trustees.
                </p>
                <div className="grid grid-3">
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" style={{ width: '48px', height: '48px', margin: '0 auto' }} />
                    </div>
                    <h4 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Email</h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>trustees@shivnagjyotirlinga.org</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" style={{ width: '48px', height: '48px', margin: '0 auto' }} />
                    </div>
                    <h4 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Phone</h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>+91-98765-43210</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <img src="https://cdn-icons-png.flaticon.com/512/2917/2917242.png" alt="Office" style={{ width: '48px', height: '48px', margin: '0 auto' }} />
                    </div>
                    <h4 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Office</h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Temple Administrative Office</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Trustees;
