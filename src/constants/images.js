// Image paths constants for clean architecture
export const IMAGE_PATHS = {
  // Base paths
  ASSETS_BASE: '/assets/images',
  
  // Category paths
  BANNERS: '/assets/images/banners',
  GALLERY: '/assets/images/gallery',
  TRUSTEES: '/assets/images/trustees',
  TEMPLE: '/assets/images/temple',
  ICONS: '/assets/images/icons',
  
  // Default images
  DEFAULT_TRUSTEE: '/assets/images/trustees/default-trustee.jpg',
  DEFAULT_BANNER: '/assets/images/banners/default-banner.jpg',
  TEMPLE_LOGO: '/assets/images/icons/temple-logo.png',
  
  // Placeholder images (fallback)
  PLACEHOLDER: {
    TRUSTEE: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    BANNER: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=500&fit=crop',
    GALLERY: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop'
  }
};

// Helper function to get image path
export const getImagePath = (category, filename) => {
  return `${IMAGE_PATHS[category.toUpperCase()]}/${filename}`;
};

// Helper function to get image with fallback
export const getImageWithFallback = (imagePath, fallbackType = 'GALLERY') => {
  return imagePath || IMAGE_PATHS.PLACEHOLDER[fallbackType];
};
