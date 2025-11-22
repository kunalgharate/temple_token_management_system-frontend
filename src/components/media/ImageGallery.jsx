import React, { useState } from 'react';
import imagesData from '../../data/images.json';

const ImageGallery = ({ category = 'all', limit = null }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState(category);

  const categories = ['all', 'exterior', 'interior', 'rituals', 'festivals', 'devotion'];

  const getFilteredImages = () => {
    let images = imagesData.gallery || [];
    
    if (filter !== 'all') {
      images = images.filter(img => img.category === filter);
    }
    
    if (limit) {
      images = images.slice(0, limit);
    }
    
    return images;
  };

  const filteredImages = getFilteredImages();

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
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
                background: filter === cat ? 'var(--temple-saffron)' : 'white',
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

      {/* Image Grid */}
      <div className="grid grid-gallery">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <div className="gallery-text">
                <h3 style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>{image.title}</h3>
                {image.description && (
                  <p style={{ margin: 0, fontSize: '0.875rem', opacity: '0.9' }}>{image.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.9)',
          padding: '1rem'
        }}>
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-3rem',
                right: 0,
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '0.5rem'
              }}
            />

            {/* Image Info */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '1rem',
              borderRadius: '0 0 0.5rem 0.5rem'
            }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{selectedImage.title}</h3>
              {selectedImage.description && (
                <p style={{ margin: 0, opacity: '0.9' }}>{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
