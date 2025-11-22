import React from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import Header from './components/common/Header';
import HeroBanner from './components/layout/HeroBanner';
import NotificationBoard from './components/layout/NotificationBoard';
import ImageGallery from './components/media/ImageGallery';
import VideoGallery from './components/media/VideoGallery';

const TempleApp = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-temple-warm-50">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <HeroBanner />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Notifications and Quick Info */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <NotificationBoard />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-temple-red-500 mb-4 flex items-center">
                <span className="mr-2">🕉️</span>
                Quick Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-gray-600">Mahakaleshwar Temple, Ujjain, MP</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold">Contact</p>
                    <p className="text-sm text-gray-600">+91-734-255-6001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎫</span>
                  <div>
                    <p className="font-semibold">Online Booking</p>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Videos */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-temple-red-500 mb-4">
                Virtual Darshan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the divine presence of Lord Mahakaleshwar through our virtual darshan videos
              </p>
            </div>
            <VideoGallery category="featured" limit={3} />
          </section>

          {/* Image Gallery Preview */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-temple-red-500 mb-4">
                Temple Gallery
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore the beautiful architecture and sacred spaces of our temple
              </p>
            </div>
            <ImageGallery category="all" limit={8} />
            <div className="text-center mt-8">
              <button className="bg-temple-saffron-500 hover:bg-temple-saffron-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-temple">
                View Full Gallery
              </button>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-temple-red-500 mb-4">
                Temple Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🙏', title: 'Daily Aarti', desc: 'Morning & Evening prayers' },
                { icon: '🎭', title: 'Special Pujas', desc: 'Customized worship services' },
                { icon: '💰', title: 'Online Donations', desc: 'Secure payment gateway' },
                { icon: '📚', title: 'Spiritual Learning', desc: 'Vedic knowledge sessions' }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-temple-red-500 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-temple-red-500 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">महाकालेश्वर मंदिर</h3>
                <p className="text-temple-red-100">
                  One of the twelve Jyotirlingas, blessed with divine presence of Lord Shiva
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-temple-red-100">
                  <li><a href="#" className="hover:text-white">About Temple</a></li>
                  <li><a href="#" className="hover:text-white">Services</a></li>
                  <li><a href="#" className="hover:text-white">Events</a></li>
                  <li><a href="#" className="hover:text-white">Gallery</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Timings</h4>
                <ul className="space-y-2 text-temple-red-100">
                  <li>Morning: 4:00 AM - 11:00 AM</li>
                  <li>Evening: 4:00 PM - 11:00 PM</li>
                  <li>Aarti: 5:00 AM & 7:00 PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-temple-red-100">
                  <li>📍 Ujjain, Madhya Pradesh</li>
                  <li>📞 +91-734-255-6001</li>
                  <li>📧 info@mahakaleshwar.org</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-temple-red-400 mt-8 pt-8 text-center text-temple-red-100">
              <p>&copy; 2024 Mahakaleshwar Temple. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default TempleApp;
