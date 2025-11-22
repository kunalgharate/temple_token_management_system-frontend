import React, { useState, useEffect } from 'react';

const NotificationBoard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const notifications = [
    {
      id: 1,
      title: 'Special Mahashivratri Celebration',
      message: 'Join us for the grand Mahashivratri celebration on March 8th, 2024',
      icon: '📢',
      type: 'announcement'
    },
    {
      id: 2,
      title: 'Temple Timing Update',
      message: 'Temple will remain open till 12:00 AM during festival days',
      icon: '🕐',
      type: 'timing'
    },
    {
      id: 3,
      title: 'Online Token System',
      message: 'Fill your visitor details online using our token system',
      icon: '🎫',
      type: 'service'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [notifications.length]);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-3">
        <div className="flex items-center space-x-2">
          <span className="text-lg">📋</span>
          <h3 className="font-semibold">Temple Notifications</h3>
        </div>
      </div>

      {/* Notification Content */}
      <div className="relative h-32 overflow-hidden">
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out p-4 ${
              index === currentIndex ? 'translate-x-0' : 
              index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className="flex items-start space-x-3">
              <span className="text-2xl">{notification.icon}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-red-600 mb-1">{notification.title}</h4>
                <p className="text-gray-700 text-sm">{notification.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 py-3 bg-gray-50">
        {notifications.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationBoard;
