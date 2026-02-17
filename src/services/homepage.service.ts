import { STRAPI_CONFIG } from '../config/strapi.config';
import type { 
  StrapiResponse,
  StrapiSingleResponse,
  HeroSlide,
  Category,
  WhyChooseUsFeature,
  TeaTypesSectionAttributes,
  Product,
  GiftBox,
  Partner,
  Testimonial,
  AboutSectionAttributes,
  BlogPost,
  HomePageSEOAttributes
} from '../types/strapi.types';

const API_URL = `${STRAPI_CONFIG.API_URL}/api`;

// Helper function to build URL with query parameters
const buildUrl = (endpoint: string, params: Record<string, any>): string => {
  const url = new URL(`${API_URL}${endpoint}`);
  
  if (params.populate) {
    url.searchParams.append('populate', params.populate);
  }
  
  if (params.sort) {
    params.sort.forEach((sortItem: string) => {
      url.searchParams.append('sort', sortItem);
    });
  }
  
  if (params.filters) {
    Object.keys(params.filters).forEach(key => {
      const filterValue = params.filters[key];
      if (typeof filterValue === 'object' && filterValue.$eq !== undefined) {
        url.searchParams.append(`filters[${key}][$eq]`, filterValue.$eq.toString());
      }
    });
  }
  
  if (params.pagination) {
    Object.keys(params.pagination).forEach(key => {
      url.searchParams.append(`pagination[${key}]`, params.pagination[key].toString());
    });
  }
  
  return url.toString();
};

// Hero Slider
export const getHeroSlides = async (): Promise<StrapiResponse<HeroSlide[]> | null> => {
  try {
    const url = buildUrl('/hero-sliders', {
      populate: '*',
      sort: ['order:asc'],
      filters: {
        isActive: { $eq: true },
      },
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hero slides:', error);
    return null;
  }
};

// Categories
export const getCategories = async (): Promise<StrapiResponse<Category[]> | null> => {
  try {
    const url = buildUrl('/categories', {
      populate: '*',
      sort: ['order:asc'],
      filters: {
        isActive: { $eq: true },
      },
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
};

// Why Choose Us Features
export const getWhyChooseUsFeatures = async (): Promise<StrapiResponse<WhyChooseUsFeature[]> | null> => {
  try {
    const url = buildUrl('/why-choose-us-features', {
      populate: '*',
      sort: ['order:asc'],
      filters: {
        isActive: { $eq: true },
      },
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching why choose us features:', error);
    return null;
  }
};

// Tea Types Section
export const getTeaTypesSection = async (): Promise<StrapiSingleResponse<TeaTypesSectionAttributes> | null> => {
  try {
    const url = buildUrl('/tea-types-section', {
      populate: '*',
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tea types section:', error);
    return null;
  }
};

// Featured Products
export const getFeaturedProductsForHome = async (limit = 8): Promise<StrapiResponse<Product[]> | null> => {
  try {
    const url = buildUrl('/products', {
      populate: '*',
      filters: {
        isFeatured: { $eq: true },
        isActive: { $eq: true },
      },
      pagination: {
        limit: limit,
      },
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return null;
  }
};

// Gift Boxes
export const getGiftBoxes = async (): Promise<StrapiResponse<GiftBox[]> | null> => {
  try {
    const url = buildUrl('/gift-boxes', {
      populate: '*',
      sort: ['order:asc'],
      filters: {
        isActive: { $eq: true },
      },
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching gift boxes:', error);
    return null;
  }
};

// Partners
export const getPartners = async (): Promise<StrapiResponse<Partner[]> | null> => {
  try {
    const url = buildUrl('/partners', {
      populate: '*',
      sort: ['order:asc'],
      filters: {
        isActive: { $eq: true },
      },
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching partners:', error);
    return null;
  }
};

// Testimonials
export const getTestimonials = async (): Promise<StrapiResponse<Testimonial[]> | null> => {
  try {
    const url = buildUrl('/testimonials', {
      populate: '*',
      sort: ['order:asc'],
      filters: {
        isActive: { $eq: true },
      },
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return null;
  }
};

// About Section
export const getAboutSection = async (): Promise<StrapiSingleResponse<AboutSectionAttributes> | null> => {
  try {
    const url = buildUrl('/about-section', {
      populate: '*',
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching about section:', error);
    return null;
  }
};

// Featured Blog Posts
export const getFeaturedBlogPosts = async (limit = 3): Promise<StrapiResponse<BlogPost[]> | null> => {
  try {
    const url = buildUrl('/blog-posts', {
      populate: '*',
      filters: {
        isFeatured: { $eq: true },
        isActive: { $eq: true },
      },
      sort: ['publishedDate:desc'],
      pagination: {
        limit: limit,
      },
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return null;
  }
};

// Home Page SEO
export const getHomePageSEO = async (): Promise<StrapiSingleResponse<HomePageSEOAttributes> | null> => {
  try {
    const url = buildUrl('/home-page-seo', {
      populate: '*',
    });
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching home page SEO:', error);
    return null;
  }
};

