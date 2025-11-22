import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <div className="header-main">
          <div className="logo">
            <div className="logo-icon">
              <img 
                src="/assets/images/icons/logo_icon.png" 
                alt="Temple Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="logo-text">
              <h1>शिव अर्ध: नरेश्वरी नाग ज्योर्तीलिंग धाम</h1>
              <p>Shiv Ardh: Nareshwari Nag Jyotirlinga Dham</p>
            </div>
          </div>

          <nav className="nav-desktop">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/trustees">Trustees</a>
            <a href="/employees">Employees</a>
            <a href="/gallery">Gallery</a>
            <a href="/token">Token</a>
            <a href="/contact">Contact</a>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="nav-mobile">
            <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="/about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="/services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="/trustees" onClick={() => setIsMenuOpen(false)}>Trustees</a>
            <a href="/employees" onClick={() => setIsMenuOpen(false)}>Employees</a>
            <a href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="/token" onClick={() => setIsMenuOpen(false)}>Token</a>
            <a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
