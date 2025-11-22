# Temple Website Architecture

## Folder Structure
```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   ├── LanguageSelector.jsx
│   │   └── LoadingSpinner.jsx
│   ├── layout/
│   │   ├── HeroBanner.jsx
│   │   ├── NotificationBoard.jsx
│   │   └── Sidebar.jsx
│   ├── media/
│   │   ├── ImageGallery.jsx
│   │   ├── VideoGallery.jsx
│   │   └── MediaModal.jsx
│   ├── content/
│   │   ├── TempleInfo.jsx
│   │   ├── EventCard.jsx
│   │   ├── ServiceCard.jsx
│   │   └── NewsCard.jsx
│   └── forms/
│       ├── ContactForm.jsx
│       └── DonationForm.jsx
├── data/
│   ├── images.json
│   ├── videos.json
│   ├── events.json
│   ├── services.json
│   └── translations.json
├── hooks/
│   ├── useLanguage.js
│   ├── useMedia.js
│   └── useLocalStorage.js
├── utils/
│   ├── constants.js
│   ├── helpers.js
│   └── api.js
├── styles/
│   ├── globals.css
│   └── components.css
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Gallery.jsx
    ├── Events.jsx
    └── Contact.jsx
```

## Color Palette (Temple-Inspired)
- Primary: #FF6B35 (Saffron)
- Secondary: #B91C1C (Deep Red)
- Accent: #F59E0B (Gold)
- Background: #FFF7ED (Warm White)
- Text: #1F2937 (Dark Gray)
- Success: #059669 (Green)
