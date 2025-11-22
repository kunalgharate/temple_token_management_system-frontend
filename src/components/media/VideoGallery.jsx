import React, { useState } from 'react';
import videosData from '../../data/videos.json';

const VideoGallery = ({ category = 'all', limit = null }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filter, setFilter] = useState(category);

  const categories = ['all', 'featured', 'aarti', 'festivals'];

  const getVideos = () => {
    if (filter === 'all') {
      return Object.values(videosData).flat();
    }
    return videosData[filter] || [];
  };

  const getFilteredVideos = () => {
    let videos = getVideos();
    
    if (limit) {
      videos = videos.slice(0, limit);
    }
    
    return videos;
  };

  const filteredVideos = getFilteredVideos();

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  const getYouTubeEmbedUrl = (youtubeId) => {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
  };

  return (
    <div>
      {/* Category Filter - only show if category is 'all' */}
      {category === 'all' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                border: 'none',
                background: filter === cat ? 'var(--temple-red)' : 'white',
                color: filter === cat ? 'white' : '#6b7280',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Video Grid */}
      <div className="grid grid-3">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="video-item"
            onClick={() => openVideoModal(video)}
          >
            {/* Thumbnail */}
            <div className="video-thumbnail">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="video-image"
                loading="lazy"
              />
              
              {/* Play Button Overlay */}
              <div className="video-play-overlay">
                <div className="play-button">
                  ▶
                </div>
              </div>

              {/* Duration Badge */}
              {video.duration && (
                <div className="video-duration">
                  {video.duration}
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0.5rem 0' }}>
                {video.description}
              </p>
              {video.time && (
                <p style={{ color: 'var(--temple-saffron)', fontSize: '0.75rem', fontWeight: '600', margin: 0 }}>
                  {video.time}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.95)',
          padding: '1rem'
        }}
        onClick={closeVideoModal}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '64rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              style={{
                position: 'absolute',
                top: '-2.5rem',
                right: 0,
                background: '#FF6B35',
                border: 'none',
                color: 'white',
                fontSize: '1rem',
                cursor: 'pointer',
                zIndex: 10,
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>✕</span>
              <span>Close</span>
            </button>

            {/* Video Player */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.5rem', background: '#000' }}>
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo.youtubeId)}
                title={selectedVideo.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div style={{ marginTop: '1rem', color: 'white', padding: '0 0.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', margin: '0.5rem 0' }}>
                {selectedVideo.title}
              </h3>
              <p style={{ color: '#d1d5db', margin: 0, fontSize: '0.875rem' }}>
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
