import React, { useState, useEffect } from 'react';
import bannersData from '../../data/banners.json';

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = bannersData.banners;

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner-carousel">
      <div className="banner-container">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${banner.image})`,
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <div className="banner-overlay">
              <div className="banner-content">
                <h2>{banner.title}</h2>
                <p>{banner.subtitle}</p>
                {banner.link && (
                  <a href={banner.link} className="banner-cta">
                    Learn More
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="banner-nav banner-prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="banner-nav banner-next" onClick={nextSlide}>
        ›
      </button>

      {/* Dots Indicator */}
      <div className="banner-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
