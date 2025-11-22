import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/common/Header';
import HeroBanner from './components/layout/HeroBanner';
import BannerCarousel from './components/layout/BannerCarousel';
import NotificationBoard from './components/layout/NotificationBoard';
import ImageGallery from './components/media/ImageGallery';
import VideoGallery from './components/media/VideoGallery';
import { LanguageProvider } from './hooks/useLanguage';
import TokenForm from './TokenForm';

// Import pages
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Trustees from './pages/Trustees';
import Employees from './pages/Employees';
import Donations from './pages/Donations';
import PujaBooking from './pages/PujaBooking';

const HomePage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
      {/* Banner Carousel */}
      <BannerCarousel />
      
      {/* Notification Board - Important announcements */}
      <div className="container">
        <section className="section" style={{ paddingTop: '2rem' }}>
          <NotificationBoard />
        </section>
      </div>

      <main className="main-content">
        <div className="container">
          {/* About Temple - Brief Introduction */}
          <section className="section">
            <div className="card">
              <div className="card-content">
                <h2 style={{ color: 'var(--temple-primary)', marginBottom: '1rem', textAlign: 'center', fontSize: '2rem' }}>
                  शिव अर्ध: नरेश्वरी नाग ज्योर्तीलिंग धाम
                </h2>
                <h3 style={{ textAlign: 'center', color: '#6b7280', marginBottom: '1.5rem', fontWeight: 'normal' }}>
                  Shiv Ardh: Nareshwari Nag Jyotirlinga Dham
                </h3>
                <p style={{ textAlign: 'center', fontSize: '1.125rem', lineHeight: '1.8', color: '#374151', maxWidth: '800px', margin: '0 auto' }}>
                  Welcome to the sacred abode of Lord Shiva. Located in the serene hills of Dang, Gujarat, 
                  our temple is a divine destination for devotees seeking spiritual peace and blessings. 
                  Experience the divine presence through daily aarti, special pujas, and sacred rituals.
                </p>
              </div>
            </div>
          </section>

          {/* Darshan Timings */}
          <section className="section">
            <div className="section-title">
              <h2>Darshan Timings / दर्शन समय</h2>
            </div>
            <div className="grid grid-3">
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3094/3094837.png" alt="Morning" style={{ width: '64px', height: '64px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Morning Darshan</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', margin: '0.5rem 0' }}>4:00 AM - 11:00 AM</p>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>प्रातः दर्शन</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3588/3588435.png" alt="Aarti" style={{ width: '64px', height: '64px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Aarti Timings</h3>
                  <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: '0.5rem 0' }}>5:00 AM & 7:00 PM</p>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>आरती समय</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3094/3094840.png" alt="Evening" style={{ width: '64px', height: '64px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Evening Darshan</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', margin: '0.5rem 0' }}>4:00 PM - 11:00 PM</p>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>सायं दर्शन</p>
                </div>
              </div>
            </div>
          </section>

          {/* Online Services */}
          <section className="section">
            <div className="section-title">
              <h2>Online Services / ऑनलाइन सेवाएं</h2>
              <p>Book pujas, make donations, and access temple services from anywhere</p>
            </div>
            <div className="grid grid-3">
              {[
                { icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917995.png', title: 'Book Puja', titleHi: 'पूजा बुक करें', desc: 'Book special pujas and rituals online', link: '/puja-booking' },
                { icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png', title: 'Donate Online', titleHi: 'ऑनलाइन दान करें', desc: 'Support temple through secure donations', link: '/donations' },
                { icon: 'https://cdn-icons-png.flaticon.com/512/1584/1584808.png', title: 'Live Darshan', titleHi: 'लाइव दर्शन', desc: 'Watch live temple darshan', link: '/gallery' }
              ].map((service, index) => (
                <a key={index} href={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card service-card">
                    <div className="service-icon">
                      <img src={service.icon} alt={service.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p style={{ color: '#FF6B35', fontWeight: '600', fontSize: '0.875rem', margin: '0.25rem 0' }}>{service.titleHi}</p>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Accommodation & Facilities */}
          <section className="section">
            <div className="section-title">
              <h2>Facilities / सुविधाएं</h2>
            </div>
            <div className="grid grid-4">
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3050/3050155.png" alt="Accommodation" style={{ width: '56px', height: '56px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Accommodation</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Guest rooms available</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3480/3480822.png" alt="Prasad" style={{ width: '56px', height: '56px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Prasad Counter</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Divine prasad available</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png" alt="Parking" style={{ width: '56px', height: '56px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Parking</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Free parking facility</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3004/3004458.png" alt="Bhojan" style={{ width: '56px', height: '56px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Bhojanshala</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Free meals for devotees</p>
                </div>
              </div>
            </div>
          </section>

          {/* Virtual Darshan */}
          <section className="section">
            <div className="section-title">
              <h2>Virtual Darshan / आभासी दर्शन</h2>
              <p>Experience divine presence from anywhere in the world</p>
            </div>
            <VideoGallery limit={3} />
          </section>

          {/* Photo Gallery */}
          <section className="section">
            <div className="section-title">
              <h2>Temple Gallery / मंदिर गैलरी</h2>
            </div>
            <ImageGallery limit={6} />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a href="/gallery" style={{ 
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: '#FF6B35',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontWeight: '600'
              }}>
                View All Photos
              </a>
            </div>
          </section>

          {/* Temple Information */}
          <section className="section">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">
                  <img src="https://cdn-icons-png.flaticon.com/512/3588/3588307.png" alt="Om" style={{ width: '28px', height: '28px' }} />
                  Contact Information / संपर्क जानकारी
                </h3>
                <div className="grid grid-3">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" style={{ width: '32px', height: '32px', flexShrink: 0 }} />
                    <div>
                      <p style={{ margin: 0, fontWeight: '600' }}>Address</p>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>मु. पो. बिलमाळ (तुलसीगिड) पो. लिंगा, ता. आहवा, जि. डांग. (गुजरात)</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" style={{ width: '32px', height: '32px', flexShrink: 0 }} />
                    <div>
                      <p style={{ margin: 0, fontWeight: '600' }}>Contact</p>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>+91-734-255-6001</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" style={{ width: '32px', height: '32px', flexShrink: 0 }} />
                    <div>
                      <p style={{ margin: 0, fontWeight: '600' }}>Email</p>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>info@shivnagjyotirlinga.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nearby Places */}
          <section className="section">
            <div className="section-title">
              <h2>Nearby Places / आस-पास के स्थान</h2>
            </div>
            <div className="grid grid-4">
              <div className="card">
                <div className="card-content">
                  <h4 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Ahwa</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>15 km - District Headquarters</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h4 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Saputara</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>25 km - Hill Station</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h4 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Waghai</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>30 km - Botanical Garden</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h4 style={{ color: 'var(--temple-primary)', marginBottom: '0.5rem' }}>Surat</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>120 km - Nearest City</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>शिव अर्ध: नरेश्वरी नाग ज्योर्तीलिंग धाम</h3>
              <p>Sacred Jyotirlinga temple blessed with divine presence of Lord Shiva</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Temple</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/puja-booking">Book Puja</a></li>
                <li><a href="/donations">Donate</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Darshan Timings</h4>
              <ul>
                <li>Morning: 4:00 AM - 11:00 AM</li>
                <li>Evening: 4:00 PM - 11:00 PM</li>
                <li>Aarti: 5:00 AM & 7:00 PM</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>📍 मु. पो. बिलमाळ (तुलसीगिड), डांग, गुजरात</li>
                <li>📞 +91-734-255-6001</li>
                <li>📧 info@shivnagjyotirlinga.org</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 शिव अर्ध: नरेश्वरी नाग ज्योर्तीलिंग धाम. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/trustees" element={<Trustees />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/puja-booking" element={<PujaBooking />} />
            <Route path="/token" element={<TokenForm />} />
            <Route path="/token/:tokenNumber" element={<TokenForm />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
