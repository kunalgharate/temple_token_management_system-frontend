import React from 'react';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          शिव अर्ध: नरेश्वरी नाग ज्योर्तीलिंग धाम
        </h1>
        <h2 className="hero-subtitle">
          Shiv Ardh: Nareshwari Nag Jyotirlinga Dham
        </h2>
        <p className="hero-description">
          Experience Divine Blessings • मु. पो. बिलमाळ (तुलसीगिड), गुजरात
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">
            Plan Your Visit
          </button>
          <button className="btn-secondary">
            Virtual Darshan
          </button>
        </div>

        <div className="hero-info-cards">
          <div className="info-card">
            <div className="info-card-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" alt="Clock" style={{ width: '32px', height: '32px' }} />
            </div>
            <h3>Temple Timings</h3>
            <p>4:00 AM - 11:00 PM</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png" alt="Prayer" style={{ width: '32px', height: '32px' }} />
            </div>
            <h3>Daily Aarti</h3>
            <p>5:00 AM | 7:00 PM</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" style={{ width: '32px', height: '32px' }} />
            </div>
            <h3>Location</h3>
            <p>बिलमाळ (तुलसीगिड), डांग, गुजरात</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
