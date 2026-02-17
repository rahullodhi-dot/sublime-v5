/**
 * Services Index
 * Export all services from a single entry point
 */

// Authentication services
export * from './auth.service';

// Products services
export * from './products.service';

// Categories services
export * from './categories.service';

// Contact services
export * from './contact.service';

// Helper functions (re-export from utils)
export { formatProduct, formatCategory, extractStrapiData, extractStrapiDataArray, getImageUrl, getThumbnailUrl, getImageUrls } from '../utils/api-helpers';

