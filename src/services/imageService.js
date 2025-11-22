import { IMAGE_PATHS, getImagePath, getImageWithFallback } from '../constants/images';

class ImageService {
  // Get trustee image
  getTrusteeImage(filename) {
    if (!filename) return IMAGE_PATHS.PLACEHOLDER.TRUSTEE;
    return getImagePath('trustees', filename);
  }

  // Get banner image
  getBannerImage(filename) {
    if (!filename) return IMAGE_PATHS.PLACEHOLDER.BANNER;
    return getImagePath('banners', filename);
  }

  // Get gallery image
  getGalleryImage(filename) {
    if (!filename) return IMAGE_PATHS.PLACEHOLDER.GALLERY;
    return getImagePath('gallery', filename);
  }

  // Get temple image
  getTempleImage(filename) {
    if (!filename) return IMAGE_PATHS.PLACEHOLDER.GALLERY;
    return getImagePath('temple', filename);
  }

  // Get icon
  getIcon(filename) {
    return getImagePath('icons', filename);
  }

  // Validate image exists (basic check)
  async validateImage(imagePath) {
    try {
      const response = await fetch(imagePath, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  // Get optimized image URL
  getOptimizedImage(imagePath, width = 800, height = 600, quality = 80) {
    // For future implementation with image optimization service
    return imagePath;
  }
}

export default new ImageService();
