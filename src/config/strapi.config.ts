/**
 * Strapi CMS Configuration
 * Environment variables are prefixed with VITE_ for Vite to expose them
 */

export const STRAPI_CONFIG = {
  // Base URL for Strapi API
  API_URL: import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337',
  
  // API Token for authenticated requests (optional, for protected endpoints)
  API_TOKEN: import.meta.env.VITE_STRAPI_API_TOKEN || '',
  
  // API endpoints
  ENDPOINTS: {
    // Authentication endpoints
    AUTH: {
      LOGIN: '/api/auth/local',
      REGISTER: '/api/auth/local/register',
      FORGOT_PASSWORD: '/api/auth/forgot-password',
      RESET_PASSWORD: '/api/auth/reset-password',
      EMAIL_CONFIRMATION: '/api/auth/email-confirmation',
      SEND_EMAIL_CONFIRMATION: '/api/auth/send-email-confirmation',
      CHANGE_PASSWORD: '/api/auth/change-password',
    },
    
    // OTP endpoints
    OTP: {
      SEND: '/api/auth/send-otp',
      LOGIN_WITH_OTP: '/api/auth/login-with-otp',
      REGISTER_WITH_OTP: '/api/auth/register-with-otp',
    },
    
    // Content endpoints
    PRODUCTS: '/api/products',
    CATEGORIES: '/api/categories',
    CONTACT: '/api/contact',
    CONTENT: {
      HOME: '/api/home',
      HERO_SLIDES: '/api/hero-slides',
      FEATURED_PRODUCTS: '/api/featured-products',
      TESTIMONIALS: '/api/testimonials',
      BLOG_POSTS: '/api/blog-posts',
    },
    
    // User endpoints
    USERS: '/api/users',
    ME: '/api/users/me',
  },
  
  // Request timeout in milliseconds
  TIMEOUT: 30000,
};

// Helper function to get full API URL
export const getStrapiUrl = (endpoint: string): string => {
  const baseUrl = STRAPI_CONFIG.API_URL.replace(/\/$/, ''); // Remove trailing slash
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${baseUrl}${path}`;
};

// Helper function to get image URL from Strapi
export const getStrapiImageUrl = (imageUrl: string | null | undefined): string => {
  if (!imageUrl) return '';
  
  // If already a full URL, return as is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // Otherwise, prepend Strapi base URL
  const baseUrl = STRAPI_CONFIG.API_URL.replace(/\/$/, '');
  return `${baseUrl}${imageUrl}`;
};

