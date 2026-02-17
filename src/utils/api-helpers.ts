/**
 * API Helper Functions
 * Utility functions for working with Strapi API responses
 */

import type { StrapiEntity, StrapiMedia } from '../types/strapi.types';
import { getStrapiImageUrl } from '../config/strapi.config';

/**
 * Extract data from Strapi entity
 */
export const extractStrapiData = <T>(entity: StrapiEntity<T>): T & { id: number } => {
  return {
    id: entity.id,
    ...entity.attributes,
  };
};

/**
 * Extract data from array of Strapi entities
 */
export const extractStrapiDataArray = <T>(
  entities: StrapiEntity<T>[]
): (T & { id: number })[] => {
  return entities.map(extractStrapiData);
};

/**
 * Get image URL from Strapi media
 */
export const getImageUrl = (media: StrapiMedia | null | undefined): string => {
  if (!media) return '';
  return getStrapiImageUrl(media.attributes.url);
};

/**
 * Get thumbnail URL from Strapi media
 */
export const getThumbnailUrl = (media: StrapiMedia | null | undefined): string => {
  if (!media) return '';
  
  if (media.attributes.formats?.thumbnail?.url) {
    return getStrapiImageUrl(media.attributes.formats.thumbnail.url);
  }
  
  if (media.attributes.formats?.small?.url) {
    return getStrapiImageUrl(media.attributes.formats.small.url);
  }
  
  return getImageUrl(media);
};

/**
 * Get multiple image URLs
 */
export const getImageUrls = (medias: StrapiMedia[] | null | undefined): string[] => {
  if (!medias || !Array.isArray(medias)) return [];
  return medias.map((media) => getImageUrl(media));
};

/**
 * Format product data for frontend use
 */
export const formatProduct = (product: StrapiEntity<any>) => {
  const data = extractStrapiData(product);
  
  return {
    ...data,
    images: data.images?.data ? getImageUrls(data.images.data) : [],
    thumbnail: data.images?.data?.[0] ? getThumbnailUrl(data.images.data[0]) : '',
    mainImage: data.images?.data?.[0] ? getImageUrl(data.images.data[0]) : '',
    category: data.category?.data ? extractStrapiData(data.category.data) : null,
    categories: data.categories?.data ? extractStrapiDataArray(data.categories.data) : [],
  };
};

/**
 * Format category data for frontend use
 */
export const formatCategory = (category: StrapiEntity<any>) => {
  const data = extractStrapiData(category);
  
  return {
    ...data,
    image: data.image?.data ? getImageUrl(data.image.data) : '',
    thumbnail: data.image?.data ? getThumbnailUrl(data.image.data) : '',
    parent: data.parent?.data ? extractStrapiData(data.parent.data) : null,
    products: data.products?.data ? extractStrapiDataArray(data.products.data) : [],
  };
};

/**
 * Format phone number to E.164 format
 * E.164 format: +[country code][number] (e.g., +919876543210)
 */
export const formatPhoneToE164 = (phone: string): string => {
  if (!phone) return '';
  
  // Remove all non-digit characters except +
  let cleaned = phone.replace(/[^\d+]/g, '');
  
  // If already in E.164 format (starts with +), return as is
  if (cleaned.startsWith('+')) {
    return cleaned;
  }
  
  // If starts with country code (91 for India), add +
  if (cleaned.startsWith('91') && cleaned.length >= 12) {
    return `+${cleaned}`;
  }
  
  // If it's a 10-digit number (Indian mobile), add +91
  if (cleaned.length === 10 && /^\d{10}$/.test(cleaned)) {
    return `+91${cleaned}`;
  }
  
  // If it's 12 digits and starts with 91, add +
  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return `+${cleaned}`;
  }
  
  // Return with + if it doesn't have one
  return cleaned.startsWith('+') ? cleaned : `+${cleaned}`;
};

