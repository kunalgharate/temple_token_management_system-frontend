import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🙏',
      title: 'Daily Aarti',
      description: 'Experience the divine morning and evening aarti ceremonies',
      timings: 'Morning: 5:00 AM | Evening: 7:00 PM',
      price: 'Free for all devotees'
    },
    {
      icon: '🔥',
      title: 'Bhasma Aarti',
      description: 'Special aarti performed with sacred ash, unique to Mahakaleshwar',
      timings: 'Daily at 4:00 AM',
      price: 'Special booking required'
    },
    {
      icon: '🎭',
      title: 'Special Pujas',
      description: 'Customized worship services for special occasions',
      timings: 'By appointment',
      price: 'Varies by puja type'
    },
    {
      icon: '💰',
      title: 'Online Donations',
      description: 'Secure online donation system for temple development',
      timings: 'Available 24/7',
      price: 'Any amount welcome'
    },
    {
      icon: '🎫',
      title: 'Token System',
      description: 'Digital visitor registration for smooth darshan experience',
      timings: 'Available during temple hours',
      price: 'Free service'
    },
    {
      icon: '📚',
      title: 'Spiritual Learning',
      description: 'Vedic knowledge sessions and spiritual discourses',
      timings: 'Weekends 6:00 PM',
      price: 'Free participation'
    }
  ];

  const specialEvents = [
    {
      title: 'Mahashivratri',
      date: 'March 8, 2024',
      description: 'Grand celebration with special rituals and cultural programs'
    },
    {
      title: 'Shravan Month',
      date: 'July - August',
      description: 'Special prayers and offerings throughout the holy month'
    },
    {
      title: 'Kartik Purnima',
      date: 'November 15, 2024',
      description: 'Sacred festival with evening aarti and devotional activities'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed' }}>
      {/* Page Header with Background */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1604608672516-f1b9b1a4a0e5?w=1200)',
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
            Temple Services
          </h1>
          <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            मंदिर सेवाएं
          </h2>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          {/* Services Grid */}
          <section className="section">
            <div className="grid grid-3">
              {services.map((service, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
                      {service.icon}
                    </div>
                    <h3 style={{ textAlign: 'center', color: 'var(--temple-red)', marginBottom: '1rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '1rem' }}>
                      {service.description}
                    </p>
                    <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                      <div style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--temple-red)' }}>Timings:</strong>
                        <span style={{ color: '#6b7280', marginLeft: '0.5rem' }}>{service.timings}</span>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--temple-red)' }}>Price:</strong>
                        <span style={{ color: '#6b7280', marginLeft: '0.5rem' }}>{service.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Special Events */}
          <section className="section">
            <div className="section-title">
              <h2>Special Events & Festivals</h2>
              <p>Join us for these sacred celebrations throughout the year</p>
            </div>
            <div className="grid grid-3">
              {specialEvents.map((event, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <h3 style={{ color: 'var(--temple-red)', marginBottom: '0.5rem' }}>
                      {event.title}
                    </h3>
                    <p style={{ color: 'var(--temple-gold)', fontWeight: '600', marginBottom: '1rem' }}>
                      {event.date}
                    </p>
                    <p style={{ color: '#6b7280' }}>
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Booking Information */}
          <section className="section">
            <div className="card" style={{ background: 'linear-gradient(135deg, var(--temple-saffron), var(--temple-red))', color: 'white' }}>
              <div className="card-content" style={{ textAlign: 'center', padding: '3rem' }}>
                <h2 style={{ marginBottom: '1rem', color: 'white' }}>Book Your Services</h2>
                <p style={{ marginBottom: '2rem', opacity: '0.9' }}>
                  For special pujas, donations, or any queries about our services, please contact us
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <button className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                    Contact Temple Office
                  </button>
                  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div>
                      <strong>Phone:</strong> +91-734-255-6001
                    </div>
                    <div>
                      <strong>Email:</strong> services@mahakaleshwar.org
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guidelines */}
          <section className="section">
            <div className="grid grid-1-3">
              <div>
                <h2 style={{ fontSize: '2rem', color: 'var(--temple-red)', marginBottom: '1.5rem' }}>
                  Visitor Guidelines
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.8' }}>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--temple-saffron)' }}>•</span>
                    Dress modestly and remove footwear before entering
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--temple-saffron)' }}>•</span>
                    Mobile phones should be on silent mode
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--temple-saffron)' }}>•</span>
                    Photography inside sanctum is not permitted
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--temple-saffron)' }}>•</span>
                    Follow queue system for smooth darshan
                  </li>
                  <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--temple-saffron)' }}>•</span>
                    Maintain cleanliness and sanctity of the premises
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">
                    <span>ℹ️</span>
                    Important Information
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--temple-red)' }}>Security Check</h4>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
                        All visitors undergo security screening
                      </p>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--temple-red)' }}>Prasad Counter</h4>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
                        Sacred prasad available at temple counter
                      </p>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--temple-red)' }}>Parking</h4>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
                        Dedicated parking area available
                      </p>
                    </div>
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

export default Services;
