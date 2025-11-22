import React, { useState } from 'react';
import ImageGallery from '../components/media/ImageGallery';
import VideoGallery from '../components/media/VideoGallery';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
      {/* Page Header with Background */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1548013146-72479768bada?w=1200)',
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
            Temple Gallery
          </h1>
          <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            मंदिर गैलरी
          </h2>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          {/* Tab Navigation */}
          <section className="section">
            <div className="gallery-tabs">
              <div className="gallery-tabs-container">
                <button
                  onClick={() => setActiveTab('photos')}
                  className={`gallery-tab-button ${activeTab === 'photos' ? 'active' : ''}`}
                >
                  <span>📸</span>
                  <span>Photos</span>
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`gallery-tab-button ${activeTab === 'videos' ? 'active' : ''}`}
                >
                  <span>🎥</span>
                  <span>Videos</span>
                </button>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'photos' && (
              <div>
                <div className="section-title">
                  <h2>Photo Gallery</h2>
                  <p>Sacred moments and architectural beauty captured in images</p>
                </div>
                <ImageGallery limit={null} />
              </div>
            )}

            {activeTab === 'videos' && (
              <div>
                <div className="section-title">
                  <h2>Video Gallery</h2>
                  <p>Experience virtual darshan and temple ceremonies</p>
                </div>
                <VideoGallery limit={null} />
              </div>
            )}
          </section>

          {/* Featured Highlights */}
          <section className="section">
            <div className="section-title">
              <h2>Gallery Highlights</h2>
            </div>
            <div className="grid grid-4">
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2917/2917242.png" alt="Architecture" style={{ width: '64px', height: '64px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>Architecture</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    Maratha period architectural marvels
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png" alt="Rituals" style={{ width: '64px', height: '64px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>Rituals</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    Daily aarti and special ceremonies
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2917/2917334.png" alt="Festivals" style={{ width: '64px', height: '64px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>Festivals</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    Grand celebrations throughout the year
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3588/3588435.png" alt="Devotion" style={{ width: '64px', height: '64px', margin: '0 auto' }} />
                  </div>
                  <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>Devotion</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    Devotees from around the world
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Virtual Tour CTA */}
          <section className="section">
            <div className="card" style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8C42)', color: 'white' }}>
              <div className="card-content" style={{ textAlign: 'center', padding: '3rem' }}>
                <h2 style={{ marginBottom: '1rem', color: 'white' }}>Take a Virtual Tour</h2>
                <p style={{ marginBottom: '2rem', opacity: '0.95', fontSize: '1.125rem' }}>
                  Experience the complete temple darshan from the comfort of your home
                </p>
                <button 
                  className="btn-secondary" 
                  style={{ 
                    borderColor: 'white', 
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.1)'
                  }}
                  onClick={() => window.location.href = '/gallery'}
                >
                  Start Virtual Tour
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
