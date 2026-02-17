/**
 * Home Page Service
 * Handles all home page content API calls to Strapi
 */

import { apiGet } from '../utils/api';
import { STRAPI_CONFIG } from '../config/strapi.config';
import type {
  StrapiEntity,
  StrapiResponse,
} from '../types/strapi.types';

// Hero Slide Types
export interface HeroSlideAttributes {
  eyebrow?: string;
  title: string;
  description: string;
  image?: {
    data?: {
      attributes?: {
        url?: string;
        alternativeText?: string;
      };
    };
  };
  video?: {
    data?: {
      attributes?: {
        url?: string;
        mime?: string;
      };
    };
  };
  ctaLabel?: string;
  ctaLink?: string;
  order?: number;
  publishedAt?: string;
}

// Featured Product Types
export interface FeaturedProductAttributes {
  product?: {
    data?: StrapiEntity<any>;
  };
  order?: number;
}

// Testimonial Types
export interface TestimonialAttributes {
  name: string;
  location?: string;
  title: string;
  quote: string;
  image?: {
    data?: {
      attributes?: {
        url?: string;
        alternativeText?: string;
      };
    };
  };
  rating?: number;
  order?: number;
  publishedAt?: string;
}

// Blog Post Types
export interface BlogPostAttributes {
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  image?: {
    data?: {
      attributes?: {
        url?: string;
        alternativeText?: string;
      };
    };
  };
  categories?: {
    data?: StrapiEntity<any>[];
  };
  publishedAt?: string;
}

// Home Page Content Types
export interface HomePageAttributes {
  heroSlides?: {
    data?: StrapiEntity<HeroSlideAttributes>[];
  };
  featuredProducts?: {
    data?: StrapiEntity<FeaturedProductAttributes>[];
  };
  testimonials?: {
    data?: StrapiEntity<TestimonialAttributes>[];
  };
  featuredBlogs?: {
    data?: StrapiEntity<BlogPostAttributes>[];
  };
}

/**
 * Get hero slides
 */
export const getHeroSlides = async (): Promise<StrapiResponse<StrapiEntity<HeroSlideAttributes>[]>> => {
  const endpoint = STRAPI_CONFIG.ENDPOINTS.CONTENT?.HERO_SLIDES || '/api/hero-slides';
  const params = new URLSearchParams({
    'populate': '*',
    'sort': 'order:asc',
  });
  
  return apiGet<StrapiResponse<StrapiEntity<HeroSlideAttributes>[]>>(`${endpoint}?${params}`);
};

/**
 * Get featured products for home page
 */
export const getFeaturedProducts = async (limit: number = 4): Promise<StrapiResponse<StrapiEntity<FeaturedProductAttributes>[]>> => {
  const endpoint = STRAPI_CONFIG.ENDPOINTS.CONTENT?.FEATURED_PRODUCTS || '/api/featured-products';
  const params = new URLSearchParams({
    'populate': 'deep',
    'sort': 'order:asc',
    'pagination[limit]': limit.toString(),
  });
  
  return apiGet<StrapiResponse<StrapiEntity<FeaturedProductAttributes>[]>>(`${endpoint}?${params}`);
};

/**
 * Get testimonials
 */
export const getTestimonials = async (limit: number = 5): Promise<StrapiResponse<StrapiEntity<TestimonialAttributes>[]>> => {
  const endpoint = STRAPI_CONFIG.ENDPOINTS.CONTENT?.TESTIMONIALS || '/api/testimonials';
  const params = new URLSearchParams({
    'populate': '*',
    'sort': 'order:asc',
    'pagination[limit]': limit.toString(),
  });
  
  return apiGet<StrapiResponse<StrapiEntity<TestimonialAttributes>[]>>(`${endpoint}?${params}`);
};

/**
 * Get featured blog posts
 */
export const getFeaturedBlogs = async (limit: number = 3): Promise<StrapiResponse<StrapiEntity<BlogPostAttributes>[]>> => {
  const endpoint = STRAPI_CONFIG.ENDPOINTS.CONTENT?.BLOG_POSTS || '/api/blog-posts';
  const params = new URLSearchParams({
    'populate': '*',
    'filters[featured][$eq]': 'true',
    'sort': 'publishedAt:desc',
    'pagination[limit]': limit.toString(),
  });
  
  return apiGet<StrapiResponse<StrapiEntity<BlogPostAttributes>[]>>(`${endpoint}?${params}`);
};

/**
 * Get complete home page content
 */
export const getHomePageContent = async (): Promise<HomePageAttributes> => {
  try {
    const [heroSlides, featuredProducts, testimonials, featuredBlogs] = await Promise.all([
      getHeroSlides().catch(() => ({ data: [] })),
      getFeaturedProducts(4).catch(() => ({ data: [] })),
      getTestimonials(5).catch(() => ({ data: [] })),
      getFeaturedBlogs(3).catch(() => ({ data: [] })),
    ]);

    return {
      heroSlides: { data: heroSlides.data || [] },
      featuredProducts: { data: featuredProducts.data || [] },
      testimonials: { data: testimonials.data || [] },
      featuredBlogs: { data: featuredBlogs.data || [] },
    };
  } catch (error) {
    console.error('Error fetching home page content:', error);
    return {
      heroSlides: { data: [] },
      featuredProducts: { data: [] },
      testimonials: { data: [] },
      featuredBlogs: { data: [] },
    };
  }
};

/**
 * Helper function to get image URL from Strapi media
 */
export const getImageUrl = (media: any): string => {
  if (!media?.data?.attributes?.url) return '';
  const url = media.data.attributes.url;
  return url.startsWith('http') ? url : `${STRAPI_CONFIG.API_URL}${url}`;
};

/**
 * Helper function to get video URL from Strapi media
 */
export const getVideoUrl = (media: any): string => {
  if (!media?.data?.attributes?.url) return '';
  const url = media.data.attributes.url;
  return url.startsWith('http') ? url : `${STRAPI_CONFIG.API_URL}${url}`;
};

